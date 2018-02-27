// call the packages we need
const express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    routes = require('./app/bank'),
    config = require('./app/config/config.json'),
    Rox = require('rox-node');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(path.resolve('client/')));

const port = process.env.PORT || 3000
const hostname = '127.0.0.1';

const bankerFlags = {
  depositTurnedOn: new Rox.Flag()
}

// ROUTING
var router = express.Router()

router.get('/account/:number', function(req, res){
  routes.retrieveAccountInfo(req, res);
});


  router.post('/deposit', function(req, res) {
    if(bankerFlags.depositTurnedOn.isEnabled({req: req})){
      routes.deposit(req, res);
    } else {
      res.json({"status": "Deposit is turned off"});
    }
  });


router.post('/withdraw', function(req, res){
  routes.withdraw(req, res);
});

router.get('/config', function(req, res){
  routes.config(req, res);
});

// Define all of our ROUTES
app.use('/banker', router)

app.listen(port, hostname, () => {
  Rox.register('BankerFlags', bankerFlags);
  console.log(config.roxAPIKey);
  Rox.setup(config.roxAPIKey).then(() => {
    console.log("flag value: " + bankerFlags.depositTurnedOn.isEnabled());
  });
  
  console.log('Server started on port ' + port);
});

module.exports = app;

