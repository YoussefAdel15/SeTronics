const mongoos = require('mongoose');

const userSchema= new mongoos.Schema({
    name : {
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    address:{
        type:String,
        required:true,
    }

})

module.exports= user = mongoos.model('user', userSchema);