const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=ba8ab6d957895c8f787b95b05fc3428b&query=40,-75'

const request = http.request(url, (response) => {
    
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
    

})

request.on('error', (error) => {
    console.log('error: ', error)
})

request.end()