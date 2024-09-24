const express = require('express');
const {userModel} = require('./users')
const {courseModel} = require('./courses')
const app = express();

userModel(app);
courseModel(app);

app.listen(3000);