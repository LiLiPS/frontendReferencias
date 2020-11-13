import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IRoles} from './rolesLista';
import {GenericServicesService} from './generic-services.service';


/* @Injectable()
export class UsuarioRolesService extends GenericServicesService{
    constructor(private http: HttpClient,
    private genericServicesService: GenericServicesService ){ super(http); }
    getUsuarioRoles(): Observable<IRoles[]>{
        return this.http.get<IRoles[]>('http://127.0.0.1:8000/api/Usuario_Rol/' + sessionStorage.getItem('IdUsuario'));
    }
} */

@Injectable()


export class UsuarioRolesService extends GenericServicesService {
    constructor(private http: HttpClient,
                private genericServicesService: GenericServicesService) {
        super(http);
    }

    getUsuarioRoles(): Observable<IRoles[]> {
        return this.http.get<IRoles[]>(GenericServicesService.API_ENDPOINT + 'Usuario_Rol/' + sessionStorage.getItem('IdUsuario'));
    }

    get_permisos_tutorias() {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'roles_usuario',
            {
                'pk_usuario': sessionStorage.getItem('IdUsuario')
            }
        );
    }
}
