import { Component,Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: Persona = new Persona("","",0);
  @Input() indice: number = 1;

}
