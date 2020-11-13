import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SistemaPermisosService {
  constructor(private http: HttpClient){}
  getPermisosSistemas():any{
    return this.http.get<any>('http://127.0.0.1:8000/api/Sistema_Permiso/'
    +sessionStorage.getItem('sistema')
    );    
  }
}