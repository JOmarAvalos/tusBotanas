import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FinalidadComponent } from './components/finalidad/finalidad.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValoresComponent } from './components/valores/valores.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'finalidad', component: FinalidadComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'vision', component:  VisionComponent},
  { path: 'valores', component: ValoresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
