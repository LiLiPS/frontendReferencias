import {Injectable} from '@angular/core';
import {GenericServicesService} from '../generic-services.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasExternosService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    get_conceptos(query_params: string) {
        return this.http.get<any>(
            GenericServicesService.API_ENDPOINT + 'conceptos_nivel' + query_params,
            GenericServicesService.HEADERS
        );
    }
}
