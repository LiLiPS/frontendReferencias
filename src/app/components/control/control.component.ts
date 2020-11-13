import {Component, OnInit} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
    public form = {
        control: null
    };

    public error = null;
    public data = null;

    constructor(private Jarwis: JarwisService,
                // private Token : TokenService,
                private router: Router
    ) {

    }

    /*   handleResponse(data){
        this.data=data.data;
        localStorage.setItem("nombre", this.data);
        this.router.navigateByUrl('/create-password');
      } */

    onSubmit() {
        this.Jarwis.control(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.data = data.data;
        localStorage.setItem('datos_alumno', JSON.stringify(this.data));
        this.router.navigateByUrl('/create-password');
    }

    handleError(error) {
        this.error = error.error.error;
    }

    ngOnInit() {
        localStorage.removeItem('datos_alumno');
    }
}
