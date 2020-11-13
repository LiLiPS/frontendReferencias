import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//ventanas modales
import { ModalModule } from "ngx-bootstrap/modal";

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { UsuariosRoutingModule } from './usuarios-routing.module';

// Component
import {CollapseModule, TooltipModule} from 'ngx-bootstrap';
import {PerfilComponent} from '../components/usuarios/perfil.component';
import {ErrorModule} from '../components/error/error.module';
import {LoaderModule} from '../components/loader/loader.module';
import { PerfilDocenteComponent } from '../components/usuarios/perfil-docente.component';
// Angular

@NgModule({
    imports: [
        CommonModule,
        // imports para ventanas modales
        ModalModule.forRoot(),

        UsuariosRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        CollapseModule,
        TooltipModule.forRoot(),
        // imports para ventanas modales
        LoaderModule
    ],
    declarations: [
        PerfilComponent,
        PerfilDocenteComponent
    ],
    exports: [
        // exports para ventanas modales
        ModalModule
    ]
})
export class UsuariosModule { }

