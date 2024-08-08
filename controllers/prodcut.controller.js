const userModel=require('../models/product.model')

const getProducts = async (req,res) => {
  try{
    const newProduct = await userModel.find({});
    res.status(201).json(newProduct);
  } catch(error){
    res.status(500).json({message: error.message});
  }
}

const getProduct= async (req,res) => {
  try{
    const { id } = req.params;
    const newProduct = await userModel.findById(id);
    res.status(201).send(newProduct);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
}

const createProduct= async (req,res) =>
{
  try {
    console.log('Received body:', req.body);
    const newProduct = await userModel.create(req.body);
    res.status(201).send(newProduct);
  } catch (error) {
    console.error("Error processing request:", error);
    if (!res.headersSent) {
      res.status(500).send("Internal Server Error");
    }
  }
}

const updateProduct= async (req,res)=>
{
  try{
    const {id} = req.params;
    const newProduct = await userModel.findByIdAndUpdate(id, req.body);

    if(!newProduct) {
      return res.status(404).json({message: "Product not found"});
    }
    //finding it again retrieving from database and showing it 
    const updatedProduct = await userModel.findById(id);
    res.status(201).json(updatedProduct);

  } catch(error) {
    res.status(500).json({message: error.message});
  }
}


const deleteProduct = async (req,res) =>
{
  try{
    const {id} = req.params;
    const newProduct = await userModel.findByIdAndDelete(id);

    if(!newProduct) {
      return res.status(404).json({message: "product not found"});
    }

    res.status(201).json({message: "product deleted succesfully"});
  } catch(error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}