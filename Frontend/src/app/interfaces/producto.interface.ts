export interface Producto {
  _id?: string;
  codigo?: number;
  nombre?: string;
  descripcion?: string;
  instrucciones?: string;
  imagen?: string;
  detalles?: Detalles;
  categoria?: string;
}

interface Detalles {
  pesos?: Pesos;
  stock?: Stock;
  precios?: Stock;
  sabores?: object;
}

interface Stock {
  grande?: number;
  peque?: number;
}

interface Pesos {
  grande?: string;
  peque?: string;
}