const WEATHER_STACK_ACCESS_KEY = "101b90eac04a2ec40f8747db6f9bf755";
const WEATHER_STACK_BASE_URL = "http://api.weatherstack.com";
const MAPBOX_ACCESS_KEY = "pk.eyJ1IjoiYnJ5bm5lOTgiLCJhIjoiY2tpOGo5bDZjMDZhcTJ1bjRjNjJ1YWN3ciJ9.I9IB-_oc6WoCANfcJr2EPw";
const MAPBOX_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/kemptonpark.json?access_token=" + MAPBOX_ACCESS_KEY;

const request = require("request");

request.get({url: MAPBOX_BASE_URL, json: true}, (error, response) => {
    let positionArr = response.body.features[0].center;
    console.log(positionArr)
    console.log("Latitude: " + positionArr[1])
    console.log("Longitude: " + positionArr[0])
    getWeatherForLatAndLong(positionArr[1], positionArr[0])
})

const getWeatherForLatAndLong = (latitude, longitude) => {

    let url = WEATHER_STACK_BASE_URL + "/current?access_key=" + WEATHER_STACK_ACCESS_KEY + "&query=" + latitude + "," + longitude;

    request.get({url: url, json: true}, (error, response) => {
        const data = response.body.current;
        // console.log(data);
        console.log(data.weather_descriptions[0] + ". It is currently " + data.temperature + " degrees out. It feels like " + data.feelslike + " degrees out.");
    })
}