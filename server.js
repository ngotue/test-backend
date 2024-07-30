const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = ["Get up", "Grap a coffee", "Happy coding !"];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  console.log(req.body);
  items.push(req.body.item);
  res.status(201).json(req.body.item);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
