export interface InterfaceConcepto {
    PK_CONCEPTO:            number;
    FK_AREA_ACADEMICA:      number;
    NOMBRE_AREA_ACADEMICA?: string;
    FK_VALE?:               number;
    NOMBRE:                 string;
    DESCRIPCION:            string;
    MONTO?:                 number;
    ES_MONTO_VARIABLE:      boolean;
    ES_CANTIDAD_VARIABLE:   boolean;
    CLAVE_CONTPAQ:          string;
    ESTATUS:                boolean;
    CLAVE_CONTPAQ_TECNM:    string;
    GENERA_DOCUMENTO:       boolean;
}
