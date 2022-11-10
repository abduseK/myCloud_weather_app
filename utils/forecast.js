const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ba8ab6d957895c8f787b95b05fc3428b&query=' + latitude + ',' + longitude

    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('unable to connect with the location service', undefined)
        } else if(response.body.error) {
            callback('unable to find the location', undefined)
        } else {
            callback(undefined, 'Currently the temperature is '
            + response.body.current.temperature + 
            ' and its feelsliek is ' + response.body.current.feelslike)
        }
    })
}


module.exports = forecast