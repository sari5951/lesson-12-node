// const { Router } = require('express');
// const router=Router();

// const productServiecs=require('../serviecs/product.serviecs');

// router.get('/', async (req, res) => {
//     try {
//         const getProduct = await productServiecs.getProduct();
//         // const sortedCtegories = getCategories.sort((a, b) => {
//         //     return a.name.loc(b.name)

//         // })
//         // res.send(sortedCtegories);
//          res.send(getProduct);

//     }

//     catch (error) {
//         console.error(`error in fcategoriesServiecsetching meeting list ${error.message}`);
//         res.status(500).send(`error in fetching meeting list ${error.message}`);
//     }
// });
// router.get('/category/:product', async (req, res) => {
//     try {
//         const { product } = req.params;
//         const productID = await productServiecs.getProductId(product,category);
//         res.send(productID).status(200).send('succseful');

//     }
//     catch (error) {
//         console.error(`error in fetch service ${error.message}`);
//         res.status(500).send(`error in fetch service ${error.message}`);
//     }
// });






// router.post('/category', async (req, res) => {
//     const product = req.body;

//     try {
//         if (!product) {
//             res.status(400).send('not provided product ');
//         }
//         else{
//             const _product = await productServiecs.addproduct(product);
//             res.send(_product  );
    
//         }
        
//     } catch (err) {
//         console.error(`error in create service ${err.message}`)
//         res.status(500).send(err.message);
//     }

// });

// router.delete('/category/:product', async (req, res) => {
//     try {
//         const { product } = req.params;
//         await productServiecs.deleteProduct(product);
//         res.send('deleted');
//         console.log('deleted!!!!');


//     } catch (error) {
//         console.error(`error in deleting meeting ${error.message}`);
//         res.status(500).send(`error in deleting meeting ${error.message}`);
//     }
// })

// router.put('/category/:product', async (req, res) => {
//     try {

  

       
//         const {product } = req.params;
      
//         if (!product || !category ) {
           
//             return res.status(400).send('no category or no id provided');

//         }
//         const _product = await categoriesServiecs.updateCategory(product,category);

//         return res.send( _product );
//     } catch (error) {
//         console.error(`error in updating category ${error.message}`);
//         res.status(500).send(`error in updating category ${error.message}`);
//     }
// })



// module.exports = router;



const express = require('express');
const router = express.Router();
const productServices = require('../serviecs/product.serviecs');

router.get('/', async (req, res) => {
    try {
        const products = await productServices.getProducts();
        res.json(products);
    } catch (error) {
        console.error(`Error in fetching products: ${error.message}`);
        res.status(500).json({ error: 'Error in fetching products' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productServices.getProductById(id);
        res.json(product);
    } catch (error) {
        console.error(`Error in fetching product: ${error.message}`);
        res.status(500).json({ error: 'Error in fetching product' });
    }
});

router.post('/', async (req, res) => {
    const {product} = req.body;
    try {
        const newProduct = await productServices.addProduct(product);
        res.json(newProduct);
    } catch (error) {
        console.error(`Error in adding product: ${error.message}`);
        res.status(500).json({ error: 'Error in adding product' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await productServices.deleteProduct(id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(`Error in deleting product: ${error.message}`);
        res.status(500).json({ error: 'Error in deleting product' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    try {
        const updated = await productServices.updateProduct(id, updatedProduct);
        res.json(updated);
    } catch (error) {
        console.error(`Error in updating product: ${error.message}`);
        res.status(500).json({ error: 'Error in updating product' });
    }
});

module.exports = router;
