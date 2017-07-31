const express = require('express');
const massive = require('massive');
const { connectionString } = require(`${__dirname}/config.js`);
const bodyParser = require('body-parser');
const cors = require('cors');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use( express.static(`${__dirname}/../public/build`) );

massive( connectionString ).then( db => {
  app.set('db', db);
}).catch( err => console.log(err) );

const inventoryCtrl = require("./inventoryCtrl.js");

app.get("/api/shelf/:id", inventoryCtrl.getShelf);
app.get("/api/bin/:id", inventoryCtrl.getBin);
app.put("/api/bin/:id", inventoryCtrl.updateBin);
app.delete("/api/bin/:id", inventoryCtrl.deleteBin);
app.post("/api/bin/:id", inventoryCtrl.addBin);

// GET - /api/shelf/:id - Return all inventory objects for bins 1-5 in array format: ( [ {}, null, null, {}, {} ] )
// GET - /api/bin/:id - Return inventory object located at id. id will look like: "A3", we can split this string and the first element will always be the shelf ID and the second element will always be the bin ID
// PUT - /api/bin/:id - Return updated inventory object. ID is same concept as above. I will send an object with any of the following properties: name, image, price
// DELETE - /api/bin/:id - Remove inventory from bin.
// POST - /api/bin/:id - Create inventory object. I will send an object with the following properties: name, shelf, bin, image, and price

const port = 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
