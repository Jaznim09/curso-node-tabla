// hacer la tabla del 5 en javascrip
const {option} = require('yargs');
const {crearArchivo} =require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');

console.clear();
console.log(argv);
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow,'Creado'))
.catch(err=>console.log(err));
