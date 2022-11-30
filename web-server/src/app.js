const express = require('express')
const path = require('path')

// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', publicDirectoryPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'HomePage',
        text: 'This will be the paragraph of the page'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})