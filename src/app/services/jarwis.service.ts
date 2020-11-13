import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericServicesService } from './generic-services.service';

@Injectable({
    providedIn: 'root'
})
export class JarwisService extends GenericServicesService {
    constructor(private http: HttpClient,
        private genericServicesService: GenericServicesService) {
        super(http);
    }

    /*  private baseUrl = 'http://127.0.0.1:8000/api';*/
    private baseUrl = GenericServicesService.API_ENDPOINT;
    private headers = GenericServicesService.HEADERS;
    // private baseUrl = 'http://localhost:8000/api/';

    /*
    * Llamada a servicio para validar número de control
    * en obtención de contraseña
    * */
    control(data) {
        return this.http.post(`${this.baseUrl}control`, data, this.headers);
    }

    /*
    * Llamada a servicio para buscar datos de cuenta a activar
    * en obtención de contraseña
    * */
    get_datos_activacion(data) {
        return this.http.post(`${this.baseUrl}get_datos_activacion`, data);
    }

    /*
    * Llamada a servicio para activar cuenta
    * en obtención de contraseña
    * */
    activar_cuenta(data) {
        return this.http.post(`${this.baseUrl}activar_cuenta`, data);
    }

    /*
    * Llamada a servicio para validar el curp y registrar nuevo usuario
    * en obtención de contraseña
    * */
    signup(data) {
        return this.http.post(`${this.baseUrl}signup`, data);
    }

    /*
    * Llamada a servicio para inicio de sesión de un usuario
    * */
    login(data) {
        return this.http.post(`${this.baseUrl}login`, data);
    }

    /*
    * Llamada a servicio para obtener url y cambiar contraseña
    * */
    recuperarContrasena(data) {
        return this.http.post(`${this.baseUrl}recuperar_contrasena`, data);
    }

    changePassword(data) {
        return this.http.post(`${this.baseUrl}resetPassword`, data);
    }

 /*  control(data) {
    return this.http.post(`${this.baseUrl}control`, data)
  } */
  hora(control, dia) {
    return this.http.get(`${this.baseUrl}Hora?control=` + control + `&dia=` + dia , this.headers)
  }
  horaAll(control) {
    return this.http.get(`${this.baseUrl}HoraAll?control=` + control , this.headers)
  }
  materia(control) {
    return this.http.get(`${this.baseUrl}Materia?control=` + control , this.headers)
  }
  datos(id) {
    return this.http.get(`${this.baseUrl}Datos?id=` + id, this.headers)
  }
  promedio(control) {
    return this.http.get(`${this.baseUrl}Promedio?control=` + control, this.headers)
  }
  MateriAsesor(control) {
    return this.http.get(`${this.baseUrl}MateriAsesor?control=` + control , this.headers )
  }
  obtenerAsesor() {
    return this.http.get(`${this.baseUrl}Asesor`, this.headers)
  }
  obtenerAsesorAsigna() {
    return this.http.get(`${this.baseUrl}AsesorAsigna`, this.headers)
  }
  obtenerAsesorPeriodo(periodo) {
    return this.http.get(`${this.baseUrl}AsesorPeriodo?periodo=` + periodo , this.headers)
  }
  obtenerSolicitud() {
    return this.http.get(`${this.baseUrl}Solicitudes` , this.headers)
  }
  obtenerSolicitudAsigna() {
    return this.http.get(`${this.baseUrl}SolicitudesAsigna` , this.headers)
  }
  obtenerSolicitudPeriodo(periodo) {
    return this.http.get(`${this.baseUrl}SolicitudesPeriodo?periodo=` + periodo , this.headers)
  }
  seguimiento(control) {
    return this.http.get(`${this.baseUrl}Seguimiento?control=` + control , this.headers )
  }
  allMaterias() {
    return this.http.get(`${this.baseUrl}AllMaterias`, this.headers)
  }
  claveGrupo() {
    return this.http.get(`${this.baseUrl}ClaveGrupo`, this.headers)
  }  
  
