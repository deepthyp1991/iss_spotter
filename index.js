const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('184.68.214.222', (error, data) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! Returned data', data);
  
// });

// const location = { latitude: '51.12640', longitude: '-114.14190' };
// fetchISSFlyOverTimes(location, (error, data) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! Returned data', data);
  
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // console.log(passTimes);
  for (let passTime of passTimes) {
    let date = new Date(0);
    date.setUTCSeconds(passTime.risetime);
    console.log('Next pass at ' + date + ' for ' + passTime.duration + ' seconds!');
  }
//loop through data objects and print out final string
});
