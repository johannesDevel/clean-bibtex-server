const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const bibtex = require('./bibtex');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error: 'Please provide an authorization header'
    });
  }
});

app.post('/update', bodyParser.json(), (req, res) => {
  const entries = req.body.entries;

  if (entries) {
    bibtex.setData(req.token, req.body);
    res.status(200);
  } else {
    res.status(403).send({
      error: 'Wrong data'
    });
  }
});

app.get('/bibtex', (req, res) => {
  const serverState = bibtex.get(req.token);
  res.send(serverState);
});

app.get('/correctedAuthor', (req, res) => {
  res.send(bibtex.searchAuthor(req.token));
});

app.post('/bibtex', bodyParser.json(), (req, res) => {
  const bibtexText = req.body.bibtexText;
  if (bibtexText) {
    bibtex.postText(req.token, req.body);
    res.send({});
  } else {
    res.status(403).send({
      error: 'Wrong data'
    });
  }
});

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port);
});
