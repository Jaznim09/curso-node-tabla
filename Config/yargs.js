const argv =require('yargs')
.option('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Indicador del alcance del Multiplicador'
})
.check((argv, options)=>{
    if(isNaN(argv.b)){
        throw 'La base debe ser un Numero'
    }
    return true;
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.argv;

module.exports=argv;