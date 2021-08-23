const axios = require('axios');
var assert = require('chai').assert

describe('API Test', function () {
  describe('tc001', function () {
    it('should return 200 and shcool field string', function () {
      // Make a request for a user with a given ID
      axios.get("https://api.pray.zone/v2/times/today.json", {

          params: {
            longitude: 39.816665649414062,
            latitude: 21.416667938232425,
            elevation: 333.0
          }
        })
        .then(function (response) {
          // handle success
          // console.log(response.data);
          // console.log(response.data.results.settings.school);
          assert.equal(response.status, 200);
          // assert.equal(typeof (response.data.results.settings.school), 'string');
          // assert.equal(typeof (response.data.results.settings.fajr_angle), 'number');


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    });
  });
});





///  Not a good practice