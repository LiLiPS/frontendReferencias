import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';


import {P404Component} from './components/error/404.component';
import {P500Component} from './components/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';

import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {BeforeLoginService} from './services/before-login.service';
import {AfterLoginService} from './services/after-login.service';
// import { EgresadosComponent } from './views/egresados/egresados.component';
import {ControlComponent} from './components/control/control.component';
import {StudentOldComponent} from './components/student-old/student-old.component';

import {ActivaCuentaComponent} from './components/activa-cuenta/activa-cuenta.component';

import {ReferenciaExternoComponent} from './components/referencias/referencia-externo.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full',
        canActivate: [BeforeLoginService],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '500',
        component: P500Component,
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'get-password',
        component: ControlComponent,
        canActivate: [BeforeLoginService],
        data: {
            title: 'Obtener contraseña'
        }
    },
    {
        path: 'activa-cuenta',
        component: ActivaCuentaComponent,
        canActivate: [BeforeLoginService],
        data: {
            title: 'Activar cuenta'
        }
    },
    {
        path: 'create-password',
        component: StudentOldComponent,
        canActivate: [BeforeLoginService],
        data: {
            title: 'Obtener contraseña'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [BeforeLoginService],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [BeforeLoginService],
        data: {
            title: 'Register Page'
        }
    },
    {
        path: 'home',
        component: DefaultLayoutComponent,
        canActivate: [AfterLoginService],
        data: {
            title: 'Home'
        }
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        //canActivate: [AfterLoginService],
        data: {
            title: 'Sistemas'
        },
        children: [
            {
                path: 'referencias',
                loadChildren: './modules/referencias.module#ReferenciasModule'
            }
        ]
    },
    {
        path: 'request-password-reset',
        component: RequestResetComponent,
        canActivate: [BeforeLoginService],
    },
    {
        path: 'response-password-reset',
        component: ResponseResetComponent,
        canActivate: [BeforeLoginService],
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
