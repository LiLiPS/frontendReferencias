import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
import {AppComponent} from './app.component';
// Import containers
import {DefaultLayoutComponent} from './containers';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
const APP_CONTAINERS = [
    DefaultLayoutComponent
];
import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';
// Import routing module
import {AppRoutingModule} from './app.routing';
// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {SistemsComponent} from './sistems/sistems.component';
import {ChartsModule} from 'ng2-charts';
// login
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { ProfileComponent } from './components/profile/profile.component';
import {P500Component} from '../app/components/error/500.component';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {JarwisService} from './services/jarwis.service';
import {TokenService} from './services/token.service';
import {AuthService} from './services/auth.service';
import {AfterLoginService} from './services/after-login.service';
import {BeforeLoginService} from './services/before-login.service';
// @ts-ignore
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ControlComponent} from './components/control/control.component';
import {StudentOldComponent} from './components/student-old/student-old.component';
import {NavbarSistemsComponent} from './components/navbar-sistems/navbar-sistems.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ActivaCuentaComponent} from './components/activa-cuenta/activa-cuenta.component';
import {LoaderModule} from './components/loader/loader.module';
import {NgxPaginationModule} from 'ngx-pagination';
// ventanas modales
import {ModalModule} from 'ngx-bootstrap';
import {CollapseModule, TooltipModule} from 'ngx-bootstrap';
import {ReferenciaExternoComponent} from './components/referencias/referencia-externo.component';

@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        TabsModule.forRoot(),
        ChartsModule,
        FormsModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        ReactiveFormsModule,
        AppRoutingModule,
        NgxPaginationModule,
        CollapseModule,
        TooltipModule.forRoot(),
        LoaderModule,
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        P500Component,
        LoginComponent,
        RegisterComponent,
        RequestResetComponent,
        ResponseResetComponent,
        SistemsComponent,
        ControlComponent,
        StudentOldComponent,
        NavbarSistemsComponent,
        ActivaCuentaComponent,
        ReferenciaExternoComponent,
    ],
    exports: [
        ModalModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        JarwisService,
        TokenService,
        AuthService,
        AfterLoginService,
        BeforeLoginService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}
