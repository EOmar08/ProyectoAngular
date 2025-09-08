import { Component } from '@angular/core';
import { Calculadora } from '../../../Models/Calculadora'

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  calculadoraObj = new Calculadora();

  texto!: string;
  numero1ng!: number;
  numero2ng!: number;

  Calcular() {
    //this.calculadoraObj.numero1 = 2;
    //this.calculadoraObj.numero2 = 4;
    //console.log(this.calculadoraObj.numero1 + this.calculadoraObj.numero2);

    var resultado = Number(this.calculadoraObj.numero1) + Number(this.calculadoraObj.numero2)
    console.log(resultado)
    this.texto = resultado.toString();
  }



  VerValor(event: Event) {
    console.log(event)
    const inputValue = (event.target as HTMLInputElement).value;
    this.texto = inputValue;
    console.log('Input value:', inputValue);
  }

}
