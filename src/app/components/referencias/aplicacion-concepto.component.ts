import {Component, OnInit, ViewChild} from '@angular/core';
import {ConceptosServiceService} from '../../services/referencias/conceptos-service.service';
import {AplicacionConceptoService} from '../../services/referencias/aplicacion-concepto.service';
import {GruposServiceService} from '../../services/referencias/grupos-service.service';
import {NivelesService} from '../../services/referencias/niveles.service';

@Component({
    selector: 'app-conceptos',
    templateUrl: '../../views/referencias/AplicacionConcepto/aplicacion-concepto.html',
    styleUrls: ['../../views/referencias/AplicacionConcepto/aplicacion-concepto.scss']
})
export class AplicacionConceptoComponent implements OnInit {

    @ViewChild('loaderModal') loaderModal;
    @ViewChild('modal_buscar') modal_buscar;

    // declarando ventana modal de creacion de aplicaciones
    @ViewChild('modal_create') modal_create;
    public lista_aplicaciones = [];
    public lista_conceptos = [];
    //public lista_grupos = [];
    public lista_niveles = [];
    public display = '';
    public error = null;
    public filtro_concepto = '';
    public filtro_nivel = '';
    //public filtro_grupo = '';
    public select_concepto = 0;
    public select_nivel = 0;
    public estado = -1;
    //public select_reinscripcion = -1;
    public semestre = '';
    //public select_grupo = 0;
    public vigencia_inicial = '';
    public vigencia_final = '';
    public cantidad_por_pagina: number;
    public ini: number;
    public fin: number;
    public id_aplicacion: number;

    constructor(private concepto_service: ConceptosServiceService,
                private aplicacion_service: AplicacionConceptoService,
                //private grupos_service: GruposServiceService,
                private niveles_service: NivelesService) {
        this.display = 'block';
        this.cantidad_por_pagina = 15;
        this.ini = 0;
        this.fin = this.cantidad_por_pagina;
        this.id_aplicacion = 0;
    }

    ngOnInit() {
        this.get_conceptos();
        //this.get_grupos();
        this.get_niveles();
        this.get_aplicaciones();
    }

    // Obtiene todos los conceptos
    public get_conceptos() {
        // Llama al servicio para obtener conceptos
        this.concepto_service.get_conceptos().subscribe(
            data => {
                this.lista_conceptos = data;
            },
            error => {
                this.error = error.error;
                console.log(this.error);
            },
            () => {
            }
        );
    }

    // Obtiene todos los grupos
    /*public get_grupos() {
        // Llama al servicio para obtener grupos
        this.grupos_service.get_grupos().subscribe(
            data => {
                this.lista_grupos = data;
            },
            error => {
                this.error = error.error;
                console.log(this.error);
            },
            () => {
            }
        );
    }*/

    // Obtiene todos los niveles
    public get_niveles() {
        // Llama al servicio para obtener grupos
        this.niveles_service.get_niveles().subscribe(
            data => {
                this.lista_niveles = data;
            },
            error => {
                this.error = error.error;
                console.log(this.error);
            },
            () => {
            }
        );
    }

    public get_aplicaciones() {
        this.display = 'block';
        // Llama al servicio para obtener las aplicaciones
        this.aplicacion_service.consultar_aplicacion().subscribe(
            (data) => {
                // to-do bien y recibimos del web service en data
                this.lista_aplicaciones = data;
                console.log(data);
            },
            (error) => {
                // dio error y recibimos detalle en error
                alert('Error');
                console.log(error);
            },
            () => {
                // petición completa
                this.display = 'none';
            }
        );
    }

    // Busca a uno o varios conceptos por FK ÁREA ACADÉMICA y/o NOMBRE
    public filter_conceptos() {
        // Obtiene todos los filtros por el cual buscar la aplicacion
        const filtro = {
            nombre_concepto: this.filtro_concepto,
            nombre_nivel: this.filtro_nivel
            //filtro_grupo: this.filtro_grupo
        };

        // Llama al servicio que filtra a los conceptos
        this.aplicacion_service.filtrar_aplicacion(filtro).subscribe(
            data => {
                this.lista_aplicaciones = data;
                this.modal_buscar.hide();
            },
            error => {
                this.error = error.error;
                console.log(this.error);
            }
        );
    }

