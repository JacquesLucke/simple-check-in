const express = require("express");
const app = express();
const port = 3000;

const checked_in = {};

app.use(express.json());

app.use(express.static("public"));

app.post("/check_in", (req, res) => {
  checked_in[req.body.uuid] = req.body.name;
  console.log(checked_in);
  res.send("ok");
});

app.post("/check_out", (req, res) => {
  delete checked_in[req.body.uuid];
  console.log(checked_in);
  res.send("ok");
});

app.get("/checked_in", (req, res) => {
  res.json(checked_in);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
