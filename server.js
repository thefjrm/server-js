const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let result = weight / (height * 2);
  res.send(`The result is ${result}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
