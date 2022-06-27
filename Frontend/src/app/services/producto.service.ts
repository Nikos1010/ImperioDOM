import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const { urlConnectionAPI } = environment; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando: boolean = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProducto();
   }

   private cargarProducto() {
    return new Promise<void>( (resolve, reject) => {
      this.http.get(`${urlConnectionAPI}products`)
        .subscribe(( resp: any) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
   }
}
