import {Component, OnInit, ViewChild} from '@angular/core';
import {InterfacePerfil} from '../../models/usuarios/PerfilModel';
import {InterfaceAreaAcademica, InterfaceDatosCodigoPostal, InterfaceEstadoCivil} from '../../views/_models/GeneralModels';
import {ActivatedRoute, Router} from '@angular/router';
import {PerfilService} from '../../services/perfil.service';
import {AreaAcademicaServiceService} from '../../services/area-academica-service.service';

@Component({
    selector: 'app-perfil-docente',
    templateUrl: '../../views/usuarios/perfil-docente.component.html',
    styleUrls: ['../../views/usuarios/perfil-docente.component.scss']
})
export class PerfilDocenteComponent implements OnInit {

    public error = null;
    public data = null;

    public perfil: InterfacePerfil = null;
    public estados_civiles: InterfaceEstadoCivil[] = [];
    public datos_codigo_postal: InterfaceDatosCodigoPostal = null;
    public areas_academicas: InterfaceAreaAcademica[] = [];

    public pk_usuario = sessionStorage.getItem('IdEncriptada');

    // Datos de formulario
    public form = {
        PK_USUARIO: 0,
        FECHA_NACIMIENTO: '',
        CODIGO_POSTAL: '',
        SEXO: 0,
        ESTADO_CIVIL: 0,
        SITUACION_RESIDENCIA: 0,
        CORREO1: '',
        CORREO2: '',
        TELEFONO_CASA: '',
        TELEFONO_MOVIL: '',
        COLONIA: 0,
        CALLE: '',
        NUMERO_EXTERIOR: '',
        NUMERO_INTERIOR: '',
        NOMBRE_CONTACTO: '',
        PARENTESCO_CONTACTO: '',
        TELEFONO_CONTACTO: '',
        CORREO_CONTACTO: '',
        CORREO_INSTITUCIONAL: '',
        AREA_ACADEMICA: 0
    };

