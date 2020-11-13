export interface InterfaceGrupo {
    PK_GRUPO:               number;
    NOMBRE:                 string;
    DESCRIPCION:            string;
    NOTA?:                  string;
    DETALLE?:               InterfaceGrupoDetalle[];
}

export interface InterfaceGrupoDetalle {
    PK_GRUPO_DETALLE:       number;
    FK_GRUPO:               number;
    FK_USUARIO:             number;

    ESTUDIANTE:             InterfaceUsuario;
    NOMBRE_GRUPO?:          string;
}

export interface InterfaceUsuario {
    PK_USUARIO:             number;

    NOMBRE_USUARIO:         string;
    PRIMER_APELLIDO:        string;
    SEGUNDO_APELLIDO?:      string;
    NUMERO_CONTROL:         string;
    SEMESTRE?:              number;
    NOMBRE_CARRERA?:        string;
}
