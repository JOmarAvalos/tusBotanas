import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BotanasService {
  private botanas: Botana[] = [
    {
      id: 1,
      titulo: 'Aulas',
      descripcion: 'Descripción pequeña de Aulas.',
      img: 'assets/libs/img/aulas.jpg',
      //choro: 'descripción a detalle',
      portafolio: [
        {
          imgPortafolio: 'assets/libs/img/img-03.jpg',
          txtPortafolio:
            'descripción larga del aula dimenciones , que es lo que tiene',
        },
      ],
    },

    {
      id: 4,
      titulo: 'Dormitorio',
      descripcion: 'Servicios.',
      img: 'assets/libs/img/Dormitorio.jpg',
      //choro: 'descripción a detalle',
      portafolio: [
        {
          imgPortafolio: 'assets/libs/img/img-03.jpg',
          txtPortafolio:
            'descripcion del producto y lo que mas quieras agregar la imagen puede ser mas grande centrada , esa ya tu dcides',
        },
      ],
    },
    {
      id: 5,
      titulo: 'Oficina comercial',
      descripcion: 'Servicios.',
      img: 'assets/libs/img/oficina_comercial.jpeg',
      //choro: 'descripción a detalle',
      portafolio: [
        {
          imgPortafolio: 'assets/libs/img/img-03.jpg',
          txtPortafolio:
            'descripcion del producto y lo que mas quieras agregar la imagen puede ser mas grande centrada , esa ya tu dcides',
        },
      ],
    },
    {
      id: 2,
      titulo: 'Baños',
      descripcion: 'Descripción de oficina 2.',
      img: 'assets/libs/img/banos.jpg',
      //choro: 'descripción a detalle',
      portafolio: [
        {
          imgPortafolio: 'assets/libs/img/img-03.jpg',
          txtPortafolio:
            'descripcion del producto y lo que mas quieras agregar la imagen puede ser mas grande centrada , esa ya tu dcides',
        },
      ],
    },
    {
      id: 3,
      titulo: 'Caseta de vigilancia',
      descripcion: 'Descripción de oficina 2.',
      img: 'assets/libs/img/caseta_de_vigilancia.jpg',
      //choro: 'descripción a detalle',
      portafolio: [
        {
          imgPortafolio: 'assets/libs/img/img-03.jpg',
          txtPortafolio:
            'descripcion del producto y lo que mas quieras agregar la imagen puede ser mas grande centrada , esa ya tu dcides',
        },
      ],
    },
    //{
    //id: 3,
    //titulo: 'Tus Semillas',
    //descripcion: 'Semillas saladas y picosas, super frescas y crujientes.',
    //img: 'assets/libs/img/tus_semillas_imagen.jpg',
    //portafolio: [
    //{
    //imgPortafolio: 'assets/libs/img/portfolio/tusemillasgar.jpg',
    //txtPortafolio: 'Garbanzo',
    //},
    //{
    //          imgPortafolio: 'assets/libs/img/portfolio/tusemillashaba.jpg',
    //          txtPortafolio: 'Haba',
    //        },
    //        {
    //          imgPortafolio: 'assets/libs/img/portfolio/tusemillaspepita.jpg',
    //          txtPortafolio: 'Pepita',
    //        },
    //        {
    //          imgPortafolio: 'assets/libs/img/portfolio/tusemillaspepitarusa.jpg',
    //          txtPortafolio: 'Pepita Rusa',
    //        },
    //      ],
    //    },
  ];

  constructor() {
    console.log('Servicio listo para usar');
  }

  getBotanas(): Botana[] {
    return this.botanas;
  }

  getBotana(idx: number): Botana {
    for (const botana of this.botanas) {
      const id = botana.id;
      if (id == idx) {
        return botana;
      }
    }
  }
}

export interface Botana {
  id: number;
  titulo: string;
  descripcion: string;
  img: string;
  portafolio: any;
}
