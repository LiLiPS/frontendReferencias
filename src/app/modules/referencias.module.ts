import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
// Ventanas Modales
import {ModalModule} from 'ngx-bootstrap';
// Dropdown Module
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
// Components
import {CollapseModule, TooltipModule} from 'ngx-bootstrap';
import {LoaderModule} from '../components/loader/loader.module';
import {ReferenciasRoutingModule} from './referencias-routing.module';
import {ConceptosComponent} from '../components/referencias/conceptos.component';
import {GruposComponent} from '../components/referencias/grupos.component';
import {HistorialConceptosComponent} from '../components/referencias/historial-conceptos.component';
import {GrupoDetalleComponent} from '../components/referencias/grupo-detalle.component';
import {AplicacionConceptoComponent} from '../components/referencias/aplicacion-concepto.component';
import {ReinscripcionComponent} from '../components/referencias/reinscripcion.component';

// Angular
@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot(),
        ReferenciasRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        CollapseModule,
        TooltipModule.forRoot(),
        LoaderModule
    ],
    declarations: [
        ConceptosComponent,
        HistorialConceptosComponent,
        GruposComponent,
        GrupoDetalleComponent,
        AplicacionConceptoComponent,
        ReinscripcionComponent,
    ],
    exports: [
        ModalModule
    ]
})
export class ReferenciasModule {}
