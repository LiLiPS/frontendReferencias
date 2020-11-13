import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { GenericServicesService } from './generic-services.service';

export interface Periodo{
    fechaInicial: string,
    fechaFinal: string
}


@Injectable()
export class PeriodoService extends GenericServicesService{ 

    constructor(private http: HttpClient,
        private genericServicesService: GenericServicesService ){ super(http); }

      private baseUrl = GenericServicesService.API_ENDPOINT;
      private headers = GenericServicesService.HEADERS;
        
    async addPeriodo(fechas){
        return this.http.post(this.baseUrl + 'Periodo', fechas, this.headers).toPromise();
    }

    async addPeriodoCurso(fechas){
        return this.http.post(GenericServicesService.API_ENDPOINT + 'PeriodoCurso', fechas, GenericServicesService.HEADERS).toPromise();
    }

    async addPeriodoInscripcion(fechas){
        return this.http.post(GenericServicesService.API_ENDPOINT + 'PeriodoInscripcion', fechas, GenericServicesService.HEADERS).toPromise();
    }

    async addPeriodoInscripcionCero(fechas){
        return this.http.post(GenericServicesService.API_ENDPOINT + 'PeriodoInscripcionCero', fechas, GenericServicesService.HEADERS).toPromise();
    }

    async addMontoPreficha(monto){
        return this.http.post(this.baseUrl + 'MontoPreficha',  monto, this.headers).toPromise();
    }

    async addMontoCurso(monto){
        return this.http.post(this.baseUrl + 'MontoCurso',  monto, this.headers).toPromise();
    }

    async addMontoInscripcion(monto){
        return this.http.post(this.baseUrl + 'MontoInscripcion',  monto, this.headers).toPromise();
    }

    async addMontoInscripcionCero(monto){
        return this.http.post(this.baseUrl + 'MontoInscripcionCero',  monto, this.headers).toPromise();
    }

    async publicarResultados(resultados){
        return this.http.post(this.baseUrl + 'PublicarResultados',  resultados, this.headers).toPromise();
    }
    
    async updateMenajes(mensajes){
        return this.http.post(this.baseUrl + 'MensajesAceptacion',  mensajes, this.headers).toPromise();
    }

    async modificarTipoExamen(tipo){
        return this.http.post(this.baseUrl + 'ModificarTipoExamen',  tipo, this.headers).toPromise();
    }    
    async modificarReferencias(tipo){
        return this.http.post(this.baseUrl + 'ModificarReferencias',  tipo, this.headers).toPromise();
    }

    getPeriodo():Observable<Periodo>{
        return this.http.get<Periodo>(GenericServicesService.API_ENDPOINT + 'Periodo');
    }
}