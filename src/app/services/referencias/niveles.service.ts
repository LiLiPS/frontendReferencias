import {Injectable} from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';
import {InterfaceConcepto} from '../../models/referencias/ConceptoModel';
import {Observable} from 'rxjs';
import {InterfaceLogConcepto} from '../../models/referencias/LogConceptoModel';

@Injectable({
    providedIn: 'root'
})
export class NivelesService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    // Obtiene todos los niveles
    public get_niveles(): Observable<InterfaceConcepto[]> {
        return this.http.get<InterfaceConcepto[]>(
            GenericServicesService.API_ENDPOINT + 'niveles',
            GenericServicesService.HEADERS
        );
    }
}
