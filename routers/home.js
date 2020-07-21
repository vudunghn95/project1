const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/',(req,res)=>{
    if(isLogin){
        res.sendFile(path.join(__dirname,'../views/home.html'));
    }else{
        res.redirect('/login');
    }
});

router.get('/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/detail.html'));
});
module.exports = router;