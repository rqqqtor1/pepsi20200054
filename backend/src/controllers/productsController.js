const productsController = {};
import productsModel from "../models/Products.js"
//SELECT we
productsController.getProducts = async(req, res)=>{
    const products = await productsModel.find()
    res.json(products)
}


//INSERT WE
productsController.insertProducts = async (req, res)=>{
    const {name, description, price, stock } = req.body;
    const newProduct = new productsModel({name,description, price, stock})
    await newProduct.save()
    res.json({message:"product saved"});
}

//DELETE WE
productsController.deleteProducts = async(req, res) => {
    await productsControlle.finByIdAnDelete(req.params.id);
    res.json({message: "product deleted"})
}

//UPDATE WE
productsController.updateProducts = async(req, res)=>{
    const {name, description, price, stock} = req.body;
    const updateProducts = await productsModel.finByIdAnUpdate(req.params.id, {name, description, price, stock}, {new: true});
    res.json({message:"product updated"});
};

export default productsController