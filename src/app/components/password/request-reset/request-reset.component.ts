import {Component, OnInit} from '@angular/core';
import {JarwisService} from '../../../services/jarwis.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './request-reset.component.html',
})
export class RequestResetComponent implements OnInit {
    public form = {
        CURP: null
    };

    public error = null;
    public envio_correcto = false;
    public mostrar_botones = true;

    constructor(private Jarvis: JarwisService) {
    }

    onSubmit() {
        this.envio_correcto = false;
        this.mostrar_botones = false;
        this.error = null;
        this.Jarvis.recuperarContrasena(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
        //localStorage.setItem("CURP", this.form.CURP);
    }

    handleResponse(data) {
        //this.Notfiy.success(res.data,{timeout:0});
        this.form.CURP = null;
        this.envio_correcto = true;
        this.mostrar_botones = true;
    }

    handleError(error) {
        this.error = error.error.error;
        this.mostrar_botones = true;
    }

    ngOnInit() {}


}
