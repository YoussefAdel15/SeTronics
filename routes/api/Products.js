
const express = require("express");
const router = express.Router();
const {check , validationResult} = require('express-validator');
const Product = require("../../models/Product");

//@route        GET api/Products
//@desc         Test get Product
//@acess        private
// router.get('/', (req,res)=>res.send('products router'));

router.post("/update" ,
    [
        check("productType","Invalid Product Type").not().isEmpty(),
        check("productNumber","enter product Number").not().isEmpty(),
        check("productName","enter product name").not().isEmpty(),
        check("price","enter price").not().isEmpty(),
        check("img1","enter img1 link").not().isEmpty(),
        check("img2","enter img2 link").not().isEmpty(),
        check("img3","enter img3 link").not().isEmpty(),
        check("details","enter details").not().isEmpty(),
    ],
    async (req, res) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const { productNumber, productName, price , img1 , img2 , img3 , details , productType } = req.body;
        //productNumber, productName, price , img1 , img2 , img3 , details , productType 
        const productFileds = {};
        if(productName)
        productFileds.productName = productName;
        if(price)
        productFileds.price = price;
        if(img1)
        productFileds.img1 = img1;
        if(img2)
        productFileds.img2 = img2;
        if(img3)
        productFileds.img3 = img3;
        if(details)
        productFileds.details = details;
        if(productType)
        productFileds.productType = productType;
        //update product
    try{

        // if(productNumber)
        // productFileds.productNumber = productNumber;

        let product = await Product.findOne({productNumber});
        if(product){
            product = await Product.findOneAndUpdate({productNumber}, {$set:productFileds },{new:true});
            return res.json(product);

        }
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }



    }

);

router.post("/add" ,
    [
        check("productType","Invalid Product Type").not().isEmpty(),
        check("productNumber","enter product Number").not().isEmpty(),
        check("productName","enter product name").not().isEmpty(),
        check("price","enter price").not().isEmpty(),
        check("img1","enter img1 link").not().isEmpty(),
        check("img2","enter img2 link").not().isEmpty(),
        check("img3","enter img3 link").not().isEmpty(),
        check("details","enter details").not().isEmpty(),
    ],
    async (req, res) =>{
        //create product
        const { productNumber, productName, price , img1 , img2 , img3 , details , productType } = req.body;

        try{
        let product = await Product.findOne({productNumber});

        if (product) {
          return res
            .status(400)
            .json({ errors: [{ msg: "product already exist" }] });
        }
        product = new Product({
            productNumber,
            productName,
            price,
            img1,
            img2,
            img3,
            details,
            productType
        });
        await product.save();

        res.send('product added');
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}
);
module.exports = router;
