import { Injectable } from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfaceReferencia} from '../../models/referencias/ReferenciaModel';

@Injectable({
  providedIn: 'root'
})
export class ReinscripcionService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    public create_ref_reinscripcion(pk_usuario: number) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + `createRefReinscripcion/${pk_usuario}`,
            GenericServicesService.HEADERS
        );
    }

    public get_ref_reinscripcion(pk_usuario: number): Observable<InterfaceReferencia> {
        return this.http.get<InterfaceReferencia>(
            GenericServicesService.API_ENDPOINT + `getRefReinscripcion/${pk_usuario}`,
            GenericServicesService.HEADERS
        );
    }

    public es_periodo() {
        return this.http.get(
            GenericServicesService.API_ENDPOINT + 'esPeriodo',
            GenericServicesService.HEADERS
        );
    }
}
