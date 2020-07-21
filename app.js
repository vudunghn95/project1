const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRouter = require('./routers/user');
const homeRouter = require('./routers/home');
const loginRouter = require('./routers/login');
const registerRouter = require('./routers/register');

const app = express();
app.use(express.static(path.join(__dirname,'./public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

isLogin = false;

app.use('/user',userRouter);
app.use('/home',homeRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);

app.listen(3000);

