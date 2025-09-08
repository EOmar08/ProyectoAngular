import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriaGetAllComponent } from './Materia/materia-get-all/materia-get-all.component';
import { CalculadoraComponent } from './Calculadora/calculadora/calculadora.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AboutComponent } from './Componentes/about/about.component';
import { RandomUserComponent } from './RandomUser/random-user/random-user.component'

@NgModule({
  declarations: [
    AppComponent,
    MateriaGetAllComponent,
    CalculadoraComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RandomUserComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
