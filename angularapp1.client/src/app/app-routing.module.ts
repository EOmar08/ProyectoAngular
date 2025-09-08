import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/Componentes/home/home.component';
import { AboutComponent } from '../app/Componentes/about/about.component';
import { CalculadoraComponent } from '../app/Calculadora/calculadora/calculadora.component'
import { RandomUserComponent } from '../app/RandomUser/random-user/random-user.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "calculadora", component: CalculadoraComponent },
  { path: "about", component: AboutComponent },
  { path: "randomuser", component: RandomUserComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
