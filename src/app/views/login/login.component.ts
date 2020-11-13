import {Component, OnInit, ViewChild} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UsuarioRolesService} from '../../services/usuraio-roles.service';
// import { navItems } from './../../_nav';
// import {showSystem} from '../../components/navbar-sistems/navbar-sistems.component';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html',
    providers: [UsuarioRolesService]
})
export class LoginComponent implements OnInit {

    // public navItems;
    public form = {
        curp: null,
        password: null
    };

    public error = null;
    public data = null;
    public display = 'block';

    @ViewChild('loaderModal') loaderModal;

    constructor(private Jarwis: JarwisService,
                private Token: TokenService,
                private router: Router,
                private Auth: AuthService,
                private usuarioRolesService: UsuarioRolesService
    ) {}

    onSubmit() {
        this.loaderModal.show();

        this.form.curp = this.form.curp.toUpperCase();
        this.Jarwis.login(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );

        this.loaderModal.hide();
    }

    handleResponse(data) {
        this.Token.handle(data.access_token);
        this.Auth.changeAuthStatus(true);
        // NO MODIFICAR
        sessionStorage.setItem('IdUsuario', data.IdUsuario);
        sessionStorage.setItem('control', data.control);
        sessionStorage.setItem('perfil_completo', data.perfil_completo);
        sessionStorage.setItem('primer_login', data.primer_login);
        sessionStorage.setItem('IdEncriptada', data.IdEncriptada);
        sessionStorage.setItem('tipo_usuario', data.tipo_usuario);
        // NO MODIFICAR
        this.usuarioRolesService.getUsuarioRoles().subscribe(data => {
            sessionStorage.setItem('sistemas', JSON.stringify(data));
            this.router.navigateByUrl('/home');
            // agregar el json de sistemas para empezar a comparar
        });

        // NO MODIFICAR (PERMISOS SOBRE SISTEMAS)
        this.usuarioRolesService.get_permisos_tutorias().subscribe(data => {
            sessionStorage.setItem('permisos', JSON.stringify(data));
            this.router.navigateByUrl('/home');
        });

    }

    handleError(error) {
        this.error = error.error.error;
    }

    ngOnInit() {
        if (sessionStorage.getItem('rutas')) {
            sessionStorage.clear();
            localStorage.clear();
            console.clear();
            location.reload();
        }

        this.display = 'none';
    }
}
