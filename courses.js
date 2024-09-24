const express = require('express');
const router = express.Router()

courseModel = courseModel.Router();


courseModel.post('/purchase', function(req,res){
    res.json({
        message:"Purchase Endpoint"
    })
})

courseModel.post('/course/purchase', function(req,res){
    res.json({
        message:"Purchases All Endpoint"
    })
})



    courseModel.get("/courses", function(req,res){
        res.json({
            message:"All the Purchases Endpoints"
        })
    })


    module.exports={
        courseModel:courseModel
    }