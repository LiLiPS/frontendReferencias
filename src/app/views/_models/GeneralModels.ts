export interface InterfaceEstadoCivil {
    PK_ESTADO_CIVIL: number;
    NOMBRE:          string;
    ABREVIATURA:     string;
}

export interface InterfaceSituacionResidencia {
    PK_SITUACION_RESIDENCIA: number;
    NOMBRE:                  string;
}

export interface InterfaceDatosCodigoPostal {
    PK_PAIS:                   number;
    NOMRBE_PAIS:               string;
    PK_ENTIDAD_FEDERATIVA:     number;
    NOMBRE_ENTIDAD_FEDERATIVA: number;
    PK_CIUDAD:                 number;
    NOMBRE_CIUDAD:             number;
    PK_CODIGO_POSTAL:          number;
    CODIGO_POSTAL:             number;
    COLONIAS?:                  InterfaceColonias[];
}

export interface InterfaceColonias {
    PK_COLONIA:            number;
    FK_TIPO_ASENTAMIENTO?: number;
    NOMBRE:                string;
    ALIAS?:                string;
    ABREVIATURA?:          string;
}

export interface InterfaceAreaAcademica {
    PK_AREA_ACADEMICA: number;
    PK_ENCRIPTADA:     string;
    NOMBRE:            string;
}

export interface InterfacePersona {
    PK_USUARIO:       number;
    PK_ENCRIPTADA:    string;
    NOMBRE:           string;
    PRIMER_APELLIDO:  string;
    SEGUNDO_APELLIDO: string;
    NUMERO_CONTROL:   string;
}

export interface InterfaceSeguimiento {
    CLAVE_MATERIA:  string;
    NOMBRE_MATERIA: string;
    TIPO_CURSO:     string;
    CALIFICACION:   number;
    FECHA_PRIMERA:  string;
    FECHA_SEGUNDA:  string;
    FECHA_TERCERA:  string;
    PERIODO:        string;
    PERIODO_TEXTO:  string;
}
