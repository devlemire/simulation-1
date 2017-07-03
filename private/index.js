const express = require('express');
const massive = require('massive');
const connectionString = require(`${__dirname}/config.js`);
const bodyParser = require('body-parser');
const cors = require('cors');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

massive( connectionString ).then( db => {
  app.set('db', db);
}).catch( err => console.log(err) );

const inventoryCtrl = require("./inventoryCtrl.js");

app.get("/api/shelf/:id", inventoryCtrl.getShelf);
app.get("/api/bin/:id", inventoryCtrl.getBin);

const port = 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
