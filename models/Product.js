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
    },
    img2:{
        type: String,
    },
    img3:{
        type: String,
    },
    price:{
        type:String,
    },
    details:{
        type: String,
    },
});

module.exports = Product = mongoose.model('Product',ProductSchema);
