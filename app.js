const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=ba8ab6d957895c8f787b95b05fc3428b&query=8.9806,38.7578'

// request({ url: url, json: true }, (error, response) => {

//     if(error) {
//         console.log('unable to connect with the server')
//     } else if(response.body.error) {
//         console.log('unbale to find the location')
//     } else {
//         console.log('Currently the temperature is ' + response.body.current.temperature + 
//         ' and its feelsliek is ' + response.body.current.feelslike)
//     }
   
    
// })

// Geacoding

// const geoCodingurl = 'https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=c54d7ee3009f4d66a1d958c55c5475b9&limit=1'

// request({ url: geoCodingurl, json: true}, (error, response) => {

//     if(error) {
//         console.log('unable to connect with the location service')
//     } else if(response.body.features.length == 0) {
//         console.log('unable to find the location, try another search')
//     } else {
//         const latitude = response.body.features[0].properties.lat
//         const longitude = response.body.features[0].properties.lon
    
//         console.log('The latitude for the provided locations is: ' + latitude)
//         console.log('The longitude for the provided location is: ' + longitude)
//     }
   
// })



geocode('Addis Ababa', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})