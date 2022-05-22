const request = require('request');
const geocode = require('./geocode');
const forecast = require('./forecast');

const fetchGeoCode = (address,callback) => {
    geocode(address,(error,{latitude, longitue, location} = {}) => {
        if (error){
            console.log('error:',error)
            callback(error)
        }
        else {
            forecast(latitude, longitue,(error, forecastData) =>{
                if (error){
                    console.log('error:',error)
                }
                else{
                    console.log(forecastData)
                }
            })
        }
    })
}
module.exports = fetchGeoCode