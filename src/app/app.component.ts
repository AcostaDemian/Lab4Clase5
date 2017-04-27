import { Component } from '@angular/core';

import { DatosService } from './services/datos.service';

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
      name: {
        title: 'Nombre'
      },
      nativeName: {
        title: 'Nombre Nativo'
      },
      region:{
        title: 'Region'
      },
      population:{
        title:'Poblacion'
      },
      numericCode: {
        title: 'Codigo Numerico',
        editable:false,
        sortDirection:"desc",
      }
    },
    pager:{
      perPage:10
    },
    add:{
      confirmCreate:true
    },
    edit:{
      editButtonContent:"Editar",
      saveButtonContent:"Guardar",
      cancelButtonContent:"Cancelar",
      confirmSave:true
    },
    noDataMessage:"No se encontraron datos",
    sort:true,
    actions:{
      add:false,
      edit:false,
      delete:false
    }
  };

 
  personas:Array<persona>=[];
  paises:Array<any>=[];

  

  constructor(private datos:DatosService){
    this.personas=[
      new persona("aaa","aaa",11),
      new persona("bbb","bbb",22),
      new persona("ccc","ccc",33),
      new persona("ddd","ddd",44),
    ];
    this.personas.push(new persona("ttt","ttt",55));
    //this.personas=[]
    console.log(this.personas);
    datos.traerDatos()
      .then(data =>{ this.paises =data
    console.log(this.paises); })
      .catch(error =>{ console.log(error) });
    console.log(this.paises);
  } 

  source = {
    load: this.paises,
  };


  login(){
    this.log=false;
  }

  logout(){
    this.form={};
    this.log=true;
  }

  create(){
    console.log(this.personas);
  }	

  edit(){
    alert("aaaaaaaaah");
  }

  editConfirm(evento){
    this.personas=evento.source.data;
    console.log(evento);
    console.log(this.personas);
    evento.confirm.resolve();
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
