import {Injectable} from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';
import {InterfaceConcepto} from '../../models/referencias/ConceptoModel';
import {Observable} from 'rxjs';
import {InterfaceLogConcepto} from '../../models/referencias/LogConceptoModel';

@Injectable({
    providedIn: 'root'
})
export class ConceptosServiceService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    // Obtiene todos los conceptos
    public get_conceptos(): Observable<InterfaceConcepto[]> {
        return this.http.get<InterfaceConcepto[]>(
            GenericServicesService.API_ENDPOINT + 'conceptos',
            GenericServicesService.HEADERS
        );
    }

    // Busca los conceptos filtrados por FK_AREA_ACADÉMICA y NOMBRE
    public filter_conceptos(filtro: object): Observable<InterfaceConcepto[]> {
        return this.http.post<InterfaceConcepto[]>(
            GenericServicesService.API_ENDPOINT + 'conceptos',
            filtro,
            GenericServicesService.HEADERS
        );
    }

    // Crea un concepto
    public create_concepto(concepto: InterfaceConcepto) {
        return this.http.post(
            GenericServicesService.API_ENDPOINT + 'createConcepto',
            concepto,
            GenericServicesService.HEADERS
        );
    }

    // Modifica datos de un concepto
    public update_concepto(pk: number, body: object) {
        return this.http.patch(
            GenericServicesService.API_ENDPOINT + `updateConcepto/${pk}`,
            body,
            GenericServicesService.HEADERS
        );
    }

    // Elimina lógicamente al concepto
    public delete_concepto(pk: number) {
        return this.http.delete(
            GenericServicesService.API_ENDPOINT + `deleteConcepto/${pk}`,
            GenericServicesService.HEADERS
        );
    }

    // Obtiene el historial completo de los montos de los conceptos
    public get_historialConceptos(): Observable<InterfaceLogConcepto[]> {
        return this.http.get<InterfaceLogConcepto[]>(
            GenericServicesService.API_ENDPOINT + 'historialConceptos',
            GenericServicesService.HEADERS
        );
    }

    // Busca el historial de un concepto filtrado por NOMBRE
    public filter_historialConcepto(filtro: object): Observable<InterfaceLogConcepto[]> {
        return this.http.post<InterfaceLogConcepto[]>(
            GenericServicesService.API_ENDPOINT + 'historialConceptos',
            filtro,
            GenericServicesService.HEADERS
        );
    }
}
