const path = require('path')
const express = require('express')
const hbs = require('hbs')
const fetchGeoCode = require('../app')
const forecast = require('../forecast')

const app = express()
const publicDirectorypath = path.join(__dirname,'/public')
const Viewspath = path.join(__dirname,'/public/views')
const Partialspath = path.join(__dirname,'/public/partials')
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine','hbs')
app.use(express.static(publicDirectorypath))
hbs.registerPartials(Partialspath)
app.get('/',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name : 'Infilect'
    })
})
app.get('/about',(req,res) => {
    res.render('about',{
        title : 'Created by Yashwanth',
        name : 'About me'
    })
})
app.get('/help',(req,res) => {
    res.render('help',{
        name: 'Help',
        title: 'this is some useful text',
        helpertext : 'get help'
    })
})
app.get('/weather',(req,res) => {
    console.log(req.query)
    if (!req.query.address){
        return res.render('index',{
            title: 'Weather App',
            name : 'Infilect'
        })
    }
    fetchGeoCode(req.query.address, (error,{latitude,longitude,location}) => {
        if (error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData) =>{
            if (error){
                return res.send({error})
            }
            res.send({
                forecast : forecastData,
                location,
                address : req.query.address
            })
        })
    })
})
app.get('*',(req, res) =>{
    res.render('404',{
        name: 'We are still adding features hope to get your request then',
        title : 'you can look for the above pages',
        errorMessage : 'Page not found'
    })
})
app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})