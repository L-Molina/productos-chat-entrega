const {options} = require('../dataBase/options/mariaDB.js');
const knex = require('knex')(options);

const productsList = async () => {
    try {    
        const productos = await knex
            .from('productos') 
            .select('*') 
            .orderBy('price', 'desc') 
        return productos; 
    } catch (err) {
        throw new Error('No se pudo leer la Base de Datos', err)
    }  
}

const getProduct = async (id) => {
    try {
        const producto = await knex
        .from('productos') 
        .select('*') 
        .where({id}) 
        .then((data) => { 
            return data;
        }).catch((err) => {    
            throw new Error('No se pudo leer la Base de Datos', err)
        });
    } catch (err) {
        throw new Error('No se pudo leer la Base de Datos', err)
    } 
} 

const addProduct = async (product) => {
    try {    
        knex('productos') 
        .insert(product) 
        .then(() => { 
        return ('Producto insertados')})
        .catch((err) => {
            throw new Error('No se pudo leer la Base de Datos', err)
        })
    } catch (err) {
        throw new Error('No se pudo leer la Base de Datos', err)
    }   
}

const deleteProduct = async (i) => {
    try {
        knex
        .from('productos') 
        .where('id', '=', i) 
        .del() 
        .then (() => { 
            return('Producto eliminado');  
        }).catch((err) => {
            throw new Error('No se pudo leer la DB', err)
        })  
    }
    catch (err) {
        throw new Error('No se pudo leer la DB', err)
    }  
  } 

module.exports = { productsList, getProduct, addProduct, deleteProduct };