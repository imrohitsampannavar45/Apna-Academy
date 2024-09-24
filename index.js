const express = require('express');

const app = express();

app.post('/user/signup', function(req,res){
    res.json({
        message:"Signup Endpoint"
    })
})
app.post('/user/signin', function(req,res){
    res.json({
        message:"Signin Endpoint "
    })
})

app.post('/purchase', function(req,res){
    res.json({
        message:"Purchase Endpoint"
    })
})

app.post('/course/purchase', function(req,res){
    res.json({
        message:"Purchases All Endpoint"
    })
})

app.get("/user/purchases" , function(req,res){
    res.json({
            message:"Purchases End point "
    })
})

    app.get("/courses", function(req,res){
        res.json({
            message:"All the Purchases Endpoints"
        })
    })

app.listen(3000);