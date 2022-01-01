const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productType : {
        type : String ,
    },
    productNumber:{
        type: String,
        require:true
    },
    productName:{
        type: String,
        required:true
    },
    img1:{
        type: String,
        required:true
    },
    img2:{
        type: String,
        required:true
    },
    img3:{
        type: String,
        required:true
    },
    price:{
        type:String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
});

module.exports = Product = mongoose.model('Product',ProductSchema);