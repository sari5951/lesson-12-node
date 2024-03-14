const fs = require('fs');
const Product = require('../data/product.json');
class Product {

    constructor(id, name, price, categoryId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
    }

    save() {
        console.log("newCour");
        Product.push(this);
           fs.writeFileSync('./Data/category.json', JSON.stringify(Product));
        }
}

module.exports = {
  
    Product
};