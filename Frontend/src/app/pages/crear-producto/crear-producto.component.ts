import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router,
               private toastr: ToastrService) {
    this.productoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      categoria: ['', Validators.required],
      numeroPesaje: ['', Validators.required],
      pesoProducto: ['', Validators.required],
      pesoProducto2: [''],
      stockProducto: ['', Validators.required],
      stockProducto2: [''],
      precioProducto: ['', Validators.required],
      precioProducto2: [''],
      codSabor: ['', Validators.required],
      descripcion: ['', Validators.required],
      instrucciones: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  agregarProducto(){
    const PRODUCTO: Producto = {
      codigo: this.productoForm.get('codigo')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      instrucciones: this.productoForm.get('instrucciones')?.value,
      imagen: this.productoForm.get('imagen')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      detalles: {
        pesos: {
          grande: this.productoForm.get('pesoProducto')?.value,
          peque: this.productoForm.get('pesoProducto2')?.value,
        },
        stock: {
          grande: this.productoForm.get('stockProducto')?.value,
          peque: this.productoForm.get('stockProducto2')?.value,
        },
        precios: {
          grande: this.productoForm.get('precioProducto')?.value,
          peque: this.productoForm.get('precioProducto2')?.value,
        },
        sabores: this.productoForm.get('codSabor')?.value
      }
    }
    console.log(PRODUCTO);
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
    this.router.navigate(['/admin/products']);
  }
}