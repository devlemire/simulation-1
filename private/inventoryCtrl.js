module.exports = {
  getShelf: (req, res, next) => {
    const db = req.app.get('db');
    db.get_shelf(req.params.id).then(inventory => {
      let maxBins = 5;
      let bins = [];
      
      for( var i = 0; i < maxBins; i++ ) {
        if ( inventory[i] ) {
          bins[ inventory[i].bin - 1 ] = inventory[i];
        } else if ( !bins[i] ) {
          bins[i] = null;
        }
      };

      res.status(200).send( bins );
    }).catch(function(err) {
      console.log(err);
    })
  },
  getBin: (req, res, next) => {
    const db = req.app.get('db');
    db.get_bin(req.params.id[0], req.params.id[1]).then(inventory => {
      res.status(200).send(inventory);
    }).catch(function(err) {
      console.log(err);
    })
  }
}
