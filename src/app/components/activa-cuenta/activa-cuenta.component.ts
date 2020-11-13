import {Component, OnInit} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './activa-cuenta.component.html',
    styleUrls: ['./activa-cuenta.component.scss']
})
export class ActivaCuentaComponent implements OnInit {

    constructor(private Jarwis: JarwisService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    public form = {
        curp: null,
        password1: null,
        password2: null,
        clave: null,
        token: null
    };

    public error = null;
    public data = null;
    public token = null;
    public cuenta_activada = false;
    public ocultar_boton_enviar = false;

    onSubmit() {
        if (this.form.password1.trim() !== '') {
            if (this.form.password2.trim() !== '') {
                if (this.form.password1.trim().length >= 8 && this.form.password2.trim().length >= 8) {
                    if (this.form.password1.trim() === this.form.password2.trim()) {
                        // la cuenta debe activarse
                        this.Jarwis.activar_cuenta(this.form).subscribe(
                            data => this.handleResponse(data),
                            error => this.handleError(error)
                        );
                    } else {
                        // las contraseñas no coinciden
                        alert('Verifique que las contraseñas ingresadas coincidan');
                    }
                } else {
                    alert('Las contraseñas deben contener al menos 8 caracteres');
                }
            } else {
                // contraseña 2 vacía
                alert('Debe especificar las contraseñas');
            }
        } else {
            // contraseña 1 vacía
            alert('Debe especificar las contraseñas');
        }
    }

    handleResponse(data) {
        if (data.data) {
            this.cuenta_activada = true;
            this.ocultar_boton_enviar = true;
        }
    }

    handleError(error) {
        this.error = error.error.error;
        this.ocultar_boton_enviar = true;
    }

    ngOnInit() {
        this.token = this.route.snapshot.queryParamMap.get('token');

        this.form.token = this.token;

        this.Jarwis.get_datos_activacion({token: this.token}).subscribe(
            data => this.handleResponseAlumno(data),
            error => this.handleError(error)
        );
    }

    handleResponseAlumno(data) {
        this.form.curp = data.data.CURP;
    }

}
