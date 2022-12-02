const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { response } = require('express')

// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirctoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// SetUP handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setUp static directory to serve
app.use(express.static(publicDirctoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        text: 'This will be the paragraph of the page',
        name: 'Abdelselam Kemal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Abdelselam Kemal'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'Address is not provided'
        })
    }

    let address = req.query.address
    res.send({
        forecast: 'It is snowing',
        location: 'london',
        address: address
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'What can we help u',
        name: 'Abdelselam Kemal'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404_page', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Abdelselam Kemal'

    })
})

// why last 404 page: express looks each file, it stops if it finds a match

app.get('*', (req, res) => {
    res.render('404_page', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Abdelselam Kemal'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})