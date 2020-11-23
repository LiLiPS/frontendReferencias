import {rutasNav} from './components/navbar-sistems/navbar-sistems.component';

// import { rutasSistemas } from '../app/views/login/login.component'
// import { rutasRoles } from './components/navbar-sistems/navbar-sistems.component';
// import { rutasRoles } from './containers/default-layout/default-layout.component';

export interface NavData {
    name?: string;
    url?: string;
    icon?: string;
    badge?: any;
    title?: boolean;
    children?: any;
    variant?: string;
    attributes?: object;
    divider?: boolean;
    class?: string;
}

/* function recargarRutas(){
  var rutasRoles = [];
  rutasRoles = JSON.parse(sessionStorage.rutas);
  console.log(rutasRoles);
  return rutasRoles;
} */
// export {recargarRutas};
let rutasRoles = [];
/*if (sessionStorage.getItem('rutas')) {
    rutasRoles = JSON.parse(sessionStorage.getItem('rutas'));
} else {
    rutasRoles = rutasNav;
}*/
let rutasModulos = [];

rutasModulos.push({
  name: 'conceptos',
  url: '/referencias/e4ea811fdfd3f43bd4b0948734067104',
  icon: 'icon-arrow-right'
},
{
  name: 'Aplicación de conceptos',
  url: '/referencias/c0db1804fdeb3f498cfe20573d201b23',
  icon: 'icon-arrow-right'
});

rutasRoles.push({
  name: 'administrador',
  icon: 'icon-user',
  children: rutasModulos
});
export const navItems: NavData[] = rutasRoles;


/*
let sistemas = JSON.parse(sessionStorage.permisos);
 var rutasSistemas = [];
for(var sistema in sistemas[0].SISTEMAS){
  var rutasRoles = [];
  //console.log("--"+sistemas[0].SISTEMAS[sistema].NOMBRE)
  for(var rol in sistemas[0].SISTEMAS[sistema].ROLES){
    var rutasModulos = [];
    //console.log("----"+sistemas[0].SISTEMAS[sistema].ROLES[rol].NOMBRE)
    for(var modulo in sistemas[0].SISTEMAS[sistema].ROLES[rol].MODULOS){
      //console.log("------"+sistemas[0].SISTEMAS[sistema].ROLES[rol].MODULOS[modulo].NOMBRE)
      rutasModulos.push({name: sistemas[0].SISTEMAS[sistema].ROLES[rol].MODULOS[modulo].NOMBRE,
        url: '/'+sistemas[0].SISTEMAS[sistema].NOMBRE.toLowerCase()+'/'+sistemas[0].SISTEMAS[sistema].ROLES[rol].MODULOS[modulo].NOMBRE.toLowerCase(),
        icon: 'icon-cursor'});
    }
    rutasRoles.push({name: sistemas[0].SISTEMAS[sistema].ROLES[rol].NOMBRE,
                    icon: 'icon-screen-desktop',
                    children: rutasModulos});
  }
  rutasSistemas.push({name: sistemas[0].SISTEMAS[sistema].NOMBRE,
                      url: '/'+sistemas[0].SISTEMAS[sistema].NOMBRE.toLowerCase(),
                      icon: 'icon-star',
                      children: rutasRoles});
} */

//console.log(rutasSistemas);
