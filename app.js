const request = require('request');
const geocode = require('./geocode');
const forecast = require('./forecast');

const address = ''
if (!address){
    console.log('error: Please provide address')
}
else{
geocode(address,(error,{latitude, longitue, location} = {}) => {
    if (error){
        console.log('error:',error)
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
