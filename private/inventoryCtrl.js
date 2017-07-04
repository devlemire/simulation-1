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
      if(inventory.length > 0){
        res.status(200).send( inventory[0] );
      } else {
        res.status(200).send( null );
      }
    }).catch(function(err) {
      console.log(err);
    })
  },
  updateBin: (req, res, next) => {
    const db = req.app.get('db');
    const { name, price } = req.body;
     db.get_bin(req.params.id[0], req.params.id[1]).then(inventory => {
      let currentBin = inventory[0];
      db.update_bin(req.params.id[0], req.params.id[1], name || currentBin.name, price || currentBin.price).then(inventory => {
        res.status(200).send( inventory[0] );
      }).catch( err => console.log(err));
    }).catch(function(err) {
      console.log(err);
    })
  },
  deleteBin: (req, res, next) => {
    const db = req.app.get('db');
    db.delete_bin(req.params.id[0], req.params.id[1]).then(inventory => {
        res.status(200).send();
    }).catch( err => console.log(err));
  },
  addBin: (req, res, next) => {
    const db = req.app.get('db');
    db.add_bin(req.body.name, req.params.id[0], req.params.id[1], req.body.image, req.body.price).then(inventory => {
        res.status(200).send(inventory);
    }).catch( err => console.log(err));
  }
}
