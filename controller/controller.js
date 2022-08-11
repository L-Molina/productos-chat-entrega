const products = require("./productos")
const messages = require("./messages");

class Contenedor {
    //getAll
    static getAll() {
        return products.productsList()
    };

    //getById
    static getById(id) {
        return products.getProduct(id);
    };

    //addProduct
    static addProduct(product) {
        return products.addProduct(product)
    };

    //updateProduct
    static updateProduct(id, updatedContent) {
        return products.updateProduct(id, updatedContent);
    };

    //deleteProduct
    static deleteProduct(id) {
        return products.deleteProduct(id);
    };
    
    //addMessage
    static addMessage(message){
        return messages.addMessage(message);
    }
};

module.exports = Contenedor;