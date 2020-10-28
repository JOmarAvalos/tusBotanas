import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotanasService {

private botanas:Botana[] =
  [
    {
      id: '1',
      titulo: 'Tus Cacahuates',
      descripcion: 'La mejor variedad de cacahuates.',
      img: 'assets/img/tus_cacahuates_imagen.jpg'
    },
    {
      id: '2',
      titulo: 'Tus Combinaciones',
      descripcion: 'Mezcla de diferentes tipos de cacahuates, churritos, semillas.',
      img: 'assets/img/tus_combinaciones_imagen.jpg'
    },
    {
      id: '3',
      titulo: 'Tus Semillas',
      descripcion: 'Semillas saladas y picosas, super frescas y crujientes.',
      img: 'assets/img/tus_semillas_imagen.jpg'
    },
    {
      id: '4',
      titulo: 'Tus Gomitas',
      descripcion: 'Las mejor variedad de gomitas.',
      img: 'assets/img/tus_gomitas_clasicas_imagen.jpg'
    },
    {
      id: '5',
      titulo: 'Tus Gomitas Gourmet',
      descripcion: 'Las mejor variedad de gomitas.',
      img: 'assets/img/tus_gomitas_dluxe_imagen.jpg'
    },
    {
      id: '6',
      titulo: 'Tus Chocolates',
      descripcion: 'Vaiedad de chocolates (amargos, dulces...).',
      img: 'assets/img/tus_chocolates_imagen.jpg'
    },
    {
      id: '7',
      titulo: 'Botana Sana',
      descripcion: 'Las mejor variedad de botana sana.',
      img: 'assets/img/tus_botanas_sanas.jpg'
    },
    {
      id: '8',
      titulo: 'Tus Galletas',
      descripcion: 'Las mas grande variedad dericas galletas.',
      img: 'assets/img/tus_galletas_imagen.jpg'
    },
    {
      id: '9',
      titulo: 'Tus Churritos',
      descripcion: 'Los más crujietes churritos.',
      img: 'assets/img/tus_churritos_imagen.jpg'
    },
    {
      id: '10',
      titulo: 'Tu botana gold',
      descripcion: 'La botana gold.',
      img: 'assets/img/gold.jpg'
    },
    {
      id: '11',
      titulo: 'Gomitas Enchiladas',
      descripcion: 'Las Mejores Gomitas enchiladas.',
      img: 'assets/img/gomitas_enchiladas.jpg'
    }
  ];

  constructor() {
    console.log('Servicio listo para usar');
  }

  getBotanas(): Botana[] {
    return this.botanas;
  }

}


export interface Botana{
  id: string;
  titulo: string;
  descripcion: string;
  img: string;
}
