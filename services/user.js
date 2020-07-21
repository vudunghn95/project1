const UserModel = require('../models/user.model');

function getAllUser(){
    return UserModel.find();
}
function getUserById(id){
    return UserModel.find({
        _id : id
    });
}
function getUserByName(name){
    return UserModel.find({
        username : name
    });
}
function getUserByLogin(account){
    return UserModel.find(account);
}
function createUser(user){
    return UserModel.create(user);
}
function updateUserById(id,user){
    return UserModel.updateOne({
        _id : id
    },user);
}
function deleteUserById(id){
    return UserModel.deleteOne({
        _id : id
    });
}
function getUserByPage(number){
    return UserModel.find().skip((number-1)*4).limit(4);
}
module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    getUserByPage,
    getUserByLogin,
    getUserByName
}