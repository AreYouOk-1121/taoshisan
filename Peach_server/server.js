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
  console.log(data)
  res.send({
      code: 0,
      data
  })
  
})

/* 更多详情路由 */
const brandsData = require('../Peach_server/data/brandsData.json')
router.get('/brands',function (req, res) {
  res.send({
      code: 0,
      brandsData
  })
  
})

/* 商家详情 */
const goodsData = require('../Peach_server/data/goodsData.json')
router.get('/goods',function (req, res) {
  res.send({
      code: 0,
      goodsData
  })
  
})

/* 获取导航详情 */
const navigationData = require('../Peach_server/data/NavData.json')
router.get('/navs',function (req, res) {
  res.send({
      code: 0,
      navigationData
  })
  
})


//一级路由
router.get('/xxx',function (req, res) {
  
  res.send('xxx')
})



router.get('/xxx',function (res, req) {
  
  response.send('xxx')
})



router.get('/xxx',function (res, req) {
  
  response.send('xxx')
})





router.get('/xxx',function (res, req) {
  
  response.send('xxx')
})










//二级路由
router.get('/xxx/xxx',function (res, req) {
  
  response.send('xxx')
})



router.get('/xxx/xxx',function (res, req) {
  
  response.send('xxx')
})





app.use(router)
app.listen(5000,function (err) {
  
if (!err) {
  console.log('服务器启动成功了')
  console.log('服务器启动成功：http://localhost:5000')
} else {
  console.log(err)
}

})