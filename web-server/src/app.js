const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

app.get('', (req, res) => {
    
    res.send('Welcome Fellas')
})

app.get('/about', (req, res) => {

    res.send('This is about page')
})

app.get('/help', (req, res) => {

    res.send('<h1>H1 heading</h1>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})