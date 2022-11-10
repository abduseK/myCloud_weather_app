const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Addis Ababa', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

forecast(40.730610, -73.935242, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})