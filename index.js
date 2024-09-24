const express = require('express');
const {userRouter} = require('./users.js')
const {courseRouter} = require('./courses.js')
const app = express();
app.use(express.json());




app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

// userModel(app);
// courseModel(app);

app.listen(3000);