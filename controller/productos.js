const products = [];
let id = 0;

const productsList = () => {
    return products
};

const getProduct = (id) => {
    if (data.length === 0) {return ({"Error" : "Products list is empty"})} 
    return (products.find(product => product.id === parseInt(id)) || { error: 'Product not Found' })
};

const addProduct = (product) => {
    id++
    const prod = {
        id: id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail
    }
    products.push(prod)
    return product
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