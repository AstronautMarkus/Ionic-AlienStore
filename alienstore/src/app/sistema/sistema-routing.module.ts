import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepagePage } from './alienstore/homepage/homepage.page';
import { ProductoPage } from './alienstore/producto/producto.page'; // esta es para recorrer un producto por ID 
import { ProductosPage } from './alienstore/productos/productos.page';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepagePage,
  },
  {
    path: 'productos',
    component: ProductosPage,
  },
  { path: 'producto/:id', component: ProductoPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
