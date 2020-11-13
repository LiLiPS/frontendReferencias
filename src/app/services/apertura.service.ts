import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { GenericServicesService } from './generic-services.service';


export interface Periodo {
    fechaInicial: string,
    fechaFinal: string
}

@Injectable()
export class AperturaService extends GenericServicesService {
    constructor(private http: HttpClient,
        private genericServicesService: GenericServicesService) { super(http); }

    private baseUrl = GenericServicesService.API_ENDPOINT;
    private headers = GenericServicesService.HEADERS;

    addPeriodo(fechas) {
        this.genericServicesService.post('PAAE_Periodo', fechas);
        // return this.http.post('http://127.0.0.1:8000/api/PAAE_Periodo?token='+sessionStorage.getItem('token'), fechas
        //     ).subscribe(
        //         (response) => {
        //             //response;
        //     }
        // );
    }

    // addPeriodo2(fechas){
    //     return this.http.post(GenericServicesService.API_ENDPOINT + 'Periodo', fechas, GenericServicesService.HEADERS
    //         ).subscribe(
    //             (response) => {
    //                 console.log(response);
    //         }
    //     );
    // }
    /*     updatePeriodo(fechas,idPeriodo){
            return this.http.patch('http://127.0.0.1:8000/api/Periodo/'+idPeriodo, fechas
                ).subscribe(
                    (response) => {
                        //console.log(response);
                }
            );
        } */
    getPeriodo(): Observable<Periodo> {
        return this.http.get<Periodo>(GenericServicesService.API_ENDPOINT + 'PAAE_Periodo', this.headers);
    }
}
