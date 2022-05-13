import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent,
    pathMatch:'full'
  },
  {
    path:"contacto",
    component:ContactenosComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
