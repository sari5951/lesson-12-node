


// const ProductModel = require('../modules/product.modules');

// const getProduct=async(categories)=>{
//     try{
//         const product = await CategoryModel.find();
//     }
//     const products=await getData();

//     return products;
// };

// const getCategories=async()=>{
//     try{
//         const categorys = await CategoryModel.find();
//         console.log('Categorys fetched from MongoDB');
//         return categorys;
//     }
//     catch (error) {
//                 console.error(`Error in fetching categorys: ${error.message}`);
//                 throw error;
//             }
// };




// const getProductId=async(id)=>{
// const categories=await getData();
// const _category=await categories.find(c=>c.id===id);
// return _category;
// }

// const  addproduct = async (category) => {


//     const id = uuidv4();
//     let categoryObject = {};
//     categoryObject.id = id;
//     const categories = await getData() || [];
//     categoryObject.category = category;
//     categories.push(categoryObject);
   
//     await updateData(categories);
//     return categoryObject;
// };

// const deleteProduct = async (id) => {
//     const categories = await getData();
//     const index = await categories.findIndex(c => c.id === id);
//     categories.splice(index, 1);
//     await updateData(categories);
//     console.log('deleted!');
// }

// const updateProduct
// = async (id,category) => {
   
//     const _category = await categories.find(m => m.id === id);
//     _category.category=category;
//     Object.assign(_category);
//     await updateData(categories);
//     return _category;
// }
// module.exports={
//     getProduct,
//     getProductId,
//     addproduct,
//     deleteProduct,
//     updateProduct
    

// }


const ProductModel = require('../modules/product.modules');

const getProducts = async () => {
    try {
        const products = await ProductModel.find().sort({ name: 1 });
        return products;
    } catch (error) {
        console.error(`Error in fetching products: ${error.message}`);
        throw error;
    }
};

const getProductById = async (id) => {
    try {
        const product = await ProductModel.findById(id);
        return product;
    } catch (error) {
        console.error(`Error in fetching product by ID: ${error.message}`);
        throw error;
    }
};

const addProduct = async (product) => {
    try {
        const newProduct = new ProductModel(product);
        await newProduct.save();
        return newProduct;
    } catch (error) {
        console.error(`Error in adding product: ${error.message}`);
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        await ProductModel.findByIdAndDelete(id);
        console.log('Product deleted from MongoDB');
    } catch (error) {
        console.error(`Error in deleting product: ${error.message}`);
        throw error;
    }
};

const updateProduct = async (id, updatedProduct) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(id, updatedProduct, { new: true });
        console.log('Product updated in MongoDB');
        return product;
    } catch (error) {
        console.error(`Error in updating product: ${error.message}`);
        throw error;
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
};
