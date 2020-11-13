import { Component, OnInit, ViewChild } from '@angular/core';
import { ConceptosServiceService } from '../../services/referencias/conceptos-service.service';
import { InterfaceLogConcepto } from '../../models/referencias/LogConceptoModel';

@Component({
  selector: 'app-historial-conceptos',
  templateUrl: '../../views/referencias/Conceptos/historial-conceptos.component.html',
  styleUrls: ['../../views/referencias/Conceptos/historial-conceptos.component.scss']
})
export class HistorialConceptosComponent implements OnInit {

    public display = '';
    @ViewChild('loaderModal') loaderModal;
    @ViewChild('modal_filterHistorialConceptos') modal_filterHistorialConceptos;
    public error = null;
    public lista_historial: InterfaceLogConcepto[] = [];
    public PK_LOG_CONCEPTO: number;
    public nombre: string;
    public cantidad_por_pagina: number;
    public ini: number;
    public fin: number;

    constructor(private concepto_service: ConceptosServiceService) {
        this._init();
        this.cantidad_por_pagina = 15;
        this.ini = 0;
        this.fin = this.cantidad_por_pagina;
        this.display = 'block';
    }

    ngOnInit() {
        this.get_historialConceptos();
    }

    // Obtiene tod.o el historial de los conceptos
    public get_historialConceptos() {
        // Mostrar todos los conceptos
        this.concepto_service.get_historialConceptos().subscribe(
            data => {
                this.lista_historial = data;
                this.display = 'none';
            },
            error => {
                this.error = error.error;
                this.display = 'none';
            }
        );
    }

    // Busca el historial de un concepto por su NOMBRE
    public filter_historialConceptos() {
        const filtro = {
            PK_LOG_CONCEPTO: this.PK_LOG_CONCEPTO,
            NOMBRE: this.nombre
        };

        this.concepto_service.filter_historialConcepto(filtro).subscribe(
            data => {
                this.lista_historial = data;
                this.modal_filterHistorialConceptos.hide();
                this._init();
                this.ini = 0;
                this.fin = 5;
            },
            error => this.error = error.error
        );
    }

    public ocultar_modal_busqueda() {
        this.modal_filterHistorialConceptos.hide();
        this._init();
    }

    public atras() {
        this.ini -= this.cantidad_por_pagina;
        this.fin -= this.cantidad_por_pagina;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    public adelante() {
        this.ini += this.cantidad_por_pagina;
        this.fin += this.cantidad_por_pagina;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    public volver() {
        history.back();
    }

    public _init() {
        this.PK_LOG_CONCEPTO = 0;
        this.nombre = '';
    }
}
