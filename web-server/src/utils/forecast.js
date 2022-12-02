const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ba8ab6d957895c8f787b95b05fc3428b&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body } = {}) => {
        if(error) {
            callback('unable to connect with the location service', undefined)
        } else if(body.error) {
            callback('unable to find the location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ': the temperature is '
            + body.current.temperature + 
            ' and its feelsliek is ' + body.current.feelslike)
        }
    })
}


module.exports = forecast