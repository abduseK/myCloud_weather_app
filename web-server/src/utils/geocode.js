const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text=' + encodeURIComponent(address) + '&apiKey=c54d7ee3009f4d66a1d958c55c5475b9&limit=1'

    request({ url, json: true}, (error, { body } = {}) => {
        if(error) {
            callback('unable to connect with the location service', undefined)
        } else if(body.features.length === 0) {
            callback('unable to get the location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].properties.lat,
                longitude: body.features[0].properties.lon,
                location: body.features[0].properties.city
            })
        }
    })
    
}

module.exports = geocode