const express = require('express');
const massive = require('massive')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

massive({
  host: "localhost",
  port: 4000,
  database: "inventory",
  user: "postgres",
  password: "Larios953"
}).then( db => {
  app.set('db', db);
});

const inventoryCtrl = require("./inventoryCtrl.js");

app.get("/api/shelf/:id", inventoryCtrl.getShelf);
// app.put("/api/inventory", inventoryCtrl.updateInventory);
// app.post("/api/inventory", inventoryCtrl.addToInventory);
// app.delete("/api/inventory", inventoryCtrl.removeFromInventory);

const port = 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
