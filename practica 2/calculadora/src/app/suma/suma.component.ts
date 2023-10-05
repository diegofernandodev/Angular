import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  titulo = "Calculadora"
  valor1:number = 0
  valor2:number = 0
  resultado = 0
  
  sumar():void{
    this.resultado = this.valor1 + this.valor2
  }

  restar():void{
    this.resultado = this.valor1 - this.valor2
  }

  multiplicar():void{
    this.resultado = this.valor1 * this.valor2
  }
}
