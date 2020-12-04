const request = require("request");
const geoCode = require("./geoCode")

const WEATHER_STACK_ACCESS_KEY = "101b90eac04a2ec40f8747db6f9bf755";
const WEATHER_STACK_BASE_URL = "http://api.weatherstack.com/current?access_key=" + WEATHER_STACK_ACCESS_KEY;

// request.get({url: MAPBOX_BASE_URL, json: true}, (error, response) => {
//     if(error) {
//         console.log("Unable to access mapbox services.")
//     } else if(response.body.features === undefined) {
//        console.log("No location found for given name.")
//     } else {
//         let positionArr = response.body.features[0].center;
//         const latitude = positionArr[0];
//         const longitude = positionArr[1];
//         console.log("Latitude: " + latitude);
//         console.log("Longitude: " + longitude);
//         getWeatherForLatAndLong(latitude, longitude);
//     }
// })
//
// const getWeatherForLatAndLong = (latitude, longitude) => {
//
//     let url = WEATHER_STACK_BASE_URL + "&query=" + latitude + "," + longitude;
//
//     request.get({url: url, json: true}, (error, response) => {
//         if (error) {
//             console.log("Unable to connect to location services.")
//         } else if (response.body.error) {
//             console.log("Unable to find location. Try another search.")
//         } else {
//             const data = response.body.current;
//             console.log(data.weather_descriptions[0] + ". It is currently " + data.temperature + " degrees out. It feels like " + data.feelslike + " degrees out.");
//         }
//     })
// }

geoCode("Kempton Park", (error, data) => {
    console.log("Error: " + error);
    console.log("Data: " + JSON.stringify(data, null, 2));
})