// const request = require('request')

// const fetchMyIP = function(callback){
 
//   request('https://api.ipify.org?format=json',  function (error, response, body) {
//   // inside the request callback ...
//   // error can be set if invalid domain, user is offline, etc.
//    if(error) {
//      callback(error, null);
//      return
//     }
//     // if non-200 status, assume server error
//     if(response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
// });
// }

                      ////API Call #2: Fetch Geo Coordinates By IP

const request = require('request')
const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;

    callback(null, { latitude, longitude });
  });
};

// Don't need to export the other function since we are not testing it right now.
module.exports = { fetchCoordsByIP };