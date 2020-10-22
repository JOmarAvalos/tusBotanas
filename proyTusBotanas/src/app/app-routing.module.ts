import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FinalidadComponent } from './components/finalidad/finalidad.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'finalidad', component: FinalidadComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
