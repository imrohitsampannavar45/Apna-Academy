const {Router} = require("express");

const adminRouter = Router();
const {adminModel} = require('../db')

// adminRouter.use(adminMiddleware)

adminRouter.post("/signup", function(req,res){

    res.json({
        message:"Admin Signup"
    })
})

adminRouter.post("/signin", function(req,res){
    res.json({
        message:"Sign In Endpoint"
    })
})

adminRouter.post("/course", function(req,res){
    res.json({
        message: "course endpoint"
    })
})


adminRouter.put("/course", function(req,res){
    res.json({
        message: "course endpoint"
    })
})

adminRouter.get("/course/bulk", function(req,res){
    res.json({
        message: "course endpoint"
    })
})

module.exports ={
    adminRouter : adminRouter
}