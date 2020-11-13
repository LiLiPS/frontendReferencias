import {Component, OnInit, ViewChild} from '@angular/core';
import {ReinscripcionService} from '../../services/referencias/reinscripcion.service';
import {InterfaceReferencia} from '../../models/referencias/ReferenciaModel';

@Component({
  selector: 'app-reinscripcion',
  templateUrl: '../../views/referencias/Reinscripciones/reinscripcion.component.html',
  styleUrls: ['../../views/referencias/Reinscripciones/reinscripcion.component.scss']
})
export class ReinscripcionComponent implements OnInit {

    @ViewChild('loaderModal') loaderModal;
    public display = '';
    public estatus_reinscripciones = null;
    public referencia: InterfaceReferencia = {
        PK_REFERENCIA: null,
        FK_USUARIO: null,
        NOMBRE_USUARIO: null,
        PRIMER_APELLIDO: null,
        SEGUNDO_APELLIDO: null,
        FK_CONCEPTO: null,
        NOMBRE_CONCEPTO: null,
        FECHA_GENERADA: null,
        FECHA_EXPIRACION: null,
        ESTATUS_REFERENCIA: null,
        MONTO: null,
        NUMERO_REF_BANCO: null,
        FECHA_PAGO: null,
        TIPO_PAGO: null,
        CANTIDAD_SOLICITADA: null,
        MONTO_SISTEMA: null,
        MONTO_PAGADO: null,
        FOLIO_CONTPAQ: null
    };
    public error_referencia = null;
    public error_creacion = null;

    constructor(private reinscripcionService: ReinscripcionService) {
        this.display = 'block';
    }

    ngOnInit() {
        this.reinscripcionService.es_periodo().subscribe(
            data => {
                console.log(data);
                if (data) {
                    this.estatus_reinscripciones = true;
                    // Revisar si ya tiene una referencia con el concepto de reinscripción
                    this.checarReinscripcion();
                } else {
                    this.display = 'none';
                    this.estatus_reinscripciones = false;
                }
            },
            error => {
                this.display = 'none';
                alert('Ha ocurrido un error.');
            }
        );
    }

    // Revisar si ya tiene una referencia con el concepto de reinscripción
    checarReinscripcion() {
        // Llamar servicio para obtener registro de referencia
        this.reinscripcionService.get_ref_reinscripcion(parseInt(sessionStorage.getItem('IdUsuario'), null)).subscribe(
            data => {
                this.referencia = data;
                console.log('estado de referencia: ' + this.referencia.ESTATUS_REFERENCIA);
                this.display = 'none';
            },
            error => {
                this.error_referencia = error.error;
                this.crearRefReinscripcion();
                this.display = 'none';
            }
        );
    }

    crearRefReinscripcion() {
        this.reinscripcionService.create_ref_reinscripcion(parseInt(sessionStorage.getItem('IdUsuario'), null)).subscribe(
            () => {
                this.ngOnInit();
            },
            error => {
                this.display = 'none';
                this.error_creacion = error.error;
                alert('Ha ocurrido un error.');
            }
        );
    }
}
