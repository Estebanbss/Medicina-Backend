import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  volumen: string = '';
  tipos: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.volumen = params['volumen'];
      this.tipos = this.obtenerTiposPorVolumen(this.volumen);
    });
  }

  obtenerTiposPorVolumen(volumen: string): string[] {
    switch (volumen) {
      case 'Volumen1':
        return ['Hombro', 'Brazo', 'Clavicula', 'Antebrazo'];
      case 'Volumen2':
        return ['Tipo A', 'Tipo B', 'Tipo C'];
      case 'Volumen3':
        return ['Tipo X', 'Tipo Y', 'Tipo Z'];
      case 'Volumen4':
        return ['Tipo Alpha', 'Tipo Beta', 'Tipo Gamma'];
      case 'Volumen5':
        return ['Tipo Alpha', 'Tipo Beta', 'Tipo Gamma'];
      default:
        return [];
    }
  }

redireccionarAPizarra(tipo: string) {
  this.router.navigate(['pizarra', this.volumen, tipo]);
}

}
