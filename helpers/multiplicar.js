const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = true, hasta = 10) => {

    try{
        
        let salida, consola = '';
    
        for ( let i=1; i<=hasta; i++ ){
            salida += `${base} x ${i} = ${ i * base}\n` ;
            consola += `${base} ${'x'.green} ${i}  ${ '='.green } ${ i * base}\n` ;
        }

        if ( listar ){
            console.clear();
            console.log('==================='.green);
            console.log('   TABLA DEL'.green, colors.blue ( base ));
            console.log('==================='.green);    

            console.log(consola);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
        return `tabla-${ base }.txt`;
    }
    catch (err){
        throw err;
    
    }
    
}

module.exports = {
    crearArchivo
};
