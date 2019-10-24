require('dotenv').config()

const Koa = require('koa')
const app = new Koa()

// modules
const Router = require('koa-router')
const router = new Router()
const serve = require('koa-static')
const logger = require('koa-logger')


// routes
router.get('/', (ctx, next) => {
  ctx.body= "this route works"
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async ctx => { ctx.body = 'Hello World'})
  .use(logger())

app.listen(process.env.PORT,)