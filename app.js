const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]


if(!address) {
    console.log('Please enter the address')
} else {
    geocode(address, (error, data) => {

        if(error) {
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) {
                console.log(error)
            }
            
            console.log(data.location)
            console.log(forecastData)
        })
    })
}

console.log('this will be the last text')



