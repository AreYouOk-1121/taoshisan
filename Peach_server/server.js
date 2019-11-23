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

//一级路由
router.get('/peachdetails',function (req, res) {
  const data = require('./xiangqing/jingxuan.json')
  // const data = require('./xiangqing/shangdian.json')
  // const data = require('./xiangqing/shangjia.json')
  // const data = require('./xiangqing/tuijia.json')
  console.log(req.data)
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
  res.send({
    code: 0,
    data
  })
})

router.get('/peachclassify',function (req, res) {
  const data = require('xxx')
  res.send({
    code: 0,
    data
  })
})

router.get('/peachpostage',function (res, req) {
  const data = require('xxx')
  response.send({
    code: 0,
    data
  })
})

router.get('/peachcollect',function (res, req) {
  const data = require('xxx')
  response.send({
    code: 0,
    data
  })
})


router.get('/peachlogin',function (res, req) {
  const data = require('xxx')
  response.send({
    code: 0,
    data
  })
})


//二级路由
router.get('/xxx/xxx',function (res, req) {
  
  response.send('xxx')
})


router.get('/xxx/xxx',function (res, req) {
  
  response.send('xxx')
})


app.use(router)
app.listen(3000,function (err) {
  
if (!err) {
  console.log('服务器启动成功了')
  console.log('服务器启动成功：http://localhost:3000')
} else {
  console.log(err)
}

})