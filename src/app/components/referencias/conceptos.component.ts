import {Component, OnInit, ViewChild} from '@angular/core';
import {ConceptosServiceService} from '../../services/referencias/conceptos-service.service';
import {InterfaceConcepto} from '../../models/referencias/ConceptoModel';
import {InterfaceAreaAcademica} from '../../views/_models/GeneralModels';
import {AreaAcademicaServiceService} from '../../services/area-academica-service.service';

@Component({
    selector: 'app-conceptos',
    templateUrl: '../../views/referencias/Conceptos/conceptos.component.html',
    styleUrls: ['../../views/referencias/Conceptos/conceptos.component.scss']
})
export class ConceptosComponent implements OnInit {

    @ViewChild('loaderModal') loaderModal;
    @ViewChild('modal_filterConceptos') modal_filterConceptos;
    @ViewChild('modal_updateConceptos') modal_updateConcepto;
    @ViewChild('modal_create') modal_create;
    public lista_conceptos = [];
    public areas_academicas: InterfaceAreaAcademica[] = [];
    public concepto_modificacion = {
        concepto_id: null,
        nombre: null,
        descripcion: null,
        monto: null,
        estado: null
    };
    public display = '';
    public error = null;
    public error_actualizar = null;
    public error_eliminar = null;
    public PK_CONCEPTO: number;
    public NOMBRE: string;
    public FK_AREA_ACADEMICA: number;
    public cantidad_por_pagina: number;
    public ini: number;
    public fin: number;

    public concepto = {
        pk_concepto: null,
        nombre: null,
        descripcion: null,
        monto: null,
        estado: null
    };


    constructor(private concepto_service: ConceptosServiceService,
                private area_academica_service: AreaAcademicaServiceService) {
        this._init();
        this.display = 'block';
        this.areas_academicas = [];
        this.cantidad_por_pagina = 15;
        this.ini = 0;
        this.fin = this.cantidad_por_pagina;
    }

    ngOnInit() {
        this.get_conceptos();
    }

    // Obtiene todos los conceptos
    public get_conceptos() {
        // Llama al servicio para obtener conceptos
        this.concepto_service.get_conceptos().subscribe(
            data => {
                this.lista_conceptos = data;
                this.display = 'none';
            },
            error => {
                this.error = error.error;
                console.log(this.error);
                this.display = 'none';
            }
        );
    }

    // Busca a uno o varios conceptos por FK ÁREA ACADÉMICA y/o NOMBRE
    public filter_conceptos() {
        // Obtiene todos los filtros por el cual buscar el concepto
        const filtro = {
            PK_CONCEPTO: this.PK_CONCEPTO,
            FK_AREA_ACADEMICA: this.FK_AREA_ACADEMICA,
            nombre: this.NOMBRE
        };

        // Llama al servicio que filtra a los conceptos
        this.concepto_service.filter_conceptos(filtro).subscribe(
            data => {
                this.lista_conceptos = data;
                this.ocultar_modal_busqueda();
            },
            error => {
                this.error = error.error;
                console.log(this.error);
            }
        );
    }

    // Crea un concepto
    public create_concepto() {
        if (this.concepto.nombre !== null) {
            if (this.concepto.nombre.trim() !== '') {
                if (this.concepto.descripcion !== null) {
                    if (this.concepto.descripcion.trim() !== '') {
                        if (this.concepto.monto !== null) {
                            if (this.concepto.estado !== null) {
                                // Mandar llamar el servicio para crear el serivicio
                                this.concepto_service.create_concepto(this.concepto).subscribe(
                                    () => {
                                        this.modal_create.hide();
                                        this.concepto = {
                                            pk_concepto: null,
                                            nombre: null,
                                            descripcion: null,
                                            monto: null,
                                            estado: null
                                        };
                                        this.ngOnInit();
                                    },
                                    error => {
                                        this.error = error.error;
                                        alert('Ha ocurrido un error.');
                                    }
                                );
                            } else {
                                alert('Especifica el estado del concepto.');
                            }
                        } else {
                            alert('Ingresa un monto para el concepto.');
                        }
                    } else {
                        alert('Ingresa una descripción para el concepto.');
                    }
                } else {
                    alert('Ingresa una descripción para el concepto.');
                }
            } else {
                alert('Ingresa un nombre para el concepto.');
            }
        } else {
            alert('Ingresa un nombre para el concepto.');
        }
    }

    // Carga el concepto en la ventana modal
    public load_concepto(concepto_id) {
        // Obtiene el concepto por su PK
        const concepto = this.lista_conceptos.filter(concepto => concepto.concepto_id === concepto_id);

        // Obtiene el concepto que se va a modificar
        this.concepto_modificacion = concepto[0];

        // Muestra la ventana modal para actualizar el concepto
        this.modal_updateConcepto.show();
    }

    // Actualiza un concepto
    public update_datos() {
        // Validación de datos ingresados
        if (this.concepto_modificacion.nombre.trim().length > 0
            && this.concepto_modificacion.descripcion.trim().length > 0) {
            if (confirm('¿Realmente desea actualizar los datos del concepto?')) {
                this.PK_CONCEPTO = this.concepto_modificacion.concepto_id;
                this.error_actualizar = null;

                // Obtiene los campos en los inputs para modificar
                const body = {
                    nombre: this.concepto_modificacion.nombre,
                    descripcion: this.concepto_modificacion.descripcion,
                    monto: this.concepto_modificacion.monto,
                    estado: this.concepto_modificacion.estado
                };

                // Llama al servicio de actualizar
                this.concepto_service.update_concepto(this.PK_CONCEPTO, body).subscribe(
                    () => {
                        this.ocultar_modal_modificar();
                        this.ngOnInit();
                    },
                    error => {
                        this.error_actualizar = error.error;
                        console.log(this.error_actualizar);
                    }
                );
            }
        } else {
            alert('Ingrese los datos faltantes del concepto.');
        }
    }

    // Eliminar un concepto
    public delete_concepto(pk_concepto) {
        if (confirm('¿Realmente desea dar de baja al concepto?')) {
            this.error_eliminar = null;

            this.concepto_service.delete_concepto(pk_concepto).subscribe(
                () => {
                    this.get_conceptos();
                },
                error => {
                    this.error_eliminar = error.error;
                    console.log(this.error_eliminar);
                }
            );
        }
    }

    // Obtener áreas académicas
    handleResponseAreas(data) {
        this.areas_academicas = data.data;
    }

    // Obtener error de áreas académicas
    handleError(error) {
        alert('Ha ocurrido un error, inténtalo de nuevo.');
    }

    // Inicialización de variables
    public _init() {
        this.PK_CONCEPTO = 0;
        this.FK_AREA_ACADEMICA = 0;
        this.NOMBRE = '';
    }

    public ocultar_modal_busqueda() {
        this.modal_filterConceptos.hide();
        this._init();
    }

    public ocultar_modal_modificar() {
        this.modal_updateConcepto.hide();
        this.concepto_modificacion = null;
    }

    public ocultar_modal_crear() {
        this.modal_create.hide();
        this.concepto = {
            pk_concepto: null,
            nombre: null,
            descripcion: null,
            monto: null,
            estado: null
        };
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
}
