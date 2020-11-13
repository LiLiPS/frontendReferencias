import { Injectable } from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfaceGrupoDetalle, InterfaceUsuario} from '../../models/referencias/GrupoModel';

@Injectable({
  providedIn: 'root'
})
export class GrupoDetalleService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    // Obtiene el detalle de grupo
    public get_detalle(pk: number): Observable<InterfaceGrupoDetalle[]> {
        return this.http.get<InterfaceGrupoDetalle[]>(
            GenericServicesService.API_ENDPOINT + `getDetalleGrupo/${pk}`,
            GenericServicesService.HEADERS
        );
    }

    public get_estudiante(numero_control: string) {
        return this.http.get<InterfaceUsuario>(
            GenericServicesService.API_ENDPOINT + `getEstudiante/${numero_control}`,
            GenericServicesService.HEADERS
        );
    }

    public agregar_estudiante(body: object) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'addEstudiante',
            body,
            GenericServicesService.HEADERS
        );
    }

    public eliminar_estudiante(pk: number) {
        return this.http.delete(
            GenericServicesService.API_ENDPOINT + `deleteEstudiante/${pk}`,
            GenericServicesService.HEADERS
        );
    }
}
