import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ListarProductoComponent } from './pages/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'postBlog', component: BlogPostComponent },
  { path: 'admin/products', component: ListarProductoComponent },
  { path: 'admin/add-product', component: CrearProductoComponent },
  { path: 'admin/edit-product/:prodId', component: CrearProductoComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
