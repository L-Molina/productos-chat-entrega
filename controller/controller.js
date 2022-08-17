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

    //deleteProduct
    static deleteProduct(id) {
        return products.deleteProduct(id);
    };
    
    //showMessage
    static showMessage(message){
        return messages.showMessage();
    };

    //addMessage
    static addMessage(message){
        return messages.addMessage(message);
    };
};

module.exports = Contenedor;