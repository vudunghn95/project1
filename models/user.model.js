const mongoose = require('../config/dbConnect');

const Schema = mongoose.Schema; 
const userSchema = new Schema({
    email : String,
    username : String,
    password : String,
    phone : Number,
    school : String 
});

const UserModel = mongoose.model('user',userSchema);


module.exports = UserModel;