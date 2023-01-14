# AngularLoginJwt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Description

En este ejemplo se construye una aplicacion de login utilizando JWT como autenticacion y almacenando el token en las cookies para poder ser utilizado, todo esto creado con angular.

JWT es un sistema de autenticación que se basa en el uso de tokens, es decir, cuando el usuario inicia sesion en la pagina, angular envia al servidor el nombre de usuario/email y su contraseña, el servidor comprueba si el usuario existe en la base de datos y si la contraseña es correcta, envia a la pagina un token generado especificamente para ese usuario.Este token esta firmado por lo que no se puede modificar, la pagina guarda este token y cuando el usuario accede a otra seccion dentro la pagina que dependa del servidor envia el topken almacenado.

En resumen, se genera un token en servidor, la pagina lo guarda en las cookies y por cada peticion a la API se envia el token para que el servidor compruebe si el usuario tien permisos, de esta manera se consigue que se puedan proteger llamadas a la API sin necesidad de pasar usuario y contraseña en cada peticion (solo se pasa el token)

## Resources

Este ejemplo utiliza una API de prueba para realizar el login y el registro del usuario: 
    - Login: https://reqres.in/api/login
    - Register: https://reqres.in/api/register

![image](https://user-images.githubusercontent.com/25914247/212484896-d12f5845-45dc-4365-a974-398c6044aea5.png)


Se utilizan guardianes para proteger las rutas, por ejemplo, si tratas de acceder a las ruta "http://localhost:4200/home" sin haber iniciado sesion te redirigira a la url "http://localhost:4200/not-found" ya que el usuario no se ha autenticado.

![image](https://user-images.githubusercontent.com/25914247/212485104-b51dc916-3542-49c5-8397-27767a7e1ecc.png)

## Additional

Para complementar el ejemplo, esta es una lista de tareas que se podrian agregar:
    - Mostrar un mensaje de error dentro de los formularios de login y registro cuando hay un error en la petición
    - Comprobar que las dos contraseñas coinciden al pulsar sobre el botón de registro y mostrar un mensaje en caso de que no coincidan
    - Crear un componente de navbar. Dentro mostrar el usuario logueado y en caso de no existir mostrar el botón de login
    