  addclave(clavegrupo) {
    return this.http.get(`${this.baseUrl}ClaveHorario?clavegrupo=`+clavegrupo, this.headers)
  }
  getAsesoria() {
    return this.http.get(`${this.baseUrl}Asesoria`, this.headers)
  }
  getAsesoriaPeriodo(periodo) {
    return this.http.get(`${this.baseUrl}AsesoriaPeriodo?periodo=` + periodo, this.headers)
  }
  getAsesoriaGrupo() {
    return this.http.get(`${this.baseUrl}AsesoriaGrupo`, this.headers)
  }
  getAsesoriaGrupoPeriodo(periodo) {
    return this.http.get(`${this.baseUrl}AsesoriaGrupoPeriodo?periodo=` + periodo , this.headers)
  }
  asesoriaInd(idind) {
    return this.http.get(`${this.baseUrl}AsesoriaId?idind=` + idind , this.headers)
  }
  docente() {
    return this.http.get(`${this.baseUrl}Docentes`, this.headers)
  }
  nameAses(id) {
    return this.http.get(`${this.baseUrl}NameAses?id=` + id, this.headers)
  }
  asesorSesion(id) {
    return this.http.get(`${this.baseUrl}AsesorSesion?id=` + id, this.headers)
  }
  alumnoAsesoriaLista(id) {
    return this.http.get(`${this.baseUrl}AlumnosAsesoria?id=` + id, this.headers)
  }
  alumnoAsesoriaListaMateria(id,materialis) {
    return this.http.get(`${this.baseUrl}AlumnosAsesoriaMateria?id=` + id + `&materialis=` + materialis, this.headers)
  }
  obtenerSesion(id,materiafin) {
    return this.http.get(`${this.baseUrl}Sesion?id=` + id + `&materiafin=` + materiafin, this.headers)
  }
  getReprobados() {
    return this.http.get(`${this.baseUrl}Reprobados`, this.headers)
  }
  getMateriasReprobadas(selectreprobado) {
    return this.http.get(`${this.baseUrl}Recursando?selectreprobado=`+selectreprobado, this.headers)
  }
  getMateriasRecursando(clavemateriasituacion,selectreprobado) {
    return this.http.get(`${this.baseUrl}MateriaRepeticion?clavemateriasituacion=`+clavemateriasituacion+ `&selectreprobado=` + selectreprobado, this.headers)
  }
  asesorFinal() {
    return this.http.get(`${this.baseUrl}AsesorFinal` , this.headers)
  }
  asesorFinalPeriodo(a) {
    return this.http.get(`${this.baseUrl}AsesorFinalPeriodo?periodo=`+a, this.headers)
  }
  complementaria(a,b,c,d,e,f,g,h,i,j,k,l,m,n) {
    window.open(`${this.baseUrl}PdfComplementaria?destinatario=`+a+ `&suscribe=` + b+ `&estudiante=` + c+ `&control=` + d+ `&carrera=` + e
    + `&actividad=` + f+ `&desempeno=` + g+ `&valor=` + h+ `&periodo=` + i+ `&extiende=` + j+ `&nombre1=` + k+ `&cargo1=` + l
    + `&nombre2=` + m+ `&cargo2=` + n)
  }
  servicio(a,b,c,d,e,f,g,h,i,j,k) {
    window.open(`${this.baseUrl}PdfServicio?oficio=`+a+ `&asunto=` + b+ `&director=` + c+ `&atencion=` + d+ `&prestador=` + e
    + `&carreraSer=` + f+ `&controlSer=` + g+ `&periodoSer=` + h+ `&caracter=` + i+ `&diasmes=` + j+ `&atentamente=` + k)
  }
  getMotivos() {
    return this.http.get(`${this.baseUrl}TodosMotivos`, this.headers)
  }
  getMotivosPeriodo(a) {
    return this.http.get(`${this.baseUrl}MotivosPeriodo?periodo=`+a, this.headers)
  }
  getComprimisoUser() {
    return this.http.get(`${this.baseUrl}TodosCompromisoUser` , this.headers) 
  }
  getComprimisoUserPeriodo(a) {
    return this.http.get(`${this.baseUrl}CompromisoUserPeriodo?periodo1=`+a, this.headers)
  }
  getComprimisoAsesor() {
    return this.http.get(`${this.baseUrl}TodosCompromisoAsesor`, this.headers)
  }
  getComprimisoAsesorPeriodo(a) {
    return this.http.get(`${this.baseUrl}CompromisoAsesorPeriodo?periodo2=`+a, this.headers)
  }
  getEvaluacion() {
    return this.http.get(`${this.baseUrl}TodosEvaluacion`, this.headers)
  }
  getEvaluacionPeriodo(a) {
    return this.http.get(`${this.baseUrl}EvaluacionPeriodo?periodo3=`+a, this.headers)
  }
  getCalificacion() {
    return this.http.get(`${this.baseUrl}TodosCalificacion`, this.headers)
  }
  getCalificacionPeriodo(a) {
    return this.http.get(`${this.baseUrl}CalificacionPeriodo?periodo4=`+a, this.headers)
  }
  getSesiones() {
    return this.http.get(`${this.baseUrl}TodosSesiones`, this.headers)
  }
  getSesionesPeriodo(a) {
    return this.http.get(`${this.baseUrl}SesionesPeriodo?periodo5=`+a, this.headers)
  }
  getAsistencia() {
    return this.http.get(`${this.baseUrl}TodosAsistencia`, this.headers)
  }
  getAsistenciaPeriodo(a) {
    return this.http.get(`${this.baseUrl}AsistenciaPeriodo?periodo6=`+a, this.headers)
  }
  getReporteFinal() {
    return this.http.get(`${this.baseUrl}TodosReporteFinal`, this.headers)
  }
  getReporteFinalPeriodo(a) {
    return this.http.get(`${this.baseUrl}ReporteFinalPeriodo?periodo7=`+a, this.headers)
  }
  getAsignacion() {
    return this.http.get(`${this.baseUrl}TodosAsignacion`, this.headers)
  }
  getSituacionPeriodo(a) {
    return this.http.get(`${this.baseUrl}SituacionPeriodo?periodo2=`+a, this.headers)
  }
  getAsesores() {
    return this.http.get(`${this.baseUrl}TodosAsesores`, this.headers)
  }
  getAsesoresPeriodo(a) {
    return this.http.get(`${this.baseUrl}AsesoresPeriodo?periodo=`+a, this.headers)
  }
  getSesionAsesor(a) {
    return this.http.get(`${this.baseUrl}SesionAsesor?id=`+a, this.headers)
  }
  getCorreosAlumnos(a) {
    return this.http.get(`${this.baseUrl}CorreosAlumnos?id=`+a, this.headers)
  }
  getListaAlumnos(a) {
    return this.http.get(`${this.baseUrl}ListaAlumnos?id=`+a, this.headers)
  }
  getAsesorCorreo(a) {
    return this.http.get(`${this.baseUrl}CorreoAsesor?id=`+a, this.headers)
  }
  getCorreoIndAlumno() {
    return this.http.get(`${this.baseUrl}CorreoIndividualAlumno`, this.headers)
  }
  getCorreoIndAsesor() {
    return this.http.get(`${this.baseUrl}CorreoIndividualAses`, this.headers)
  }
    /* 
  solicitud(data) {
    return this.http.post(`${this.baseUrl}SolicitudAsesoria`, data)
  }
  solicitudAsesor(data) {
    return this.http.post(`${this.baseUrl}SolicitudAsesor`, data)
  }
  actualizAsesor(data) {
    return this.http.post(`${this.baseUrl}ActualizAsesor`, data)
  }
  actualizaSolicitud(data) {
    return this.http.post(`${this.baseUrl}ActualizaSolicitud`, data)
  }
  borrAsesor(data) {
    return this.http.post(`${this.baseUrl}BorrAsesor`, data)
  }
  borraSolicitud(data) {
    return this.http.post(`${this.baseUrl}BorraSolicitud`, data)
  }
  asignaIndividual(data) {
    return this.http.post(`${this.baseUrl}AsignaIndividual`, data)
  }
  asignaGrupal(data) {
    return this.http.post(`${this.baseUrl}AsignaGrupal`, data)
  }
  actualizaInd(data) {
    return this.http.post(`${this.baseUrl}ActualizaInd`, data)
  }
  borraInd(data) {
    return this.http.post(`${this.baseUrl}BorraInd`, data)
  }
  actualizaGrup(data) {
    return this.http.post(`${this.baseUrl}ActualizaGrupo`, data)
  }
  borraGrup(data) {
    return this.http.post(`${this.baseUrl}BorraGru`, data)
  }
  motivo(data) {
    return this.http.post(`${this.baseUrl}Motivo`, data)
  }
  compromisoUser(data) {
    return this.http.post(`${this.baseUrl}CompromisoUser`, data)
  }
  evaluacion(data) {
    return this.http.post(`${this.baseUrl}EvaluacionSatisfaccion`, data)
  }
  compromisoAsesor(data) {
    return this.http.post(`${this.baseUrl}CompromisoAsesor`, data)
  }
  creaSesion(data) {
    return this.http.post(`${this.baseUrl}CreaSesion`, data)
  }
  creaLista(data) {
    return this.http.post(`${this.baseUrl}CreaLista`, data)
  }
  creaFin(data) {
    return this.http.post(`${this.baseUrl}CreaFin`, data)
  }
  asignaSituacion(data) {
    return this.http.post(`${this.baseUrl}AsignaSituacion`, data)
  }
  enviarCorreo(data) {
    return this.http.post(`${this.baseUrl}EnviarCorreoPAAE`, data) 
  }
  creaCalificacion(data) {
    return this.http.post(`${this.baseUrl}CreaCalificacion`, data) 
  }
    promedio(control) {
        return this.http.get(`${this.baseUrl}Promedio?control=` + control);
    }

    MateriAsesor(control) {
        return this.http.get(`${this.baseUrl}MateriAsesor?control=` + control);
    }

    obtenerAsesor() {
        return this.http.get(`${this.baseUrl}Asesor`);
    }

    obtenerAsesorAsigna() {
        return this.http.get(`${this.baseUrl}AsesorAsigna`);
    }

    obtenerAsesorPeriodo(periodo) {
        return this.http.get(`${this.baseUrl}AsesorPeriodo?periodo=` + periodo);
    }

    obtenerSolicitud() {
        return this.http.get(`${this.baseUrl}Solicitudes`);
    }

    obtenerSolicitudAsigna() {
        return this.http.get(`${this.baseUrl}SolicitudesAsigna`);
    }

    obtenerSolicitudPeriodo(periodo) {
        return this.http.get(`${this.baseUrl}SolicitudesPeriodo?periodo=` + periodo);
    }

    seguimiento(control) {
        return this.http.get(`${this.baseUrl}Seguimiento?control=` + control);
    }

    allMaterias() {
        return this.http.get(`${this.baseUrl}AllMaterias`);
    }

    claveGrupo() {
        return this.http.get(`${this.baseUrl}ClaveGrupo`);
    }

    addclave(clavegrupo) {
        return this.http.get(`${this.baseUrl}ClaveHorario?clavegrupo=` + clavegrupo);
    }

    getAsesoria() {
        return this.http.get(`${this.baseUrl}Asesoria`);
    }

    getAsesoriaPeriodo(periodo) {
        return this.http.get(`${this.baseUrl}AsesoriaPeriodo?periodo=` + periodo);
    }

    getAsesoriaGrupo() {
        return this.http.get(`${this.baseUrl}AsesoriaGrupo`);
    }

    getAsesoriaGrupoPeriodo(periodo) {
        return this.http.get(`${this.baseUrl}AsesoriaGrupoPeriodo?periodo=` + periodo);
    }

    asesoriaInd(idind) {
        return this.http.get(`${this.baseUrl}AsesoriaId?idind=` + idind);
    }

    docente() {
        return this.http.get(`${this.baseUrl}Docentes`);
    }

    nameAses(id) {
        return this.http.get(`${this.baseUrl}NameAses?id=` + id);
    }

    asesorSesion(id) {
        return this.http.get(`${this.baseUrl}AsesorSesion?id=` + id);
    }

    alumnoAsesoriaLista(id) {
        return this.http.get(`${this.baseUrl}AlumnosAsesoria?id=` + id);
    }

    alumnoAsesoriaListaMateria(id, materialis) {
        return this.http.get(`${this.baseUrl}AlumnosAsesoriaMateria?id=` + id + `&materialis=` + materialis);
    }

    obtenerSesion(id, materiafin) {
        return this.http.get(`${this.baseUrl}Sesion?id=` + id + `&materiafin=` + materiafin);
    }

    getReprobados() {
        return this.http.get(`${this.baseUrl}Reprobados`);
    }

    getMateriasReprobadas(selectreprobado) {
        return this.http.get(`${this.baseUrl}Recursando?selectreprobado=` + selectreprobado);
    }

    getMateriasRecursando(clavemateriasituacion, selectreprobado) {
        return this.http.get(`${this.baseUrl}MateriaRepeticion?clavemateriasituacion=` + clavemateriasituacion + `&selectreprobado=` + selectreprobado);
    }

    asesorFinal() {
        return this.http.get(`${this.baseUrl}AsesorFinal`);
    }

    asesorFinalPeriodo(a) {
        return this.http.get(`${this.baseUrl}AsesorFinalPeriodo?periodo=` + a);
    }

    complementaria(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        window.open(`${this.baseUrl}PdfComplementaria?destinatario=` + a + `&suscribe=` + b + `&estudiante=` + c + `&control=` + d + `&carrera=` + e
            + `&actividad=` + f + `&desempeno=` + g + `&valor=` + h + `&periodo=` + i + `&extiende=` + j + `&nombre1=` + k + `&cargo1=` + l
            + `&nombre2=` + m + `&cargo2=` + n);
    }

    servicio(a, b, c, d, e, f, g, h, i, j, k) {
        window.open(`${this.baseUrl}PdfServicio?oficio=` + a + `&asunto=` + b + `&director=` + c + `&atencion=` + d + `&prestador=` + e
            + `&carreraSer=` + f + `&controlSer=` + g + `&periodoSer=` + h + `&caracter=` + i + `&diasmes=` + j + `&atentamente=` + k);
    }

    getMotivos() {
        return this.http.get(`${this.baseUrl}TodosMotivos`);
    }

    getMotivosPeriodo(a) {
        return this.http.get(`${this.baseUrl}MotivosPeriodo?periodo=` + a);
    }

    getComprimisoUser() {
        return this.http.get(`${this.baseUrl}TodosCompromisoUser`);
    }

    getComprimisoUserPeriodo(a) {
        return this.http.get(`${this.baseUrl}CompromisoUserPeriodo?periodo1=` + a);
    }

    getComprimisoAsesor() {
        return this.http.get(`${this.baseUrl}TodosCompromisoAsesor`);
    }

    getComprimisoAsesorPeriodo(a) {
        return this.http.get(`${this.baseUrl}CompromisoAsesorPeriodo?periodo2=` + a);
    }

    getEvaluacion() {
        return this.http.get(`${this.baseUrl}TodosEvaluacion`);
    }

    getEvaluacionPeriodo(a) {
        return this.http.get(`${this.baseUrl}EvaluacionPeriodo?periodo3=` + a);
    }

    getCalificacion() {
        return this.http.get(`${this.baseUrl}TodosCalificacion`);
    }

    getCalificacionPeriodo(a) {
        return this.http.get(`${this.baseUrl}CalificacionPeriodo?periodo4=` + a);
    }

    getSesiones() {
        return this.http.get(`${this.baseUrl}TodosSesiones`);
    }

    getSesionesPeriodo(a) {
        return this.http.get(`${this.baseUrl}SesionesPeriodo?periodo5=` + a);
    }

    getAsistencia() {
        return this.http.get(`${this.baseUrl}TodosAsistencia`);
    }

    getAsistenciaPeriodo(a) {
        return this.http.get(`${this.baseUrl}AsistenciaPeriodo?periodo6=` + a);
    }

    getReporteFinal() {
        return this.http.get(`${this.baseUrl}TodosReporteFinal`);
    }

    getReporteFinalPeriodo(a) {
        return this.http.get(`${this.baseUrl}ReporteFinalPeriodo?periodo7=` + a);
    }

    getAsignacion() {
        return this.http.get(`${this.baseUrl}TodosAsignacion`);
    }

    getSituacionPeriodo(a) {
        return this.http.get(`${this.baseUrl}SituacionPeriodo?periodo2=` + a);
    }

    getAsesores() {
        return this.http.get(`${this.baseUrl}TodosAsesores`);
    }

    getAsesoresPeriodo(a) {
        return this.http.get(`${this.baseUrl}AsesoresPeriodo?periodo=` + a);
    }

    getSesionAsesor(a) {
        return this.http.get(`${this.baseUrl}SesionAsesor?id=` + a);
    }

    getCorreosAlumnos(a) {
        return this.http.get(`${this.baseUrl}CorreosAlumnos?id=` + a);
    }

    getListaAlumnos(a) {
        return this.http.get(`${this.baseUrl}ListaAlumnos?id=` + a);
    }

    getAsesorCorreo(a) {
        return this.http.get(`${this.baseUrl}CorreoAsesor?id=` + a);
    } */


