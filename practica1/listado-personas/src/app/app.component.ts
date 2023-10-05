import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas:Persona[] = [
  new Persona("Diego","Velasco",32), 
  new Persona("Javier","Muñoz", 40),
  new Persona("Daniela","Mosquera",25)];

  personaAgregada(perosna:Persona){
    this.personas.push(perosna)
  }

}
