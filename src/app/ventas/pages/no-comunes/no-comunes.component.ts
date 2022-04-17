import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre :string = 'Celeste';
  genero :string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','José','Martín','Juan','Ezequiel'];
  clientesmap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando' //Con el # obtenemos el valor que le estamos pasando y asi reemplaza el valor
  }

  borrarCliente(){
    this.clientes.shift();
  }

  cambiarNombre(){
    this.nombre = 'José';
    this.genero = 'masculino';
  }

  //KeyValue pipe
  persona={
    nombre:'Jonatan',
    edad:32,
    direccion:'Argentina, CABA'
  }

  //Json Pipe
  heroes = [
    {
      nombre:'Spiderman', vuela: false
    },
    {
      nombre:'Iron Man', vuela: true
    },
    {
      nombre:'Capitan América', vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,5

  valorPromesa = new Promise( (resolve,reject) => {
   
    // se ejecuta cada 3.5 segundos
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);

  });

}
