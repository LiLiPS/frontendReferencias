import {Injectable} from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfaceGrupo} from '../../models/referencias/GrupoModel';

@Injectable({
  providedIn: 'root'
})
export class GruposServiceService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    public get_grupo_by_id(pk: number): Observable<InterfaceGrupo> {
        return this.http.get<InterfaceGrupo>(
            GenericServicesService.API_ENDPOINT + `grupos/${pk}`,
            GenericServicesService.HEADERS
        );
    }

    // Obtiene todos los grupos
    public get_grupos(): Observable<InterfaceGrupo[]> {
        return this.http.get<InterfaceGrupo[]>(
            GenericServicesService.API_ENDPOINT + 'grupos',
            GenericServicesService.HEADERS
        );
    }

    // Busca los grupos filtrados por NOMBRE
    public filter_grupos(filtro: object): Observable<InterfaceGrupo[]> {
        return this.http.post<InterfaceGrupo[]>(
            GenericServicesService.API_ENDPOINT + 'grupos',
            filtro,
            GenericServicesService.HEADERS
        );
    }

    // Crea un grupo
    public create_grupo(grupo: InterfaceGrupo) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'createGrupo',
            grupo,
            GenericServicesService.HEADERS
        );
    }

    // Modifica datos de un grupo
    public update_grupo(pk: number, body: object) {
        return this.http.patch(
            GenericServicesService.API_ENDPOINT + `updateGrupo/${pk}`,
            body,
            GenericServicesService.HEADERS
        );
    }

    // Elimina lógicamente al grupo
    public delete_grupo(pk: number) {
        return this.http.delete(
            GenericServicesService.API_ENDPOINT + `deleteGrupo/${pk}`,
            GenericServicesService.HEADERS
        );
    }
}
