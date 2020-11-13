import {Component, OnInit} from '@angular/core';
import {ReferenciasExternosService} from '../../services/referencias/referencias-externos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-referencia-externo',
    templateUrl: '../../views/referencias/ReferenciasExternos/referencia-externo.component.html',
    styleUrls: ['../../views/referencias/ReferenciasExternos/referencia-externo.component.scss']
})
export class ReferenciaExternoComponent implements OnInit {

    public lista_conceptos = null;
    public formulario: FormGroup;
    public submitted: boolean; // identificar cuando se envía el formulario

    constructor(private referencia_externo_service: ReferenciasExternosService,
                private form_builder: FormBuilder) {
        this._init(); // llamada a funcion que inicializa componentes
    }

    ngOnInit() {
        // llamada a web service
        this.referencia_externo_service.get_conceptos(
            '?nivel=0'
        ).subscribe(
            result => {
                this.lista_conceptos = result.data;
            },
            error => {
                // this.error = error.error.error;
                alert('Ocurrió un error');
            },
            () => {
                // this.display = 'none';
            }
        );
    }

    onSubmit() {
        // ya se envió el formulario
        this.submitted = true;

        // ¿el formulario es válido?
        if (this.formulario.invalid) {
            return; // no es válido, detiene la ejecución
        }
        // validación de correos, concepto y cantidad

        // sí es válido, envía a web service
        console.log(this.formulario.controls);
    }

    get controls() { return this.formulario.controls; }

    private _init() {
        // inicializar variable
        this.submitted = false;

        // inicializar formulario
        this.formulario = this.form_builder.group({
            // datos personales
            'nombre': ['', [Validators.required]],
            'apellido_paterno': ['', [Validators.required]],
            'apellido_materno': ['', [Validators.required]],
            'correo': ['', [Validators.required, Validators.email]],
            'confirma_correo': ['', [Validators.required, Validators.email]],
            // datos de referencia
            'concepto': [0],
            'cantidad': [1]
        });
    }
}
