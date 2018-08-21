let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000

//database connection
require('./server-assets/db/mlab-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//Routes
//let pizzaRoutes = require('./server-assets/routes/')