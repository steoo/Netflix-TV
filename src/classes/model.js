/** Making a static singleton model */
import data from "../data/categories.js";

//console.log("Availables:", categories);

class Model {
    constructor(categories){
        this.categories = categories
    }

    get length() {
        return this.categories.length;
    }

    getCategory(index){
        return this.categories[index];
    }
}

var d = new Model(data);

export default d;