const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const bibtex = require("./bibtex");

const app = express();

app.use(cors());

app.use((req, res, next) => {
  const token = req.get("Authorization");

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error: "Please provide an authorization header"
    });
  }
});

app.get("/bibtex", (req, res) => {
  const serverState = bibtex.get(req.token);
  console.log(serverState);

  res.send(serverState);
});

app.post("/bibtex", bodyParser.json(), (req, res) => {
  const bibtexText = req.body.bibtexText;
  if (bibtexText) {
    res.send(bibtex.postText(req.token, req.body));
  } else {
    res.status(403).send({
      error: "Wrong data"
    });
  }
});

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});
