const { Router } = require('express');
const router = Router();
const categoriesServiecs = require('../serviecs/cateories.serviecs');

router.get('/', async (req, res) => {
    try {
        const getCategories = await categoriesServiecs.getCategories();
        // const sortedCtegories = getCategories.sort((a, b) => {
        //     return a.name.loc(b.name)

        // })
        // res.send(sortedCtegories);
         res.send(getCategories);

    }
    catch (error) {
        console.error(`error in fcategoriesServiecsetching meeting list ${error.message}`);
        res.status(500).send(`error in fetching meeting list ${error.message}`);
    }
});






// כדי לקבל קטגוריה מסוימת לפי בחירה
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoriesServiecs.getCategory(id);
        res.send(category).status(200).send('succseful');

    }
    catch (error) {
        console.error(`error in fetch service ${error.message}`);
        res.status(500).send(`error in fetch service ${error.message}`);
    }
});






router.post('/', async (req, res) => {
    const category = req.body;

    try {
        if (!category) {
            res.status(400).send('not provided category ');
        }
        else{
            const _category = await categoriesServiecs.addCategory(category);
            res.send( _category );
    
        }
        
    } catch (err) {
        console.error(`error in create service ${err.message}`)
        res.status(500).send(err.message);
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await categoriesServiecs.deleteCategory(id);
        res.send('deleted');
        console.log('deleted!!!!');


    } catch (error) {
        console.error(`error in deleting meeting ${error.message}`);
        res.status(500).send(`error in deleting meeting ${error.message}`);
    }
})

router.put('/:id', async (req, res) => {
    try {

        const category = req.body;

       
        const { id } = req.params;
      
        if (!id || !category ) {
           
            return res.status(400).send('no category or no id provided');

        }
        const _category = await categoriesServiecs.updateCategory(id,category);

        return res.send(_category );
    } catch (error) {
        console.error(`error in updating category ${error.message}`);
        res.status(500).send(`error in updating category ${error.message}`);
    }
})



module.exports = router;


