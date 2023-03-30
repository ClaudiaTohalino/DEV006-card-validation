# Tarjeta de crédito válida

## Índice

* [1. Indicaciones](#1-Indicaciones)
* [2. Criterios](#2-Criterios)
* [3. Diseño y planeamiento](#3-Diseño-y-planeamiento)
* [4. Acknowledgements](#4-Acknowledgements)


***

## 1. Indicaciones

En este proyecto tendrás que construir una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, tendrás que
implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría validar una tarjeta de crédito y pensar en cómo debe ser esa
experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?)
etc.

Como continuación del proyecto de preadmisión, volverás a trabajar sobre
fundamentos de JavaScript, incluyendo conceptos como variables, condicionales,
y funciones, así como eventos y manipulación básica del DOM, fundamentos de
HTML y CSS. Mientras desarrollas este proyecto, te familiarizarás con nuevos
conceptos también.

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 2. Criterios

Estos son los requisitos que tu proyecto debe que cumplir para asegurar que tu
trabajo cubra los objetivos principales.

**1. Una interfaz que debe permitir a la usuaria:**

* Insertar un numero (texto) que quieres validar. Usa solo caracteres numéricos
  (dígitos) en la tarjeta a validar [0-9].  
* Ver si el resultado es válido o no.  
* Ocultar todos los dígitos del número de tarjeta a exepción de los últimos
  4 caracteres.  
* No debes poder ingresar un campo vacío.  

**2. Pruebas unitarias de los métodos.**  
Los metódos de `validator` (`isValid` y `maskify`) deben tener cobertura con
pruebas unitarias.

**3. Código de tu proyecto subido a tu repo e interfaz "desplegada".**  
El código final debe estar subido en un repositorio en GitHub. La interfaz o
pagina web, debe ser "desplegada" (accesible públicamente online) usando
GitHub Pages.
  
**4. Un README que contiene una definición del producto.**  
En el README cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.  
Estas preguntas sirven como guía:

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Tips Proporcionados

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [VS Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.app/)
   que incluye [Git bash](https://git-scm.com/download/win).
3. Tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura.
Debes realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

## 3. Diseño y planeamiento

### Diseño

Se dispuso de la tematica del proyecto, por lo cual se eligió que fuera la página en la cual el ususario ingresa los datos de su tarjeta para generar un pago.
Se diseño en Canva.

### Planeamiento

Solo por esta vez, se diseño un planeamiento manual que se estructuro de la siguiente forma:

Semana 1: 

* Git: Instalación y configuración
* Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote).
* GitHub: Creación de cuenta y repos, configuración de llaves SSH.
* Preparar la PC con los tips proporcionados.

Semana 2:

* Estructura de HTML. 
* Lograr: validator.isValid() y validator.maskify().

Semana 3:

* Implementar CSS.
* Correr pruebas unitarias satisfactoriamente.
* Detalles finales.

## 4. Acknowledgements

 - [Proyecto inicial propuesto por Laboratoria](https://github.com/Laboratoria/DEV006-card-validation)
 - [Iconos](https://fontawesome.com/)