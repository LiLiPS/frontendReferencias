import { Injectable } from '@angular/core';
import {GenericServicesService} from './generic-services.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterfaceAreaAcademica} from '../views/_models/GeneralModels';

@Injectable({
  providedIn: 'root'
})
export class AreaAcademicaServiceService extends GenericServicesService {

    constructor(private http: HttpClient) {
        super(http);
    }

    get_areas_academicas(): Observable<InterfaceAreaAcademica[]> {
        return this.http.get<InterfaceAreaAcademica[]>(
            GenericServicesService.API_ENDPOINT + 'area_academica',
            GenericServicesService.HEADERS
        );
    }
}
