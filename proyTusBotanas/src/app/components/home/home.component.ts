import { Component, OnInit } from '@angular/core';
import { BotanasService, Botana } from '../../services/botanas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  botanas: Botana[] = [];

  constructor( private botanasServices: BotanasService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.botanas = this.botanasServices.getBotanas();
    // console.log(this.botanas);
  }

}
