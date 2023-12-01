import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  videojuegos!: any[];

  constructor(
    private videojuegosService: VideojuegosService,
    private router: Router) { }

  ngOnInit() {
    this.videojuegosService.obtenerVideojuegos().subscribe(
      (data) => {
        this.videojuegos = data;
      },
      (error) => {
        console.error('Error al obtener los videojuegos', error);
      }
    );
  }

  irADetalles(id: number) {
    this.router.navigate(['/sistema/producto', id]);
  }

}
