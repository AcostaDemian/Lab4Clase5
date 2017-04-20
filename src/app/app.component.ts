import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form={};
  log=true;

  settings = {
    columns: {
      nombre: {
        title: 'Nombre'
      },
      apellido: {
        title: 'Apellido'
      },
      edad: {
        title: 'Edad'
      }
    }
  };

  personas:Array<persona>=[];
  

  constructor(){
    this.personas=[
      new persona("aaa","aaa",11),
      new persona("bbb","bbb",22),
      new persona("ccc","ccc",33),
      new persona("ddd","ddd",44),
    ];
    this.personas.push(new persona("ttt","ttt",55));
  }

  login(){
    console.log(this.form);
    this.log=false;
  }

  logout(){
    this.form={};
    this.log=true;
  }
}

export class persona{
  nombre:string;
  apellido:string;
  edad:number;
  constructor(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido=apellido;
    this.edad=edad;
  }
}
