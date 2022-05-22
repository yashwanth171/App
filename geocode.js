const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURI(address) +'.json?access_token=pk.eyJ1IjoieWFzaHdhbnRoMTcxIiwiYSI6ImNrenZremFoODA3bTcycmxsYjRiODJtanMifQ.U8iC6zHVO1KYL-Riqb9Tbw&limit=1'
    
    request({url,json:true},(error,{body})=>{
        if (error){
            callback('Couldn\'t connect to the server',undefined)
        }
        else if (body.features.length === 0){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,{
                latitue : body.features[0].center[1],
                longitute : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode