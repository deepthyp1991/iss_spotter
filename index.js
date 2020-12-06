// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if(error){
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// })

//API Call #2: Fetch Geo Coordinates By IP

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});