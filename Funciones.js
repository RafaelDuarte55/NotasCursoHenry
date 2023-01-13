// COMO DECLARAR UNA FUNCION
// Hay tres formas diferentes para declarar una función
//PRIMERO
    // FORMA BASICA
    //Lo que va entre las llaves {} se llama cuerpo de la función
    // Ejemplo una funcion que sume tres(3) a una variable 'x'(x es el argumento o parámetro)
function sumaTres(x) {
    return x + 3;
} 

// SEGUNDO
        // guardar la función en una variable

var  sumaTres = function(x) {return x + 3;
}
// TERCERO
// Esta sintaxis se llama 'Función de Flecha' =>;

var sumaTres = (x) => {
        return x + 3;
};