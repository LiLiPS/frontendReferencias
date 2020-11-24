import {Component, OnDestroy, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {navItems} from './../../_nav';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {string} from '@amcharts/amcharts4/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss']
})

export class DefaultLayoutComponent implements OnDestroy, OnInit {
    public loggedIn: boolean;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement;
    public navItems = navItems;
    public mostrarModulo = false;
    public mostrarVideo = false;
    public mostrarAyuda = false;

    public tipo_usuario = sessionStorage.getItem('tipo_usuario');
    public nombre_usuario: string;
    public numero_control: string = '';

    // modal
    @ViewChild('loaderModal') loaderModal;
    public display: string;


    constructor(
        private Auth: AuthService,
        private router: Router,
        private Token: TokenService,
        @Inject(DOCUMENT) _document?: any
    ) {

        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(<Element>this.element, {
            attributes: true,
            attributeFilter: ['class']
        });

        this.display = 'none';
    }

    ngOnDestroy(): void {
        this.changes.disconnect();
    }

    ngOnInit() {
        if (sessionStorage.getItem('primer_login') == '1') {
            this.mostrarVideo = true;
        }

        if (sessionStorage.getItem('permisos') != null) {
            this.nombre_usuario = JSON.parse(sessionStorage.getItem('permisos')).nombre_usuario;
            this.numero_control = JSON.parse(sessionStorage.getItem('permisos')).numero_control;
        }

        const URLhash = window.location.hash;
        if (URLhash == '#/home') {
            this.mostrarAyuda = true;
        }
        // this.Auth.authStatus.subscribe(value => this.loggedIn = value);
        // console.log(rutasRoles);
        // navItems;
    }

    logout(event: MouseEvent) {
        this.loaderModal.show();

        event.preventDefault();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');

        this.loaderModal.hide();
    }

    recargar() {
        location.reload();
    }
}

// export const rutasRoles2 = rutas;
