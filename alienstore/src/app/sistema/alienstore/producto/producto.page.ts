import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  videojuego: any;

  constructor(
    private route: ActivatedRoute,
    private videojuegosService: VideojuegosService
  ) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convierte el parámetro a número

      // Llamar al servicio para obtener los detalles del videojuego por ID
      this.videojuegosService.obtenerVideojuegoPorId(id).subscribe(
        (data) => {
          this.videojuego = data;
        },
        (error) => {
          console.error('Error al obtener los detalles del videojuego', error);
        }
      );
    });
  }
}
