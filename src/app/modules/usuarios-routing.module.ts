import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PerfilComponent} from '../components/usuarios/perfil.component';
import {PerfilDocenteComponent} from '../components/usuarios/perfil-docente.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Sistema de Administración de Usuarios'
        },
        children: [
            {
                path: '1265530aa9b88c9ede2fd25bacf1001e', // perfil_alumno
                component: PerfilComponent,
                data: {
                    title: 'Usuarios'
                }
            },
            {
                path: 'c67214e3855338c12a68dfa2c87eb47f', // perfil_empleado
                component: PerfilDocenteComponent,
                data: {
                    title: 'Usuarios'
                }
            },
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {
}
