import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angula';

  curso: string = 'Curso de angular';
  profesor: string = 'Sas Loes';
}
