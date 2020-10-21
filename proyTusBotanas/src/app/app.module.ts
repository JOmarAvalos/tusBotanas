import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedesComponent } from './components/shared/redes/redes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { SocialComponent } from './components/shared/social/social.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RedesComponent,
    HeaderComponent,
    HomeComponent,
    MensajeComponent,
    SocialComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
