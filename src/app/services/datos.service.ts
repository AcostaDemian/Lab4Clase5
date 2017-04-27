import { Injectable } from '@angular/core';
import { HttpModule, Response, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatosService {

  constructor(private http:Http) { }

  traerDatos(){
    return this.http
                .get('https://restcountries.eu/rest/v2/all')
                .toPromise()
                .then(this.extractData)//Exito
                .catch(this.error);//Fallo
  }
  
  private extractData(res:Response){
    return res.json() ||{};
  }

  private error(){
    return 'ERROR';
  }

}
