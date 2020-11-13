# Sistema Integral Tecvirtual Frontend

El sistema integral del Tecnológico Nacional de México en León, mejor conocido como "[*Tec Virtual*](http://tecvirtual.itleon.edu.mx/#/)", 
incluye la mayoría de los procesos que se llevan a cabo en dicha institución. 
El desarrollo del sistema es la suma de los esfuerzos de estudiantes e ingenieros que trabajan en equipo para hacer posible dicho proyecto.

## Índice

* [Instalación](#instalación)
    * [Para Instalar Angular](#para-instalar-angular)
    * [Para Clonar el Proyecto](#para-clonar-el-proyecto)
    * [Crear el Archivo generic-services.service.ts](#crear-el-archivo-generic-servicests)
* [Uso](#uso)
* [¿Qué Incluye?](#qué-incluye)
* [Versiones](#versiones)
* [Documentación](#documentación)
* [Licencia y Derechos de Autor](#licencia-y-derechos-de-autor)
* [Soporte](#soporte)

## Instalación

Se necesitan los siguientes programas antes de hacer la instalación del proyecto:
* [NodeJS](https://nodejs.org/es/download/releases/) 8.11.3

### Para Instalar Angular
* Angular 7.0.1 con el siguiente comando  en la terminal:
``` bash
npm install -g @angular/cli@7.0.1
```

### Para Clonar el Proyecto
``` bash
$ git clone http://10.0.6.86/mangel_mx/gestion-de-usuarios-y-permisos-front-end.git

# trasladarse a la carpeta de la aplicación
$ cd gestion-de-usuarios-y-permisos-front-end

# instalar las dependencias de la aplicación
$ npm install
```


### Crear el Archivo generic-services.service.ts
En la ruta *../src/app/services/* se crea o modifica el archivo **generic-services.service.ts** 
en base al archivo **generic-services.service.ts.example**.  
Se deben descomentar dos de las siguientes líneas, dependiendo del ambiente en el que se quiera probar el sistema. 
Puede ser ambiente local, ambiente de pruebas o ambiente de producción:
``` typescript
    // AMBIENTE LOCAL
    // protected static API_ENDPOINT = 'http://127.0.0.1:8000/api/';
    // protected static ENDPOINT = 'http://127.0.0.1:8000/';

    // AMBIENTE DE PRUEBAS
    // protected static API_ENDPOINT = 'http://10.0.6.231/backend_swiitl/server.php/api/';
    // protected static ENDPOINT = 'http://10.0.6.231/backend_swiitl/server.php/';

    // AMBIENTE DE PRODUCCIÓN
    // protected static API_ENDPOINT = 'http://tecvirtual.itleon.edu.mx/backend_swiitl/server.php/api/';
    // protected static ENDPOINT = 'http://tecvirtual.itleon.edu.mx/backend_swiitl/public/';
```

## Uso

Para visualizar el proyecto en el localhost:4200 del navegador, se pone el siguiente comando en la terminal:
``` bash
$ ng serve
```

Para construir el proyecto para lanzar a producción con minificación, se pone el siguiente comando en la terminal:
``` bash
$ ng build
```

## ¿Qué Incluye?

Con la descarga del proyecto se obtienen las siguientes carpetas y archivos.

```
gestion-de-usuarios-y-permisos-front-end/
├── e2e/
├── src/
│   ├── app/
|   |   ├── components
|   |   ├── ...
|   |   ├── models
|   |   ├── modules
|   |   ├── services
|   |   ├── ...
|   |   ├── views
|   |   ├── ...
│   ├── assets/
│   ├── environments/
│   ├── scss/
│   ├── index.html
│   └── ...
├── ...
├── package.json
└── ...
├── README.md
├── ...
```

## Versiones

El proyecto se encuentra en su versión 0.4 de desarrollo (Enero 2020).

## Documentación
Se utiliza el framework Angular en su [versión 7](https://v7.angular.io/docs).  
El sistema integral incluye la biblioteca CoreUI Free Angular Admin Template que está alojada [CoreUI](https://coreui.io/angular/).

## Licencia y Derechos de Autor

Copyright 2020 Tecnológico Nacional de México en León.

## Soporte

Célula de Desarrollo Institucional.  
* Ing. Miguel Angel Peña López :mailbox: mangel.plopez@itleon.edu.mx
* Ing. José María Cruz Parada :mailbox: chema@itleon.edu.mx

