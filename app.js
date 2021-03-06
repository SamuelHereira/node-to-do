const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./to-do/to-do.js');

let comando = argv._[0];

// console.log(argv)

switch( comando ) {
    case 'crear': 
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar': 

        let listado = porHacer.getListado();
        for( let tarea of listado ) {
            console.log('========POR HACER======='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('========================'.green);
        }

        console.log('Mostrar todas las tareas  hacer');
    break;
    case 'actualizar': 
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado); 
    break;
    case 'borrar': 
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;
    default: 
        console.log('El comando no es reconocido');
} 