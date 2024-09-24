const {Router} = require("express")
const courseRouter = Router();



courseRouter.post("/purchase", function(req, res) {
    res.json({
        message:"Purchases All Endpoint"
    })
})

courseRouter.get("/preview",  function(req, res) {
        res.json({
            message:"All the Purchases Endpoints"
        })
    })


    module.exports={
      courseRouter: courseRouter
    }