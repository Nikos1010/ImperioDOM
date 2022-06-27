import mongodb from 'mongodb';
import { getDb } from '../util/database.js';

class Product {
    constructor(codigo, nombre, descripcion, instrucciones, img, detalles, categoria){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.instrucciones = instrucciones;
        this.imagen = img;
        this.detalles = detalles;
        this.categoria = categoria;
    }

    save() {
        const db = getDb();
        return db.collection('products').insertOne(this)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('products').find().toArray()
            .then(productos => productos)
            .catch(err => console.log(err));
    }
}

export default Product;

/*
{
    "nombre": "BEST PROTEIN",
    "descripcion": "Es una mezcla 3 en 1, Proteína aislada de suero de leche de altísima calidad, Caseina Micelar (proteína de absorción lenta) y Leucina.",
    "instrucciones": "Mezcla 1 cucharada del producto en 180ml de agua, agítalo hasta tener un producto homogéneo. POST-ENTRENO",
    "img": "best-grande",
    "detalles": {
        "pesos": {
            "grande": "5L",
            "peque": "2,18L"
        },
        "stock": {
            "grande": 5,
            "peque": 3
        },
        "precios": {
            "grande": 295000,
            "peque": 140000
        },
        "sabores": {
            "0": "cod1",
            "1": "cod2",
            "2": "cod3",
            "3": "cod4"
        }
    }
}
*/