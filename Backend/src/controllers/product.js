import Product from '../models/product.js';
import { Generic } from './generic.js';

export const postAddProduct = (req, res) => {
    const { codigo, nombre, descripcion, instrucciones, img, detalles, categoria } = req.body;
    const product = new Product(codigo, nombre, descripcion, instrucciones, img, detalles, categoria);
    product.save()
        .then(result => res.status(302).redirect('/home'))
        .catch(err => console.log(err));
}

export const getProducts = (req, res) => {
    Product.fetchAll()
        .then(products => {
            Generic.notFoundElement(products, 'Productos', res);
        })
        .catch(err => console.log(err));
}