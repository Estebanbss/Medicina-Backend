import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-medicina-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  iscontPage = false;
  isglosarioPage = false;
  isHomePage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Suscribirse a los eventos de navegación del enrutador
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/'; // Comprobar si la página actual es la página de inicio
        this.iscontPage = event.url.includes('/cont'); // Comprobar si la página actual es la página de contenido
        this.isglosarioPage = event.url.includes('/glosario'); // Comprobar si la página actual es la página de glosario
      }
    });
  }
}
