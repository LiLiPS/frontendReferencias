import {Injectable} from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';
import {InterfaceConcepto} from '../../models/referencias/ConceptoModel';
import {Observable} from 'rxjs';
import {InterfaceLogConcepto} from '../../models/referencias/LogConceptoModel';

@Injectable({
    providedIn: 'root'
})
export class AplicacionConceptoService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    // guarda aplicaci+on
    guarda_aplicacion(body): any {
        return this.http.post<any>(
            GenericServicesService.API_ENDPOINT + 'createAplicacionConcepto',
            body,
            GenericServicesService.HEADERS
        );
    }

    // consultar las aplicaciones
    consultar_aplicacion(): any {
        return this.http.get<any>(
            GenericServicesService.API_ENDPOINT + 'aplicacionNivel',
            GenericServicesService.HEADERS
        );
    }

    // filtrar las aplicaciones
    filtrar_aplicacion(body): any {
        return this.http.post<any>(
            GenericServicesService.API_ENDPOINT + 'aplicacionNivel',
            body,
            GenericServicesService.HEADERS
        );
    }

    // Eliminar una apliación
    eliminar_aplicacion(id): any {
        return this.http.delete(
          GenericServicesService.API_ENDPOINT + 'deleteAplicacionConcepto/' + id,
            GenericServicesService.HEADERS
        );
    }
}
