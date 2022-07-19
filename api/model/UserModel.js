const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const JWTPRIVATEKEY = 'nguyenthanhan7112001';

const userSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
},{
    collection:"User"
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id, name: this.name ,email: this.email
    }, JWTPRIVATEKEY, {expiresIn:"1h"});
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (user) =>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        avatar: Joi.string()
    });
    return schema.validate(user);
}

module.exports = {User, validate};