var request = require('request');
var API_URL = 'http://www.fictional-subscription-service.com';

var Rewards = function () {};
Rewards.prototype = {

    get: function (path, callback) {
        return this.request("get", API_URL + path, {}, callback);
    },

    request: function (method, path, params, callback) {
        var options = {
            method: method,
            url: path,
            headers: {
                "Content-Type": "application/json"
            }
        };

        request(options, function (error, response, body) {
            callback(error, body || {});
        });
    },

    rewardsList: function (callback) {
        this.get('/rewards', function (error, response) {
            callback(error, response);
        });
    }

}

module.exports = Rewards;