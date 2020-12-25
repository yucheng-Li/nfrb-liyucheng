var express = require('express')
var User = require('./models/user')
var router = express.Router()

router.get('/', function (req, res) {
    res.render('index.html', {
         message: "你好" 
    })
})      

router.get('/getinfo', function(req, res) {
    console.log('收到请求')
    User.find().then(result => {
        console.log(result)
        res.send(result)
    })
})  
router.post('/postinfo',async function(req, res, next) {
    console.log('收到响应'+ req.body)
    var body = req.body
    try {
    if (await User.findOne({ name: body.name })) {
      return res.status(200).json({
        err_code: 1,
        message: '已存在'
      })
    }
    console.log('sasd')
    // 创建用户，执行注册
    await new User(body).save()
    res.status(200).json({
      err_code: 0,
      message: 'OK'
    })
  } catch (err) {
    res.status(500).json({
      err_code: 500,
      message: err.message
    })
  }
})

module.exports = router;