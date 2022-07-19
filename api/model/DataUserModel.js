
const mongoose = require("mongoose");

const DataUserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    avatar: {
        type: String
    },
    emailUser:{
        type: String,
        require: true
    },
    Wallet:{
        type: String
    },
    idUser: {
        type: String,
        require: true
    },
    UserName: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
},{
   collection:"DataUser" 
});

module.exports = mongoose.model('DataUser', DataUserSchema);