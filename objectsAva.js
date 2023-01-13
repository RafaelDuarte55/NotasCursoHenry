 // OBJETOS AVANZADOS
    // Javascript: Object
    // Objeto Global que extiende diferentes métodos a los objetos.
    // Los métodos son funciones pre-definidas, que permiten realizar tareas de maneras mucho mas rápidas.

// metodo: hasOwnProperty - Es booleano; el resultado es true o false
// var libro = {autor: 'Borges', genero: 'policial', año: 1990};
// var tienePropiedad = libro.hasOwnProperty('nombre') - Nótese que el argumento de hasOwnProperty va entre comillas ('nombre');
// console.log (tienePropiedad); // La respuesta es false

 
var libro = {autor: 'Borges', genero: 'policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor')
    console.log (tienePropiedad); // La respuesta es true
    // El metodo hasOwnProperty nos será útil cuando tengamos que validar este tipo de información.

// método Keys: devuelveun arreglo con el nombre de todas las propiedades del objeto.
var todasLasPropiedades = Object.keys(libro);
    console.log(todasLasPropiedades);

// Bucle 'for in
// Los objetos tambien se pueden recorrer como los arreglos. Para esto se usa for in.
// El bucle For es para recorrer arreglos elemento por elemento, mientras que For In sirve para recorrer los Objetos propiedad por propiedad.

var mundo = { continentes: 7, paises: 195, oceanos: 5 }
for(var prop in mundo) {
    console.log('Esta es la propiedad:' + prop);
    console.log('Este es el valor: ' + mundo[prop])
}

//Métodos de objetos

// 1) El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto.
        // En cada caso devolverá true o false.

// 2) El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.

// ****** OBJETO 'THIS' ***********

// Contextos en JavaScript:
// Dentro de este lenguaje de programacion existe un objeto global llamado "this".
// Este nos permite manipular el contexto en el que las funciones y la información está siendo ejecutada..
// Ir a este link para más información: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
// El objeto THIS marca el contexto.
// Ejemplo:
var mascota = {
    animal: 'perro',
    raza: 'Ovejero Alemán',
    amistoso: 'true',
    dueña: 'María López',
    info: function () {
        console.log('Mi perro es un ' + raza);
    }
}
// Cuando ejecutamos mascota.info() - La terminal nos avisa que la pabra 'raza' no está definida.
// Nuestra funcion no está reconociendo el contexto en el que queremos que se ejecute.
// Para poder acceder adesde esta función a otra propiedad de este objeto, primero debemos informarle a la función
// que el contexto al que hacemos referencia es un objeto. Para esto usaremos el objeto THIS antes de la palabra raza.
    console.log('Mi perro es un ',+ this.raza ')
