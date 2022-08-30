let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
const loginsearch = require('./common/loginRead.json')
const welcomeAside = require('./common/aside.json')
let app = express() //实例化express

app.use('/user/login',function(req,res){
  console.log(req,res);
  res.json(
    Mock.mock({
      status:200,
      msg:'登陆成功',
      loginData
    })
  )
})
app.use('/home/loginsearch',function(req,res){
  console.log(req,res);
  res.json(
    Mock.mock({
      status:200,
      msg:'登陆成功',
      loginsearch
    })
  )
})
app.use('/welcome/aside',function(req,res){
  console.log(req,res);
  res.json(
    Mock.mock({
      status:200,
      msg:'请求成功',
      welcomeAside
    })
  )
})

app.listen('8888',()=>{
  console.log('监听端口 8888');
})
