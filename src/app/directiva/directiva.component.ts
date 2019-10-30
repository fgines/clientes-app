import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string [] = ['TypeScript', 'JavaScript', 'java SE', 'C#', 'PHP'];
  habilitar: boolean = true;
  buttomText: string = 'Ocultar';

  constructor() { };

  setHabilitar (): void {
    this.habilitar = (this.habilitar==true)?false:true;
    this.buttomText = (this.habilitar==true)?'Ocultar': 'Mostrar';
  }

}
