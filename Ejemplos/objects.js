//Los objetos son estructuras donde se puede guardar información y funcionalidades
// La principal diferencia con los arreglos es la forma en que se guarda la información.
    // Nos permite ser mas especificos
    // Se declaran como cualquier otra  "estructura"
        //var miObjeto = {}

// Los objetos tienen una estructura PAR: CLAVE, VALOR 
    //POR UNA LADO TENEMOS LA CLAVE QUE ES LA PROPIEDAD Y POR OTRO SU vALOR
    //Todos los objetos respetan esta regla - pueden tener todas las propiedades que queramos
    // VALOR: datos
    var deportes = {
        conBalon: ['Futbol', 'Basketball', 'Golf'],
        sinBalon: ['Boxeo', 'Surf', 'Trekking'],
     };
     var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };  // OBJETO llamado persona con tres propiedades:
                                                                                            // nombre
                                                                                            // edad
                                                                                            // estudios

      //Trabajando con OBJETOS:
        // Conceptos básicos:
            // Dot notacion y Bracket-Notation [] corchetes

    // Estructura con forma Key:value
    // Asignar propiedades y valores 

    // Para acceder a a la propiedad de un objeto, se escribe el nombre del OBJETO seguido de punto(.) y el nombre de la propiedad

     //console.log(persona.edad);
     //Como asignar valores a las propiedades: 
     // Para cambiar el valor de una propiedad 1) Accedemos a la propiedad,
     // o sea escribimos el nombre del  objeto seguido de punto y el nombre de la propiedad
     // e igualamos al valor nuevo  (OBJETO.propiedad = nuevo valor);

     //***********  NO SE PUEDE CREAR UNA PROPIEDAD VACIA, SIEMPRE TIENE QUE TENER UN VALOR  ************  

     persona.nombre = 'Martín'; // Aqui queremos cambiar Lucas por "Martin"
      
     //console.log(persona.nombre);
     persona.edad = 32;

     // CREAR PROPIEDADES 

     var autos = {}; //creamos un OBJETO vacío llamado autos 
        //Ahora vamos a crear una propiedad llamada 'marcas'(la cual no puede estar vacía)
     autos.marcas = ['Ford', 'Audi', 'Ferrari']; 
     //console.log(autos); // el resultado es: { marcas: [ 'Ford', 'Audi', 'Ferrari' ] } 

     // Eliminación de propiedades (DELETE: palabra reservada)
     // Vamos a eliminar la propiedad 'marcas' del Objeto "autos";
      delete autos.marcas;
      //console.log(autos);
      //Ahora vamos a ver una particularidad que tienen este tipo de datos:
        //Dentro de una propiedad de un objeto podemos guardar una funcion.
    var misFunciones = {
        saludar: function(){
            console.log('hola');
        }
    };    
    misFunciones.saludar();


    // ******  CONCLUSIONES *******
    // 1) Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
    // 2) Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.
    // 3) Para eliminar propiedades utilizaremos una palabra reservada llamada 'delete'


