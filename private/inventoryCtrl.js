const app = require('./server.js');

module.exports = {
  getShelf: (req, res, next) => {
    const db = req.app.get('db');
    db.get_shelf(req.params.id).then(inventory => {
      res.status(200).send(inventory);
    }).catch(function(err) {
      console.log(err);
    })
  }
}
