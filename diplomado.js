const express = require("express");

const path = require("path");

const port = 5019;

const app = express();

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(dirname, "build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log("Server has been started...");
});
