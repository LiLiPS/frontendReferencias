import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InterfaceGrupo, InterfaceGrupoDetalle, InterfaceUsuario} from '../../models/referencias/GrupoModel';
import {GruposServiceService} from '../../services/referencias/grupos-service.service';
import {GrupoDetalleService} from '../../services/referencias/grupo-detalle.service';

@Component({
  selector: 'app-grupo-detalle',
  templateUrl: '../../views/referencias/GrupoDetalle/grupo-detalle.component.html',
  styleUrls: ['../../views/referencias/GrupoDetalle/grupo-detalle.component.scss']
})
export class GrupoDetalleComponent implements OnInit {
    // Datos de configuracion
    @ViewChild('loaderModal') loaderModal;
    public display = '';
    public error = null;

    // Datos propios del componente
    public detalle_grupo: any;
    public grupo: InterfaceGrupo;
    public numero_control: string;
    public estudiante_busqueda: InterfaceUsuario = null;

    constructor(private route: ActivatedRoute,
                private grupo_service: GruposServiceService,
                private detalle_service: GrupoDetalleService) {
        this.display = 'block';
    }

    ngOnInit() {
        this._init();

        if (this.route.snapshot.queryParamMap.get('clave_grupo') !== '') {
            // Busca el grupo
            this.buscar_grupo(parseInt(this.route.snapshot.queryParamMap.get('clave_grupo'), null));
            // Busca el detalle del grupo
            this.buscar_detalle(parseInt(this.route.snapshot.queryParamMap.get('clave_grupo'), null));
        }
    }

    // Sale error en consola ya que no tiene el grupo al inicio
    public buscar_grupo(pk: number) {
        this.grupo_service.get_grupo_by_id(pk).subscribe(
            data => {
                this.grupo = data;
            },
            error => {
                this.error = error.error.error;
            }
        );
    }

    public buscar_detalle(pk: number) {
        this.detalle_service.get_detalle(pk).subscribe(
            data => {
                this.detalle_grupo = data;
                this.display = 'none';
            },
            error => {
                this.error = error.error.error;
            }
        );
    }

    public buscar_estudiante() {
        if (this.numero_control.trim().length > 0) {
            // Buscar por numero de control
            this.get_estudiante();
        } else {
            alert('Ingresa el número de control.');
        }
    }

    public get_estudiante() {
        this.detalle_service.get_estudiante(this.numero_control).subscribe(
            data => {
                if (data !== undefined) {
                    this.estudiante_busqueda = data;
                } else {
                    this.estudiante_busqueda = null;
                    alert('No se encontró un estudiante con el número de control ' + this.numero_control);
                }
            },
            error => {
                this.error = error.error.error;
            },
            () => {
                this.display = 'none';
            }
        );
    }

    public agregar_estudiante(FK_USUARIO: number, FK_GRUPO: number) {
        const body = {
          FK_USUARIO: FK_USUARIO,
          FK_GRUPO: FK_GRUPO
        };

        this.detalle_service.agregar_estudiante(body).subscribe(
            (result) => {
                this.display = 'block';
            },
            (error) => {
                alert('Ha ocurrido un error.');
            },
            () => {
                this.display = 'none';
                this.estudiante_busqueda = null;
                this.ngOnInit();
            }
        );
    }

    public eliminar_estudiante(pk) {
        if (confirm('¿Está seguro de eliminar al estudiante?')) {
            this.display = 'block';
            this.detalle_service.eliminar_estudiante(pk).subscribe(
                () => {},
                () => {
                    alert('Ha ocurrido un error.');
                },
                () => {
                    this.display = 'none';
                    this.ngOnInit();
                }
            );
        }
    }

    public volver() {
        history.back();
    }

    private _init() {
        this.detalle_grupo = [];
        this.numero_control = '';
    }
}
