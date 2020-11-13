import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioRolesService} from '../../services/usuraio-roles.service';
import {SistemaPermisosService} from '../../services/sistema-permisos.service';

var rutasRoles = [];

@Component({
    selector: 'app-navbar-sistems',
    templateUrl: './navbar-sistems.component.html',
    styleUrls: ['./navbar-sistems.component.scss'],
    providers: [UsuarioRolesService,
        SistemaPermisosService]
})


export class NavbarSistemsComponent implements OnInit {
    public usuarioSistemasLista = [];
    redirigirAspirante: boolean;

    @ViewChild('loaderModal') loaderModal;

    constructor(private usuarioRolesService: UsuarioRolesService,
                private sistemaPermisosService: SistemaPermisosService,
                private router: Router) {
    }

    ngOnInit() {
        this.usuarioSistemasLista.push({
            PK_SISTEMA: 1,
            NOMBRE: 'Referencias'
        });
        //this.mostrarRoles('Referencias', 'Referencias');
    }

    mostrarRoles(sistemaSelect, nombreSistema) {
        nombreSistema = 'Referencias';
        this.loaderModal.show();
        this.router.navigateByUrl('/home');

            sessionStorage.setItem('sistema', 'referencias');
            
                var rutasModulos = [];

                rutasModulos.push({
                    name: 'conceptos',
                    url: '/referencias/e4ea811fdfd3f43bd4b0948734067104',
                    icon: 'icon-arrow-right'
                });

                rutasRoles.push({
                    name: 'administrador',
                    icon: 'icon-user',
                    children: rutasModulos
                });

                sessionStorage['rutas'] = JSON.stringify(rutasRoles);
                // console.log(nombreSistema);
                switch (nombreSistema) {
                    case 'Referencias':
                        this.router.navigateByUrl('/referencias');
                        break;
                }

        this.loaderModal.hide();
    }
}

export const rutasNav = rutasRoles;