    @ViewChild('loaderModal') loaderModal;
    public display: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private perfil_service: PerfilService,
        private area_academica_service: AreaAcademicaServiceService
    ) {
        this.perfil = <InterfacePerfil> {};
        this.estados_civiles = [];
        this.areas_academicas = [];
        this.datos_codigo_postal = <InterfaceDatosCodigoPostal>{};
        this.datos_codigo_postal.COLONIAS = [];
        this.display = 'none';
    }

    async ngOnInit() {
        this.display = 'block';

        const data_perfil = await this.perfil_service.get_perfil(this.pk_usuario);
        if (data_perfil) {
            this.perfil = <InterfacePerfil>data_perfil;
        }

        const data_estados_civiles = await this.perfil_service.get_estados_civiles();
        if (data_estados_civiles) {
            this.estados_civiles = <InterfaceEstadoCivil[]>data_estados_civiles;
        }

        this.area_academica_service.get_areas_academicas().subscribe(
            data => this.handleResponseAreas(data),
            error => this.handleError(error)
        );

        this.form.PK_USUARIO = this.perfil.PK_USUARIO;
        this.form.SEXO = (this.perfil.SEXO) ? this.perfil.SEXO : 0;
        this.form.ESTADO_CIVIL = (this.perfil.FK_ESTADO_CIVIL) ? this.perfil.FK_ESTADO_CIVIL : 0;
        this.form.SITUACION_RESIDENCIA = (this.perfil.FK_SITUACION_RESIDENCIA) ? this.perfil.FK_SITUACION_RESIDENCIA : 0;
        this.form.COLONIA = (this.perfil.FK_COLONIA) ? this.perfil.FK_COLONIA : 0;
        this.form.AREA_ACADEMICA = (this.perfil.FK_AREA_ACADEMICA) ? this.perfil.FK_AREA_ACADEMICA : 0;

        this.form.FECHA_NACIMIENTO = (this.perfil.FECHA_NACIMIENTO)
            ? this.perfil.FECHA_NACIMIENTO : '';
        this.form.CODIGO_POSTAL = (this.perfil.CODIGO_POSTAL)
            ? this.perfil.CODIGO_POSTAL : '';
        this.form.CORREO1 = (this.perfil.CORREO1)
            ? this.perfil.CORREO1 : '';
        this.form.CORREO2 = (this.perfil.CORREO2)
            ? this.perfil.CORREO2 : '';
        this.form.CORREO_INSTITUCIONAL = (this.perfil.CORREO_INSTITUCIONAL)
            ? this.perfil.CORREO_INSTITUCIONAL : '';
        this.form.TELEFONO_CASA = (this.perfil.TELEFONO_CASA)
            ? this.perfil.TELEFONO_CASA : '';
        this.form.TELEFONO_MOVIL = (this.perfil.TELEFONO_MOVIL)
            ? this.perfil.TELEFONO_MOVIL : '';
        this.form.CALLE = (this.perfil.CALLE)
            ? this.perfil.CALLE : '';
        this.form.NUMERO_EXTERIOR = (this.perfil.NUMERO_EXTERIOR)
            ? this.perfil.NUMERO_EXTERIOR : '';
        this.form.NUMERO_INTERIOR = (this.perfil.NUMERO_INTERIOR)
            ? this.perfil.NUMERO_INTERIOR : '';
        this.form.NOMBRE_CONTACTO = (this.perfil.NOMBRE_CONTACTO)
            ? this.perfil.NOMBRE_CONTACTO : '';
        this.form.PARENTESCO_CONTACTO = (this.perfil.PARENTESCO_CONTACTO)
            ? this.perfil.PARENTESCO_CONTACTO : '';
        this.form.TELEFONO_CONTACTO = (this.perfil.TELEFONO_CONTACTO)
            ? this.perfil.TELEFONO_CONTACTO : '';
        this.form.CORREO_CONTACTO = (this.perfil.CORREO_CONTACTO)
            ? this.perfil.CORREO_CONTACTO : '';

        // CARGAR COLONIA
        this.procesa_codigo_postal();

        this.display = 'none';
    }

    handleResponseAreas(data) {
        this.areas_academicas = data.data;
    }

    onSubmit() {
        this.display = 'block';

        if (this.valida_perfil()) {
            this.perfil_service.guardar_perfil(this.form).subscribe(
                data => this.handleResponse(data),
                error => this.handleError(error)
            );
        }

        this.display = 'none';
    }

    valida_perfil() {
        if (this.form.AREA_ACADEMICA == 0) {
            alert('Indica el área académica');
            return false;
        }
        if (this.form.CORREO_INSTITUCIONAL.trim() == '') {
            alert('Indica el correo institucional');
            return false;
        }
        if (this.form.FECHA_NACIMIENTO.toString() == '') {
            alert('Indica la fecha de nacimiento');
            return false;
        }
        if (this.form.SEXO == 0) {
            alert('Indica el sexo');
            return false;
        }
        if (this.form.ESTADO_CIVIL == 0) {
            alert('Indica el estado civil');
            return false;
        }
        if (this.form.CORREO1.trim() == '') {
            alert('Indica el correo principal');
            return false;
        }
        if (this.form.TELEFONO_CASA.trim() == '') {
            alert('Indica el teléfono de casa');
            return false;
        }
        if (this.form.TELEFONO_MOVIL.trim() == '') {
            alert('Indica el teléfono móvil');
            return false;
        }
        if (this.form.CODIGO_POSTAL.trim() == '') {
            alert('Indica el código postal');
            return false;
        }
        if (this.form.COLONIA == 0) {
            alert('Indica la colonia');
            return false;
        }
        if (this.form.CALLE.trim() == '') {
            alert('Indica la calle');
            return false;
        }
        if (this.form.NUMERO_EXTERIOR.trim() == '') {
            alert('Indica el número exterior');
            return false;
        }
        if (this.form.NOMBRE_CONTACTO.trim() == '') {
            alert('Indica el nombre del contacto en caso de emergencia');
            return false;
        }
        if (this.form.PARENTESCO_CONTACTO.trim() == '') {
            alert('Indica el parentesco del contacto en caso de emergencia');
            return false;
        }
        if (this.form.TELEFONO_CONTACTO.trim() == '') {
            alert('Indica el número de teléfono de contacto en caso de emergencia');
            return false;
        }
        if (this.form.CORREO_CONTACTO.trim() == '') {
            alert('Indica el correo electrónico de contacto en caso de emergencia');
            return false;
        }

        return true;
    }

    handleResponse(data) {
        // localStorage.setItem('datos_alumno', JSON.stringify(this.data));
        if (data == true) {
            sessionStorage.setItem('perfil_completo', '1');
            alert('Se han actualizado los datos con éxito');
            this.router.navigateByUrl('/home');
        }
    }

    handleError(error) {
        alert('Ha ocurrido un error, inténtalo de nuevo');
    }

    volver() {
        history.back();
    }

    valida_codigo_postal() {
        if (this.form.CODIGO_POSTAL.toString().length > 0) {
            let codigo_postal = this.form.CODIGO_POSTAL.toString().trim();

            if (codigo_postal.length > 3) {
                if (codigo_postal.length > 5) {
                    this.form.CODIGO_POSTAL = codigo_postal.substr(0, 5);
                }

                return true;
            }
            this.datos_codigo_postal = <InterfaceDatosCodigoPostal>{};
            return false;
        } else {
            this.datos_codigo_postal = <InterfaceDatosCodigoPostal>{};
        }
    }

    async procesa_codigo_postal() {
        if (this.valida_codigo_postal()) {
            const data_codigo_postal = await this.perfil_service.procesa_codigo_postal(this.form.CODIGO_POSTAL.toString().trim());

            this.datos_codigo_postal = <InterfaceDatosCodigoPostal>data_codigo_postal;
        }
    }

    actualiza_foto(evt: any) {
        if (confirm('¿Está seguro que desea actualizar la foto la perfil?')) {
            const archivo: File = evt.target.files[0];
            if (!archivo) {
                alert('Seleccione la foto de perfil');
                return;
            }

            this.loaderModal.show();
            const myReader: FileReader = new FileReader();
            myReader.onloadend = async (e) => {
                const body  = {
                    'PK_ENCRIPTADA':  sessionStorage.getItem('IdEncriptada'),
                    'NOMBRE_ARCHIVO': archivo.name.split('.').shift(),
                    'EXTENSION':      archivo.name.split('.').pop(),
                    'CONTENIDO':      myReader.result
                };

                this.perfil_service.cambia_foto(body).subscribe(
                    data => {
                        this.perfil.FOTO_PERFIL = data + '';
                    },
                    error => { }
                );
            };
            myReader.readAsDataURL(archivo);

            this.loaderModal.hide();
        }
    }
}
