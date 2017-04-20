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
        title: 'Edad',
        editable:false,
        sortDirection:"desc",
      }
    },
    pager:{
      perPage:2
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
    //this.personas=[]
    console.log(this.personas);
  } 

  source = {
    load: this.personas,
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
