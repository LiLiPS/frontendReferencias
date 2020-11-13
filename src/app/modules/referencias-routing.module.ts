import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes
import {ConceptosComponent} from '../components/referencias/conceptos.component';
import {GruposComponent} from '../components/referencias/grupos.component';
import {HistorialConceptosComponent} from '../components/referencias/historial-conceptos.component';
import {GrupoDetalleComponent} from '../components/referencias/grupo-detalle.component';
import {AplicacionConceptoComponent} from '../components/referencias/aplicacion-concepto.component';
import {ReinscripcionComponent} from '../components/referencias/reinscripcion.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Sistema de Referencias'
        },
        children: [
            /* ************************************* *
             * ********** RUTAS DE ADMINISTRADOR ********* *
             * ************************************* */
            {
                path: 'e4ea811fdfd3f43bd4b0948734067104', // conceptos
                component: ConceptosComponent,
                data: {
                    title: 'Conceptos'
                }
            },
            {
                path: '0e2ab8a3dccc5bfb57b97e0131f80393', // grupos_referenciasEspeciales
                component: GruposComponent,
                data: {
                    title: 'Grupos'
                }
            },
            {
                path: '7e925a5dcd636d3aa490ea323a337f6f', // historialConceptos
                component: HistorialConceptosComponent,
                data: {
                    title: 'Historial de conceptos'
                }
            },
            {
                path: '73c369e11c78f47d0fd93d8bd83952d1', // grupoDetalle
                component: GrupoDetalleComponent,
                data: {
                    title: 'Detalle de grupos'
                }
            },
            {
                path: 'c0db1804fdeb3f498cfe20573d201b23', // aplicacion de conceptos
                component: AplicacionConceptoComponent,
                data: {
                    title: 'Aplicación de un concepto'
                }
            },
            {
                path: '7a3259937a28c882cd23a713d443f409', // reinscripciones
                component: ReinscripcionComponent,
                data: {
                    title: 'Reinscripciones'
                }
            },
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReferenciasRoutingModule {
}
