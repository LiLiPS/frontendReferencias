export interface IRoles {
  USUARIO: string;
  NOMBRE: string;
  SISTEMAS?: (SISTEMASEntity)[] | null;
}
export interface SISTEMASEntity {
  PK_SISTEMA: string;
  NOMBRE: string;
  ROLES?: (ROLESEntity)[] | null;
}
export interface ROLESEntity {
  PK_ROL: string;
  NOMBRE: string;
  MODULOS?: (MODULOSEntity)[] | null;
}
export interface MODULOSEntity {
  PK_MODULO: string;
  NOMBRE: string;
  ACCIONES?: (ACCIONESEntity)[] | null;
}
export interface ACCIONESEntity {
  PK_ACCION: string;
  NOMBRE: string;
}
