var Account = require('../data/AccountModel'),
    User = require('../data/UserModel'),
    createToken = require('../utils/createToken'),
    constants = require('../config/constants'),
    config = require('../config/config.json');

module.exports = {

    retrieveAccountInfo: function(req, res) {
        res.json({ accountBalance: "You have $500" });
    },

    deposit: function(req, res) {
        res.json({ newBalance: "Deposited $500!" });
    },

    withdraw: function(req, res){
        res.json({ newBalance: "Withdrew $500!" });
    },

    config: function(req, res){
        res.json(config);
    }

};