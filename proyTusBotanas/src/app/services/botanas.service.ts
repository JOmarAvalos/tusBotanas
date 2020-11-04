import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotanasService {

private botanas: Botana[] =
[
  {
    id: 1,
    titulo: 'Tus Cacahuates',
    descripcion: 'La mejor variedad de cacahuates.',
    img: 'assets/libs/img/tus_cacahuates_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 2,
    titulo: 'Tus Combinaciones',
    descripcion: 'Mezcla de diferentes tipos de cacahuates, churritos, semillas.',
    img: 'assets/libs/img/tus_combinaciones_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 3,
    titulo: 'Tus Semillas',
    descripcion: 'Semillas saladas y picosas, super frescas y crujientes.',
    img: 'assets/libs/img/tus_semillas_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 4,
    titulo: 'Tus Gomitas',
    descripcion: 'Las mejor variedad de gomitas.',
    img: 'assets/libs/img/tus_gomitas_clasicas_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 5,
    titulo: 'Tus Gomitas Gourmet',
    descripcion: 'Las mejor variedad de gomitas.',
    img: 'assets/libs/img/tus_gomitas_dluxe_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 6,
    titulo: 'Tus Chocolates',
    descripcion: 'Vaiedad de chocolates (amargos, dulces...).',
    img: 'assets/libs/img/tus_chocolates_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 7,
    titulo: 'Botana Sana',
    descripcion: 'Las mejor variedad de botana sana.',
    img: 'assets/libs/img/tus_botanas_sanas.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 8,
    titulo: 'Tus Galletas',
    descripcion: 'Las mas grande variedad dericas galletas.',
    img: 'assets/libs/img/tus_galletas_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 9,
    titulo: 'Tus Churritos',
    descripcion: 'Los más crujietes churritos.',
    img: 'assets/libs/img/tus_churritos_imagen.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 10,
    titulo: 'Tu botana gold',
    descripcion: 'La botana gold.',
    img: 'assets/libs/img/gold.jpg',
    portafolio: [
      {
        imgPortafolio: '',
        txtPortafolio: ''
      }
    ]
  },
  {
    id: 11,
    titulo: 'Gomitas Enchiladas',
    descripcion: 'Las Mejores Gomitas enchiladas.',
    img: 'assets/libs/img/gomitas_enchiladas.jpg',
    portafolio: [
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_enchiladas.jpg',
        txtPortafolio: 'Gomita Enchiladas'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_enchiladas_frutita.jpg',
        txtPortafolio: 'Gomita Frutitas'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_enchiladas_huesorindo.jpg',
        txtPortafolio: 'Gomita Huesorindo'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_enchiladas_manguito_enchilado.jpg',
        txtPortafolio: 'Gomita Mango'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_enchiladas_pepino_enchilado.jpg',
        txtPortafolio: 'Gomita Pepino'
      }
    ]
  }
];

  constructor() {
    console.log('Servicio listo para usar');
  }

  getBotanas(): Botana[] {
    return this.botanas;
  }

  getBotana( idx: number ): Botana {

    for ( const botana of this.botanas ){
      const id = botana.id;
      if ( id == idx ) {
        return botana;
      }
    }
  }

}


export interface Botana{
  id: number;
  titulo: string;
  descripcion: string;
  img: string;
  portafolio: any;
}
