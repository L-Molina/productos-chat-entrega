const fs = require('fs')
const products = require('../public/products.json');

class Contenedor {
    constructor (file){
        this.file = file; 
    }

    async save(object){
        try {
            const data = await fs.promises.readFile(this.file);
            const array = JSON.parse(data);
            object.id = array.length + 1;
            array.push(object);
            await fs.promises.writeFile(this.file, JSON.stringify(array, null,2));
            console.log('Se ha guardado el objeto con el id: ' + object.id);
        } catch (err) {
            throw new Error(err);
        }
    }
}

let contenedor = new Contenedor('./public/products.json');

const productsList = () => {
    return products
};

const getProduct = (id) => {
    if (data.length === 0) {return ({"Error" : "Products list is empty"})} 
    return (products.find(product => product.id === parseInt(id)) || { error: 'Product not Found' })
};

const addProduct = (product) => {
    const prod = {
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail
    }
    contenedor.save(prod)
};

const updateProduct = (id, updatedContent) => {
    const product = getProduct(parseInt(id));
    if ((product.id == id) && (product.id != null)) {
        product.name = updatedContent.name;
        product.price = updatedContent.price;
        product.thumbnail = updatedContent.thumbnail;
        return product
    } else {
        return "Product not Found"
    }
};

const deleteProduct = (id) => {
    const product = getProduct(parseInt(id));
    if ((product.id == id) && (product.id != null)) {
        products.splice(products.indexOf(product), 1);
        return "Successfully Deleted Product"
    } else {
        return "Product not Found"
    }
};

module.exports = { productsList, getProduct, addProduct, updateProduct, deleteProduct };