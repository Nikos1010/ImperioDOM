import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const { urlConnectionAPI } = environment; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) { }

   cargarProducto(): Observable<any> {
    return this.http.get(`${urlConnectionAPI}products`);
   };

   eliminarProducto(prodId: string): Observable<any> {
    return this.http.delete(`${urlConnectionAPI}user/deleteProduct/${prodId}`);
   };

   guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(`${urlConnectionAPI}user/addProduct`, producto);
   }

   obtenerProducto(prodId: string): Observable<any> {
    return this.http.get(`${urlConnectionAPI}products/${prodId}`);
   }

   editarProducto(prodId: string, product: Producto): Observable<any> {
    return this.http.put(`${urlConnectionAPI}user/editProduct/${prodId}`, product);
   }
  //  private cargarProducto() {
  //   return new Promise<void>( (resolve, reject) => {
  //     this.http.get(`${urlConnectionAPI}products`)
  //       .subscribe(( resp: any) => {
  //         this.productos = resp;
  //         this.cargando = false;
  //         resolve();
  //       });
  //   });
  //  }
}

