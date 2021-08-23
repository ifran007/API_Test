const axios = require('axios');
var assert = require('chai').assert

describe('API Test', function () {
    describe('tc006', function () {
        it('should return 200 ', function () {
            // Make a request for a user with a given ID
            axios.get("https://api.pray.zone/v2/times/tomorrow.json", {

                    params: {
                        ip: '163.172.18.192'
                        // start: '2021-08-20',
                        // end: '2021-08-21'

                    }
                })
                .then(function (response) {
                    //   handle success
                    //   console.log(response.data);
                    //   console.log(response.data.results.settings.school);
                    assert.equal(response.status, 200);
                    //   assert.equal(typeof(response.data.results.settings.school), 'string') ;
                    //   assert.equal(typeof(response.data.results.settings.fajr_angle), 'number') ;


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