    solicitud(data) {
        return this.http.post(`${this.baseUrl}SolicitudAsesoria`, data, this.headers);
    }

    solicitudAsesor(data) {
        return this.http.post(`${this.baseUrl}SolicitudAsesor`, data, this.headers);
    }

    actualizAsesor(data) {
        return this.http.post(`${this.baseUrl}ActualizAsesor`, data, this.headers);
    }

    actualizaSolicitud(data) {
        return this.http.post(`${this.baseUrl}ActualizaSolicitud`, data, this.headers);
    }

    borrAsesor(data) {
        return this.http.post(`${this.baseUrl}BorrAsesor`, data, this.headers);
    }

    borraSolicitud(data) {
        return this.http.post(`${this.baseUrl}BorraSolicitud`, data, this.headers);
    }

    asignaIndividual(data) {
        return this.http.post(`${this.baseUrl}AsignaIndividual`, data, this.headers);
    }

    asignaGrupal(data) {
        return this.http.post(`${this.baseUrl}AsignaGrupal`, data, this.headers);
    }

    actualizaInd(data) {
        return this.http.post(`${this.baseUrl}ActualizaInd`, data, this.headers);
    }

    borraInd(data) {
        return this.http.post(`${this.baseUrl}BorraInd`, data, this.headers);
    }

