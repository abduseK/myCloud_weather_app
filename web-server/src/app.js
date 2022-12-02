const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { response } = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        text: 'Use this site get your weather',
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
    const address = req.query.address
    if(!req.query.address) {
        res.send({
            error: 'Address is not provided'
        })
    } 

    geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
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