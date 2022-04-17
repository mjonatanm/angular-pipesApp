import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jonatan';
  nombreUpper: string = 'JONATAN';
  nombreCompleto: string = 'jOnaTAN MORales';

  fecha: Date = new Date();

}
