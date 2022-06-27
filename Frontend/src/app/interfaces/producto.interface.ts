export interface Producto {
  nombre: string;
  descripcion: string;
  instrucciones: string;
  categoria: string;
  imagen?: string;
  peso: string;
  stock: number;
  precio: string;
  sabores: string[];
}

export interface ProductoDB {
  _id: Id;
  codigo: number;
  nombre: string;
  descripcion: string;
  instrucciones: string;
  imagen: string;
  detalles: Detalles;
  categoria: string;
}

interface Detalles {
  pesos: Pesos;
  stock: Stock;
  precios: Stock;
  sabores: Sabores;
}

interface Sabores {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
}

interface Stock {
  grande: number;
  peque: number;
}

interface Pesos {
  grande: string;
  peque: string;
}

interface Id {
  '$oid': string;
}