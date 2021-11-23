const productModel= require("../models/productModel")
const mongoose= require("mongoose")

const createproduct = async function (req, res) {
    const product= req.body
    let savedBook= await productModel.create(product)
    res.send({msg: savedBook})
}

module.exports.createproduct= createproduct
//module.exports.getproductData= getproductData