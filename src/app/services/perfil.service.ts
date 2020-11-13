import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericServicesService} from './generic-services.service';
import {InterfacePerfil} from '../models/usuarios/PerfilModel';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerfilService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    async get_perfil(pk_usuario: any) {
        const body = {
            'pk_encriptada': pk_usuario
        };

        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'perfil',
            body,
            GenericServicesService.HEADERS
        ).toPromise();
    }

    public guardar_perfil(body) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'actualiza_perfil',
            body,
            GenericServicesService.HEADERS
        );
    }

    async get_estados_civiles() {
        return this.http.get(
            GenericServicesService.API_ENDPOINT + 'Estado_Civil',
            GenericServicesService.HEADERS
        ).toPromise();
    }

    async get_situaciones_residencia() {
        return this.http.get(
            GenericServicesService.API_ENDPOINT + 'situacion_residencia',
            GenericServicesService.HEADERS
        ).toPromise();
    }

    async procesa_codigo_postal(codigo_postal: string) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'procesa_codigo_postal',
            {
                codigo_postal: codigo_postal
            },
            GenericServicesService.HEADERS
        ).toPromise();
    }

    get_perfil_tutor(pk_encriptada: string): Observable<InterfacePerfil> {
        const body = {
            pk_encriptada: pk_encriptada
        };
        return this.http.post<InterfacePerfil>(
            GenericServicesService.API_ENDPOINT + 'get_datos_tutor',
            body,
            GenericServicesService.HEADERS
        );
    }

    cambia_foto(body: object) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'actualiza_foto_perfil',
            body,
            GenericServicesService.HEADERS
        );
    }
}
