import {Component, OnInit, ViewChild} from '@angular/core';
import {GruposServiceService} from '../../services/referencias/grupos-service.service';
import {InterfaceGrupo} from '../../models/referencias/GrupoModel';

@Component({
  selector: 'app-grupos',
  templateUrl: '../../views/referencias/Grupos/grupos.component.html',
  styleUrls: ['../../views/referencias/Grupos/grupos.component.scss']
})
export class GruposComponent implements OnInit {

    @ViewChild('loaderModal') loaderModal;
    @ViewChild('modal_filterGrupos') modal_filterGrupos;
    @ViewChild('modal_updateGrupos') modal_updateGrupo;
    @ViewChild('modal_create') modal_create;
    public lista_grupos: InterfaceGrupo[] = [];
    public grupo_modificacion: InterfaceGrupo;
    public display = '';
    public error = null;
    public error_actualizar = null;
    public error_eliminar = null;
    public PK_GRUPO: number;
    public NOMBRE: string;
    public cantidad_por_pagina: number;
    public ini: number;
    public fin: number;

    public grupo: InterfaceGrupo = {
        PK_GRUPO: null,
        NOMBRE: null,
        DESCRIPCION: null,
        NOTA: null
    };

    constructor(private grupo_service: GruposServiceService) {
        this._init();
        this.display = 'block';
        this.cantidad_por_pagina = 15;
        this.ini = 0;
        this.fin = this.cantidad_por_pagina;
    }

    ngOnInit() {
        this.get_grupos();
    }

    // Obtiene todos los grupos
    public get_grupos() {
        // Llama al servicio para obtener grupos
        this.grupo_service.get_grupos().subscribe(
            data => {
                this.lista_grupos = data;
                this.display = 'none';
            },
            error => {
                this.error = error.error;
                console.log(this.error);
                this.display = 'none';
            }
        );
    }

    // Busca a uno o varios grupos por NOMBRE
    public filter_grupos() {
        // Obtiene el nombre para filtrar el grupo
        const filtro = {
            PK: this.PK_GRUPO,
            NOMBRE: this.NOMBRE
        };

        // Llama al servicio que filtra los grupos
        this.grupo_service.filter_grupos(filtro).subscribe(
            data => {
                this.lista_grupos = data;
                this.ocultar_modal_busqueda();
            },
            error => {
                this.error = error.error;
                console.log(this.error);
            }
        );
    }

    public create_grupo() {
        if (this.grupo.NOMBRE !== null) {
            if (this.grupo.NOMBRE.trim() !== '') {
                if (this.grupo.DESCRIPCION !== null) {
                    if (this.grupo.DESCRIPCION.trim() !== '') {
                        this.grupo_service.create_grupo(this.grupo).subscribe(
                            data => {
                                this.modal_create.hide();
                                this.grupo = {
                                    PK_GRUPO: null,
                                    NOMBRE: null,
                                    DESCRIPCION: null,
                                    NOTA: null
                                };
                                this.ngOnInit();
                            },
                            error => {
                                this.error = error.error;
                                alert(this.error);
                            }
                        );
                    } else {
                        alert('Ingresa una descripción para el grupo.');
                    }
                } else {
                    alert('Ingresa una descripción para el grupo.');
                }
            } else {
                alert('Ingresa un nombre para el grupo.');
            }
        } else {
            alert('Ingresa un nombre para el grupo.');
        }
    }

    public load_grupo(pk_grupo) {
        // Obtiene el grupo por su PK
        const grupo = this.lista_grupos.filter(grupo => grupo.PK_GRUPO === pk_grupo);

        // Obtiene el grupo que se va a modificar
        this.grupo_modificacion = grupo[0];

        // Muestra la ventana modal para actualizar el grupo
        this.modal_updateGrupo.show();
    }

    public update_datos() {
        // Validación de datos ingresados
        if (this.grupo_modificacion.NOMBRE.trim().length > 0
            && this.grupo_modificacion.DESCRIPCION.trim().length > 0) {
            if (confirm('¿Realmente desea actualizar los datos del grupo?')) {
                this.PK_GRUPO = this.grupo_modificacion.PK_GRUPO;
                this.error_actualizar = null;

                // Obtiene los campos en los inputs para modificar
                const body = {
                    NOMBRE: this.grupo_modificacion.NOMBRE,
                    DESCRIPCION: this.grupo_modificacion.DESCRIPCION,
                    NOTA: this.grupo_modificacion.NOTA
                };

                // Llama al servicio de actualizar
                this.grupo_service.update_grupo(this.PK_GRUPO, body).subscribe(
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
            alert('Ingrese los datos para el grupo.');
        }
    }

    public delete_grupo(pk_grupo) {
        if (confirm('¿Realmente desea dar de baja al grupo?')) {
            this.error_eliminar = null;

            this.grupo_service.delete_grupo(pk_grupo).subscribe(
                () => {
                    this.get_grupos();
                },
                error => {
                    this.error_eliminar = error.error;
                    console.log(this.error_eliminar);
                }
            );
        }
    }

    public _init() {
        this.PK_GRUPO = 0;
        this.NOMBRE = '';
    }

    public ocultar_modal_busqueda() {
        this.modal_filterGrupos.hide();
        this._init();
        this.ini = 0;
        this.fin = this.cantidad_por_pagina;
    }

    public ocultar_modal_modificar() {
        this.modal_updateGrupo.hide();
        this.grupo_modificacion = null;
    }

    public ocultar_modal_crear() {
        this.modal_create.hide();
        this.grupo = {
            PK_GRUPO: null,
            NOMBRE: null,
            DESCRIPCION: null,
            NOTA: null
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
}
