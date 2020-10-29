import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BotanasService, Botana } from '../../services/botanas.service';



@Component({
  selector: 'app-botana',
  templateUrl: './botana.component.html',
  styles: [
  ]
})
export class BotanaComponent implements OnInit {

  botana: any = {} ;

  constructor( private activatedRoute: ActivatedRoute,
               private botanasService: BotanasService
    ) {

    this.activatedRoute.params.subscribe( params => {
      // console.log( params['id'] );
      this.botana = this.botanasService.getBotana( params['id'] );
      console.log( this.botana );
    });

  }


  ngOnInit(): void {
  }

}
