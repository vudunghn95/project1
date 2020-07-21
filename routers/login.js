const express = require('express');
const path = require('path');

const userService = require('../services/user');

const router = express.Router();

router.get('/',(req,res)=>{
    isLogin = false;
    res.sendFile(path.join(__dirname,'../views/login.html'));
})

router.post('/',(req,res)=>{
    userService.getUserByLogin(req.body)
    .then(data=>{
        if(data.length){
            isLogin = true;
            return res.json(data);
        }else{
            return res.json(false);
        }
    })
    .catch(err=>{console.log(err);});
})

module.exports = router;