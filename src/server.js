const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const bibtex = require('./bibtex');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));

app.use((req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    req.token = token;
    next();
  } else {
    req.token = 123;
    next();
    // res.status(403).send({
    //   error: 'Please provide an authorization header'
    // });
  }
});

app.post('/update', bodyParser.json(), (req, res) => {
  const entries = req.body.entries;

  if (entries) {
    bibtex.setData(req.token, req.body);
    res.sendStatus(200);
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

app.get('/changedBibtex', (req, res) => {
  const changedBibtex = bibtex.getEntriesAsBibtexString(req.token);
  if (changedBibtex != null) {
    res.send({ bibtex: changedBibtex });
  } else res.status(403).send({ error: 'no data' });
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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port);
});
