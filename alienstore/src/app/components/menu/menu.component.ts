import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  // Puedes definir las opciones del menú aquí
  menuItems = [
    { title: 'Pagina principal', icon: 'home', route: '/sistema/homepage' },
    { title: 'Productos', icon: 'list', route: '/sistema/productos' },
    // Agrega más opciones según tus necesidades
  ];  

  navigateTo(route: string) {
    this.Router.navigateByUrl(route).then(() => {
      location.reload();
    });
  }


  constructor(private Router: Router) { }

  ngOnInit() {}

}
