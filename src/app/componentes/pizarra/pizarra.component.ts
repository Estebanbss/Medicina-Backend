import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.css']
})
export class PizarraComponent implements OnInit {
  volumen: string = '';
  tipo: string = '';
  // @ts-ignore
  imagenes$: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.volumen = params['volumen'];
      this.tipo = params['tipo'];

      console.log('Volumen:', this.volumen);
      console.log('Tipo:', this.tipo);

      this.imagenes$ = this.firestore.collection('images', ref =>
        ref.where('volumen', '==', this.volumen)
          .where('tipo', '==', this.tipo)
      ).valueChanges();

      this.imagenes$.subscribe(data => {
        console.log('Imágenes:', data);
      });
    });
  }

  filtrarImagenes(tipo: string) {
    this.imagenes$ = this.firestore.collection('images', ref =>
      ref.where('volumen', '==', this.volumen)
        .where('tipo', '==', this.tipo)
        .where('tipoImagen', '==', tipo)
    ).valueChanges();

    this.imagenes$.subscribe(data => {
      console.log('Imágenes filtradas por tipo:', data);
    });
  }
}
