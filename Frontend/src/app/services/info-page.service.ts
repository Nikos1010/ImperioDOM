import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InfoPagina } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarInfo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe(( resp: InfoPagina ) => {
        this.cargada = true;
        this.info = resp;
      });
  }
}
