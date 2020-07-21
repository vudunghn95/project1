const express = require('express');
const path = require('path');

const userService = require('../services/user');

const router = express.Router();

router.get('/',(req,res)=>{
    userService.getAllUser()
    .then((data)=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    })
});

router.get('/:id',(req,res)=>{
    var id = req.params.id;
    userService.getUserById(id)
    .then((data)=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    })
});

router.post('/',(req,res)=>{
    var user = req.body;
    userService.createUser(user)
    .then((data)=>{
        res.json("Create success");
    })
    .catch(err=>{
        console.log(err);
    })
});

router.put('/:id',(req,res)=>{
    var id = req.params.id;
    var user = req.body;
    userService.updateUserById(id,user)
    .then((data)=>{
        res.json("Update success");
    })
    .catch(err=>{
        console.log(err);
    })
});

router.delete('/:id',(req,res)=>{
    var id = req.params.id;
    userService.deleteUserById(id)
    .then((data)=>{
        res.json("Delete success");
    })
    .catch(err=>{
        console.log(err);
    })
});

router.get('/page/:pageNumber',(req,res)=>{
    var pageNumber = req.params.pageNumber;
    userService.getUserByPage(pageNumber)
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    });
});



module.exports = router;