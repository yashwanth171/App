const request = require('request')

const forecast = (latitude,longitue,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=cc3bf886f0f49d0f6299eb9a15179cc2&query='+encodeURI(latitude)+','+encodeURI(longitue) +'&units=m'
    request({url,json:true}, (error,{body}) => {
        if (error){
            callback('Couldn\'t connect to the server',undefined)
        }
        else if (body.success === false){
            callback('Subscription error',undefined)
        }
        else if (body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,(body.current.weather_descriptions) + ' and current temperature at ' + (body.location.name) + ' is ' + (body.current.temperature) + ' degree celcius and humidity here is '+(body.current.humidity) + ' percent')
        }
        
    })
}

module.exports = forecast