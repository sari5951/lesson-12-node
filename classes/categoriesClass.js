const fs = require('fs');
const category = require('../data/categories.json');

class Category {
    constructor(Description, ID) {
      this.Description =Description;
      this.ID = ID;
    //   this.List = List;
    }
    save() {
      console.log("newCour");
        category.push(this);
         fs.writeFileSync('./Data/category.json', JSON.stringify(category));
      }
    
}
module.exports={Category};