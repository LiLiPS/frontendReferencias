import {Injectable} from '@angular/core';
import {GenericServicesService} from './generic-services.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfacePerfil} from '../models/usuarios/PerfilModel';

@Injectable({
    providedIn: 'root'
})
export class UsuariosServiceService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    busca_usuarios(filtro: object): Observable<InterfacePerfil[]> {
        return this.http.post<InterfacePerfil[]>(
            GenericServicesService.API_ENDPOINT + 'buscar_usuarios',
            filtro,
            GenericServicesService.HEADERS
        );
    }

    modifica_correo(body: object) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'modifica_correo_usuario',
            body,
            GenericServicesService.HEADERS
        );
    }
}
