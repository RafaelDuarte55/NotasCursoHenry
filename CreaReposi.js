// Primero se hace mkdir
// mkdir 'Nueva Carpeta'
// cd 'Nueva Carpeta.
// Luego creamos un archivo de texto en la carpeta mediante el comando'touch'
// touch 'Nombre archivo.suExtensión' (P.Ej Mi Primer Repositorio.txt)
// Mediante el comando 'code' hacemos esto:
//      code 'Nombre Archivo.txt' - Al darle enter se abre el vs code en
//      el archivo y ahi lo podemos modificar o editar. guardar

    // Crear repositorio: 
    // se abre el vsc y luego se arrastra la Nueva Carpeta o se abre desde vsc.
// Se abre un nuevo terminal:
// Ahora se procede a inicializar la carpeta para convertirla en repositorio, usamos comando GIT INIT;
// git init y al darle enter aparece un mensaje diciendo que se inicializó la carpeta (Initiated empt Git repository......)
// tambien notamos que al final del nombre de la carpeta aparece la palabra (master); esto corrobora que la carpeta ahora es un repositorio.
// Tambien se puede usar: ls -a y esto nos indicará que se creo la carpeta .git
//****************************   IMPORTANTE    ************ */
//  NUNCA DEBEMOS HACER GIT INIT DENTRO DE LA CARPETA ESCRITORIO O DE ARCHIVOS MUY GRANDES

// ********** COMMIT  *************************
        // Commit es: captura instantanea de los cambios preparados en ese momento del proyecto. No es mas que guardar una 'foto' del estado
        // de los archivos y carpetas del repositorio local, al momento de ser tomada.
// Para realizar un commit se hace solamente de los archivos:
        // primero podemos verificar cuales archivos estan en modo untracked.
        // mediante el comando 'git status', el archivo que sale en rojo es el que se se hará el commit
        // luego, comando 'git add 'nombre del archivo incluyendo la extensión' .
        // P.ej: git add 'Nombre Archivo.txt' 
// Si tenemos muchos archivos para agregar al commit podemos hacer 'git add.' o sea git add (espacio) punto
// esto lo que hará es agregar todos los archivos al commit.
// El siguiente paso es hacer el commit:
        // Para esto hacemos 'git commit -m 'texto del commit'
        // Una vez realizado el commit hacemos 'git log' el cual listará los commits existentes