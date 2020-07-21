const express = require('express');
const path = require('path');

const userService = require('../services/user');

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/register.html'));
})

router.post('/',(req,res)=>{
    userService.getUserByName(req.body.username)
    .then(data=>{
        if(data.length===0){
            userService.createUser(req.body)
        .then(data=>{
            res.json(true);
        })
        .catch(err=>{console.log(err);});
        }else{
            res.json(false);
        }
    })
    .catch(err=>{
        console.log(err);
    })
    
})

module.exports = router;