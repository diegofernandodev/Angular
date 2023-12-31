import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = "";
  apellidoInput:string = "";
  edadInput:number = 0;

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput,this.edadInput);
    // this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }
}
