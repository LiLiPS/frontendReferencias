import {Component, ElementRef, OnInit} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './student-old.component.html',
    styleUrls: ['./student-old.component.scss']
})
export class StudentOldComponent implements OnInit {

    public get_datos_alumno() {
        let json = JSON.parse(localStorage.getItem('datos_alumno'));
        return json;
    }

    public get_carrera(clave_carrera: String) {
        switch (clave_carrera) {
            case 'ELX': return 'INGENIERÍA ELECTRÓNICA';
            case 'EMX': return 'INGENIERÍA ELECTROMECÁNICA';
            case 'GE9': return 'INGENIERÍA EN GESTIÓN EMPRESARIAL';
            case 'IIX': return 'INGENIERÍA INDUSTRIAL';
            case 'ISX': return 'INGENIERÍA EN SISTEMAS COMPUTACIONALES';
            case 'LOX': return 'INGENIERÍA EN LOGÍSTICA';
            case 'MCX': return 'INGENIERÍA MECATRÓNICA';
            case 'TIX': return 'INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES';
            default: return 'DOCENTE';
        }
    }

    public datos_alumno = this.get_datos_alumno();

    public registrado    = false;
    public ocultar_boton_enviar = false;
    public ocultar_boton_cancelar = false;
    public error = false;

    public form = {
        email: null,
        // name:null,
        NUMERO_CONTROL: this.datos_alumno.numero_control,
        name: this.datos_alumno.nombre,
        PRIMER_APELLIDO: this.datos_alumno.primer_apellido,
        SEGUNDO_APELLIDO: this.datos_alumno.segundo_apellido,
        CLAVE_CARRERA: this.datos_alumno.clave_carrera,
        NOMBRE_CARRERA: this.get_carrera(this.datos_alumno.clave_carrera),
        SEMESTRE: (this.datos_alumno.semestre == 0) ? "N/A" : this.datos_alumno.semestre,
        password: null,
        password_confirmation: null,
        curp: null,
        TELEFONO_FIJO: null,
        TELEFONO_MOVIL: null,
        TIPO_USUARIO: this.datos_alumno.tipo_usuario,
        // PRIMER_APELLIDO:'chavez',
        // SEGUNDO_APELLIDO:'barajas',
        /*  FECHA_NACIMIENTO:'2019-01-11',
          CURP: 'cabe960224hgthrd02',
          ESTADO:1,
          TELEFONO_CASA: '4771234567',
          TELEFONO_MOVIL: '4771234567',
          CORREO1:'14240683@itleon.edu.mx' ,
          CORREO2: '14240683@itleon.edu.mx' ,
          CORREO_INSTITUCIONAL: '14240683@itleon.edu.mx' ,
          //CONTRASENIA:'123' ,
          CALLE:'lomas',
          NUMERO_EXTERIOR: '12',
          NUMERO_INTERIOR: '2014',
          NACIONALIDAD: 'mexicana',
          SEXO: 'm',
          TIPO_SANGUINEO: 'o+',
          NSS: '1222114',
          NOMBRE_CONTACTO: 'juan',
          TELEFONO_CONTACTO: '4771234567',
          CORREO_CONTACTO: '14240683@itleon.edu.mx' ,
          FK_COLONIA:1 ,
          FK_ESTADO_CIVIL: 1 ,
          FK_USUARIO_REGISTRO: 1 ,
          FECHA_REGISTRO: '2019-01-11',
          FK_USUARIO_MODIFICACION:1 ,
          FECHA_MODIFICACION:'2019-01-11',
          BORRADO:'0' */
    };

    constructor(private Jarwis: JarwisService,
                private Token: TokenService,
                private router: Router) {
    }

    onSubmit() {
        if (this.form.curp.trim().length === 18) {
            if (confirm('Acepto que he leído y estoy de acuerdo con el aviso de privacidad')) {
                this.ocultar_boton_enviar = true;
                this.Jarwis.signup(this.form).subscribe(
                    data => this.handleResponse(data),
                    error => this.handleError(error)
                );
            }
        } else {
            alert('Vefirique su CURP');
        }
    }

    handleResponse(data) {
        if (data) {
            this.ocultar_boton_enviar = true;
            this.registrado = true;
            localStorage.clear();
        }
    }


    handleError(error) {
        this.error = error.error.error;
        this.ocultar_boton_enviar = false;
    }

    ngOnInit() {
    }

}
