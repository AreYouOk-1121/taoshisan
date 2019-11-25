let Koa = require('koa')
let KoaRouter = require('koa')
let express = require('express')
let {Router} = require('express')
let app = express()
app.use(express.urlencoded({extended: true}))
//对客户端隐藏服务器内部实现
app.disable('x-powered-by')

const router = new Router()
// 安装路由器
router.get('/peachhome',function (req, res) {
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

router.get('/brands',function (req, res) {
  const brandsData = require('./data/brandsData.json')
  res.send({
      code: 0,
      brandsData
  })
  
})

/* 商家详情 */
const goodsData = require('./data/goodsData.json')
router.get('/goods',function (req, res) {
  res.send({
      code: 0,
      goodsData
  })
  
})

/* 获取导航详情 */
const navigationData = require('./data/NavData.json')
router.get('/navs',function (req, res) {
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


router.get('/peachcollect',function (req,res) {
  // const data = require('xxx')
  res.send({
    code: 0,
    data
  })
})
// 详情信息

router.get('/peachdetails',function (req,res) {
  let {shangData} = req.query
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
  console.log(req.query)
  // console.log(data)
  res.send(data)
})


router.get('/peachlogin',function (req,res) {
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

app.use(router)
app.listen('5000',function (err) { 
  if (!err) {
    console.log('服务器启动成功了')
    console.log('服务器启动成功：http://localhost:5000')
  } else {
    console.log(err)
  }
})

