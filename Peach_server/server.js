/*
应用的启动模块
1. 通过express启动服务器
2. 通过mongoose连接数据库
  说明: 只有当连接上数据库后才去启动服务器
3. 使用中间件
 */
var session = require('express-session')
const mongoose = require('mongoose')
const express = require('express')
const fs = require('fs')
const app = express()

const http = require('http')
const server = http.createServer(app)

let {Router} = require('express')

// 声明使用静态中间件
app.use(express.static('public'))
// 声明使用解析post请求的中间件
app.use(express.urlencoded({extended: true})) // 请求体参数是: name=tom&pwd=123
// app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
// 声明使用解析cookie数据的中间件
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 声明使用session处理的中间件
app.use(session({
  secret: '12345',
  cookie: {maxAge: 1000*60*60*24 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
}))

// 声明使用路由器中间件
const indexRouter = require('./routers')
app.use('/', indexRouter)

app.get('/test', function (req, res) {
  console.log(req.query)
  console.log('chenggong')
  res.send({
    code: 0,
    data: 'hello vue test!'
  })
})

// 在路由器中间之后, 处理所有与路由器中间的路由不匹配的请求
const router = new Router()
// 安装路由器
app.get('/peachhome',function (req, res) {
  // res.send('111')
  const data = require('../data/classification.json')
  // const data = require('./data/classification.json')
  console.log(data)
  res.send({
      code: 0,
      data
  })
  
})

/* 更多详情路由 */

app.get('/brands',function (req, res) {
  const brandsData = require('./data/brandsData.json')
  res.send({
      code: 0,
      brandsData
  })
})
//一级路由
app.get('/Peachclassify',function (req, res) {
  const data = require('./data/classification.json')
  console.log(data)
  res.send({
    code: 0,
    data
  })
  
})

/* 商家详情 */
const goodsData = require('./data/goodsData.json')
app.get('/goods',function (req, res) {
  res.send({
      code: 0,
      goodsData
  })
  
})

/* 获取导航详情 */
const navigationData = require('./data/NavData.json')
app.get('/navs',function (req, res) {
  res.send({
      code: 0,
      navigationData
  })
  
})

//一级路由
  // const data = require('xxx')
/* 获取9.9 包邮数据 */
const byDatas = require('./data/baoyou.json')
router.get('/Peachpostage',function (req, res) {
  res.send({
    code: 0,
    byDatas
  })
})

app.get('/peachcollect',function (req,res) {
  // const data = require('xxx')
  res.send({
    code: 0,
    data
  })
})

// 详情信息
app.get('/peachdetails', function (req, res) {
  let {shangData} = req.query
  let data = {}
  switch (shangData) {
    case 'shangdian':
      data = require('./data/shangdian.json')
      break;
    case 'jingxuan':
      data = require('./data/jingxuan.json')
      break;
    case 'shangjia':
      data = require('./data/shangjia.json')
      break;
    case 'tuijiayi':
      data = require('./data/tuijiayi.json')
      break;
  }
  console.log('chenggong')
  res.send({
    code: 0,
    data
  })
})

app.get('/peachlogin',function (req,res) {
  // const data = require('xxx')
  res.send({
    code: 0,
    data
  })
})

/* 更多详情路由 */
const brandsData = require('./data/brandsData.json')
router.get('/brands',function (req, res) {
  res.send({
      code: 0,
      brandsData
  })
})

/* app.use(router)
app.listen('5000',function (err) { 
  if (!err) {
    console.log('服务器启动成功了')
    console.log('服务器启动成功：http://localhost:5000')
  } else {
    console.log(err)
  }
}) */

app.use(router)
// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/Peachhome', {useNewUrlParser: true})
  .then(() => {
    console.log('连接数据库成功!!!')
    // 只有当连接上数据库后才去启动服务器
    server.listen(5000, () => {
      console.log('服务器启动成功, 请访问: http://localhost:5000')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })

  
