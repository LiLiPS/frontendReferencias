export interface InterfaceReferencia {
    PK_REFERENCIA:          number;
    FK_USUARIO:             number;
    NOMBRE_USUARIO?:        string;
    PRIMER_APELLIDO?:       string;
    SEGUNDO_APELLIDO?:      string;
    FK_CONCEPTO:            number;
    NOMBRE_CONCEPTO?:       string;
    FECHA_GENERADA:         string;
    FECHA_EXPIRACION:       string;
    ESTATUS_REFERENCIA:     number;
    MONTO:                  number;
    NUMERO_REF_BANCO:       string;
    FECHA_PAGO?:            string;
    TIPO_PAGO?:             string;
    CANTIDAD_SOLICITADA:    number;
    MONTO_SISTEMA:          number;
    MONTO_PAGADO?:          number;
    FOLIO_CONTPAQ:          string;
}
