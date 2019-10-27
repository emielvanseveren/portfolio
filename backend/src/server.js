require('dotenv').config()
const Koa = require('koa')
const app = new Koa()
// modules
const serve = require('koa-static')
const logger = require('koa-logger')


app.use(logger()) // automatically logs routes
app.use(serve(__dirname + '/../../frontend/dist'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening on port %s', PORT))