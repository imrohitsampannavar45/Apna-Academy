const express = require('express');
const mongoose = require("mongoose");
const {userRouter} = require('./routes/users.js')
const {courseRouter} = require('./routes/courses.js')
const {adminRouter} = require ('./routes/admin.js')
const app = express();
app.use(express.json());




app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter)

// userModel(app);
// courseModel(app);


async function main(){
    //dotenv
// await mongoose.connect("mongodb+srv://rohit:CVMKtHd05TmXYotx@cluster0.12uit.mongodb.net/apna-academy")
app.listen(3000);
console.log("listening on port 3000")
}

main()