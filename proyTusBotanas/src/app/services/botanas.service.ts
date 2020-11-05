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
        imgPortafolio: 'assets/libs/img/portfolio/japones_s1.jpg',
        txtPortafolio: 'Japoneses'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/enchilados2.jpg',
        txtPortafolio: 'Enchilados'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/españoles.jpg',
        txtPortafolio: 'Españoles'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/hot2.jpg',
        txtPortafolio: 'Hot'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/tus_cacahuates_garapiñados_ajon.jpg',
        txtPortafolio: 'Garapiñados con Ajonjoli'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/tus_cacahuates_garapiñados_originales.jpg',
        txtPortafolio: 'Garapiñados Originales'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/tus_cacahuates_salados.jpg',
        txtPortafolio: 'Salados'
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
        imgPortafolio: 'assets/libs/img/portfolio/cobinacionfuego_triangulos.jpg',
        txtPortafolio: 'Fuego'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/comacho2.jpg',
        txtPortafolio: 'Macho'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/comespecial2.jpg',
        txtPortafolio: 'Especial'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/comeuropeo2.jpg',
        txtPortafolio: 'Europeo'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/comexicano1.jpg',
        txtPortafolio: 'Mexicano'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/comselecto2.jpg',
        txtPortafolio: 'Selecto'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/comajo2.jpg',
        txtPortafolio: 'Ajo'
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
        imgPortafolio: 'assets/libs/img/portfolio/tusemillasgar.jpg',
        txtPortafolio: 'Garbanzo'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/tusemillashaba.jpg',
        txtPortafolio: 'Haba'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/tusemillaspepita.jpg',
        txtPortafolio: 'Pepita'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/tusemillaspepitarusa.jpg',
        txtPortafolio: 'Pepita Rusa'
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
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_aros_durazno.jpg',
        txtPortafolio: 'Aros de Durazno'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_gotitas.jpg',
        txtPortafolio: 'Clásicas'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_lombriz.jpg',
        txtPortafolio: 'Lombriz'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_aros_manzana.jpg',
        txtPortafolio: 'Aros de Manzana'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_dientitos.jpg',
        txtPortafolio: 'Dientitos'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_panditas.jpg',
        txtPortafolio: 'Panditas'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_frutitas.jpg',
        txtPortafolio: 'Frutitas'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_pingüinos.jpg',
        txtPortafolio: 'Pingüinos'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_clasica_tiburones.jpg',
        txtPortafolio: 'Tiburones'
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
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_cereza.jpg',
        txtPortafolio: 'Cereza'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_fresas_con_crema.jpg',
        txtPortafolio: 'Fresas con crema'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_guanabana.jpg',
        txtPortafolio: 'Guanabana'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_guayaba.jpg',
        txtPortafolio: 'Guayaba'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_mandarina.jpg',
        txtPortafolio: 'Mandarina'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_maracuya.jpg',
        txtPortafolio: 'Maracuya'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_menta_limon.jpg',
        txtPortafolio: 'Menta Limón'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_pai_de_limon.jpg',
        txtPortafolio: 'Pay de limón'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/gomita_dluxe_toronja.jpg',
        txtPortafolio: 'Toronja'
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
        imgPortafolio: 'assets/libs/img/portfolio/botanas_sanas_arandano.jpg',
        txtPortafolio: 'Arándano Granola y Nuez'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/botanas_sanas_arandano_morado.jpg',
        txtPortafolio: 'Arándano Nuez'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/botanas_sanas_arandano_pasas_y_nuez_roja.jpg',
        txtPortafolio: 'Arándano con pasas y nuez'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/botanas_sanas_arandano_verde.jpg',
        txtPortafolio: 'Arándano Frutos secos'
      },
      {
        imgPortafolio: 'assets/libs/img/portfolio/botanas_sanas_energy.jpg',
        txtPortafolio: 'Energy'
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
