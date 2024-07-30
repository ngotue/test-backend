const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = ["buy swim suits", "buy sanity gel", "go to train station", "hop on the train", "get caught by regulator", "pay ten times the original price"];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  console.log(req.body)
  items.push(req.body.item);
  res.status(201).json(req.body.item);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