    actualizaGrup(data) {
        return this.http.post(`${this.baseUrl}ActualizaGrupo`, data, this.headers);
    }

    borraGrup(data) {
        return this.http.post(`${this.baseUrl}BorraGru`, data, this.headers);
    }

    motivo(data) {
        return this.http.post(`${this.baseUrl}Motivo`, data, this.headers);
    }

    compromisoUser(data) {
        return this.http.post(`${this.baseUrl}CompromisoUser`, data, this.headers);
    }

    evaluacion(data) {
        return this.http.post(`${this.baseUrl}EvaluacionSatisfaccion`, data, this.headers);
    }

    compromisoAsesor(data) {
        return this.http.post(`${this.baseUrl}CompromisoAsesor`, data, this.headers);
    }

    creaSesion(data) {
        return this.http.post(`${this.baseUrl}CreaSesion`, data, this.headers);
    }

    creaLista(data) {
        return this.http.post(`${this.baseUrl}CreaLista`, data, this.headers);
    }

    creaFin(data) {
        return this.http.post(`${this.baseUrl}CreaFin`, data, this.headers);
    }

    asignaSituacion(data) {
        return this.http.post(`${this.baseUrl}AsignaSituacion`, data, this.headers);
    }

    enviarCorreo(data) {
        return this.http.post(`${this.baseUrl}EnviarCorreoPAAE`, data, this.headers);
    }

    creaCalificacion(data) {
        return this.http.post(`${this.baseUrl}CreaCalificacion`, data, this.headers);
    }
}

/* ?token=`+localStorage.getItem('token') */
