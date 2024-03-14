
const CategoryModel = require('../modules/category');


const getCategories=async()=>{
    try{
        const categorys = await CategoryModel.find();
        console.log('Categorys fetched from MongoDB');
        return categorys;
    }
    catch (error) {
                console.error(`Error in fetching categorys: ${error.message}`);
                throw error;
            }
};



const getCategory = async (id) => {
    try {
        const category = await CategoryModel.findById(id);
        console.log('category fetched by ID from MongoDB');
        return category;
    } catch (error) {
        console.error(`Error in fetching category by ID: ${error.message}`);
        throw error;
    }
};



const addCategory = async (categoryID) => {
    try {
        const category = new CategoryModel({
           name:categoryID
          
        });
        await category.save();
        console.log("category successfully added to MongoDB");
        return category;
    } catch (error) {
        console.error(`Error in adding category: ${error.message}`);
        throw error;
    }
};


// const deleteCategories = async (id) => {
   
//     const categories = await getData();
//     const index = await categories.findIndex(c => c.id === id);
//     categories.splice(index, 1);
//     await updateData(categories);
//     console.log('deleted!');
// }

// const updateCategory = async (id,category) => {
//     const categories = await getData();
//     const _category = await categories.find(m => m.id === id);
//     _category.category=category;
//     Object.assign(_category);
//     await updateData(categories);
//     return _category;
// }

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await CategoryModel.findByIdAndDelete(id);
        console.log('Category deleted from MongoDB');
        return deletedCategory;
    } catch (error) {
        console.error(`Error in deleting category: ${error.message}`);
        throw error;
    }
};

const updateCategory = async (id, updatedCategory) => {
    try {
        const updated = await CategoryModel.findByIdAndUpdate(id, { name: updatedCategory }, { new: true });
        console.log('Category updated in MongoDB');
        return updated;
    } catch (error) {
        console.error(`Error in updating category: ${error.message}`);
        throw error;
    }
};
module.exports={
    getCategories,
    getCategory,
    addCategory,
    deleteCategory,
    updateCategory
    

}