    // Eliminar una aplicación
    public delete_aplicacion(pk_aplicacion) {
        if (confirm('¿Realmente desea dar de baja la aplicación?')) {
            console.log(pk_aplicacion);

            this.display = 'block';

            this.aplicacion_service.eliminar_aplicacion(pk_aplicacion).subscribe(
                () => {
                    this.ngOnInit();
                },
                (error) => {
                    // dio error y recibimos detalle en error
                    alert('Error');
                    console.log(error);
                },
                () => {
                    // petición completa
                    this.display = 'none';
                }
            );
        }
    }

    //cargar una aplicación
    public load_aplicacion(pk_aplicacion) {
        console.log(pk_aplicacion);

        this.display = 'block';

        this.aplicacion_service.cargarAplicacion(pk_aplicacion).subscribe(
            (data) => {
                this.id_aplicacion = data.concepto_nivel_id;
                this.select_concepto = data.concepto_id;
                this.select_nivel = data.nivel_id;
                this.semestre = data.semestre;
                this.estado = data.estado;
                this.vigencia_inicial = data.vigencia_inicial;
                this.vigencia_final = data.vigencia_final;

                this.modal_create.show();
            },
            (error) => {
                // dio error y recibimos detalle en error
                alert('Error');
                console.log(error);
            },
            () => {
                // petición completa
                this.display = 'none';
            }
        );
    }

    public guarda_aplicacion() {
        if (this.select_concepto !== 0) {
            if (this.select_nivel !== 0) {
                if (this.vigencia_inicial !== '') {
                    if (this.vigencia_final !== '') {
                        const inicio = new Date(this.vigencia_inicial);
                        const fin = new Date(this.vigencia_final);
                        if (inicio < fin) {
                            const body = {
                                concepto_id: this.select_concepto,
                                nivel_id: this.select_nivel,
                                estatus: this.estado,
                                semestre: this.semestre,
                                vigencia_inicial: this.vigencia_inicial,
                                vigencia_final: this.vigencia_final,
                            };

                            if(this.id_aplicacion == 0){
                                this.aplicacion_service.guarda_aplicacion(body).subscribe(
                                    (data) => {
                                        // to-do bien y recibimos del web service en data
                                        console.log(data);
                                        this.ngOnInit();
                                    },
                                    (error) => {
                                        // dio error y recibimos detalle en error
                                        alert('Error');
                                        console.log(error);
                                    },
                                    () => {
                                        // petición completa
                                        this.modal_create.hide();
                                    }
                                ); // 10 seg
                            }else{
                                this.aplicacion_service.update_aplicacion(this.id_aplicacion, body).subscribe(
                                    (data) => {
                                        // to-do bien y recibimos del web service en data
                                        console.log(data);
                                        this.ngOnInit();
                                    },
                                    (error) => {
                                        // dio error y recibimos detalle en error
                                        alert('Error');
                                        console.log(error);
                                    },
                                    () => {
                                        // petición completa
                                        this.modal_create.hide();
                                    }
                                ); // 10 seg
                            }                            
                        } else {
                            alert('Introduzca correctamente las fechas de vigencia. La fecha inicial debe ser menor que la final.');
                        }
                    } else {
                        alert('Seleccione una vigencia final');
                    }
                } else {
                    alert('Seleccione una vigencia inicial');
                }
            } else {
                alert('Seleccione un nivel');
            }
        } else {
            alert('Seleccione un concepto');
        }
    }

    public ocultar_modal_busqueda() {
        this.modal_buscar.hide();
        this.ini = 0;
        this.fin = this.cantidad_por_pagina;
    }

    public ocultar_modal_crear() {
        this.id_aplicacion = 0;
        this.select_concepto = 0;
        this.select_nivel = 0;
        this.semestre = '';
        this.estado = -1;
        this.vigencia_inicial = '';
        this.vigencia_final = '';
        this.modal_create.hide();
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
}
