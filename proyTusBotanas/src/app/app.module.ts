import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { RedesComponent } from './components/shared/redes/redes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { SocialComponent } from './components/shared/social/social.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FinalidadComponent } from './components/finalidad/finalidad.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValoresComponent } from './components/valores/valores.component';

// Servicios


@NgModule({
  declarations: [
    AppComponent,
    RedesComponent,
    HeaderComponent,
    HomeComponent,
    MensajeComponent,
    SocialComponent,
    ContactoComponent,
    FooterComponent,
    FinalidadComponent,
    MisionComponent,
    VisionComponent,
    ValoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
