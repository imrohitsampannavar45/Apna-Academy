const express = require('express')
const router = express.Router()

userModel = userModel.Router();

userModel.post('/user/signup', function(req,res){
    res.json({
        message:"Signup Endpoint"
    })
})
userModel.post('/user/signin', function(req,res){
    res.json({
        message:"Signin Endpoint "
    })
})

app.get("/user/purchases" , function(req,res){
    res.json({
            message:"Purchases End point "
    })
})

module.exports ={
    userModel : userModel
}