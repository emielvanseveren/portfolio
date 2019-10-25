require('dotenv').config()

const Koa = require('koa')
const app = new Koa()

// modules
const Router = require('koa-router')
const router = new Router()
const serve = require('koa-static')
const BodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const mount = require('koa-mount')


const staticPages = new Koa()
staticPages.use(serve(__dirname + '/../frontend/dist'))
app.use(mount("/", staticPages))

app.use(BodyParser())
app.use(logger())

app.use(router.routes())
  .use(router.allowedMethods())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening on port %s', PORT))