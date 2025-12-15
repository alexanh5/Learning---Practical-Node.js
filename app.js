//Require Dependencies
const express = require('express')
const http = require('http')
const path = require('path')

//Define express app
let app = express()

//Configure Settings
app.set('appName','hello-advanced')
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//Connect to Database
//Not Needed

//Define Middleware
//Not Needed

//Define Routes
app.all('*splat', (req,res) => {
    res.render('index', {msg: 'Welcome to Practical Node.js!'})
})

//Start the server on a particular port
http.createServer(app).listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`)
})