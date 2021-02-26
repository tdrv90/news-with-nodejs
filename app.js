require('dotenv').config()
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 5000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// bodyparser options
app.use(bodyParser.urlencoded({ extended: true }))

// routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)    
app.use('/', newsRouter)

// listen on port 5000
app.listen(port, () => { console.log(`listening on port ${port}`) })
