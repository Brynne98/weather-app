const geoCode = require("./geoCode")
const forecast = require("./forecast")

const address = process.argv[2];

if(!address) {
    console.log("Please provide an address")
} else {
    geoCode(address, (error, data) => {
        if(error) {
            console.log(error)
        } else {
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if(error) {
                    console.log(error)
                } else {
                    console.log(data.locationName)
                    console.log(forecastData.description + ". With a temperature of " + forecastData.temperature + "C and a feels like of " + forecastData.feelsLike + "C");
                }
            })
        }
    })
}