import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SistemaRoutingModule } from './sistema-routing.module';

import { HomepagePage } from './alienstore/homepage/homepage.page';
import { ProductosPage } from './alienstore/productos/productos.page';
import { ProductoPage } from './alienstore/producto/producto.page';

import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
  HomepagePage,
  ProductosPage,
  ProductoPage,
  
  ],

  imports: [
    IonicModule,
    CommonModule,
    SistemaRoutingModule,
    ComponentsModule,
    HttpClientModule

  ]
})
export class SistemaModule { }
