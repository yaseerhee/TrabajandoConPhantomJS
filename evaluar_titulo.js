var sitioWeb = require('webpage').create();

var URL = "http://localhost:5500/app/";


sitioWeb.open( URL , function(status){

    if( status === 'success'){
        
        var titulo = sitioWeb.evaluate( function(){
            return document.title;
        } )

        var longitudTitulo = titulo.length;
            // Reglas de Google
        if( !titulo || longitudTitulo == 0){
            console.log("No se encuentra el título del documento")
        }else if ( longitudTitulo > 60){
             console.log("El tamaño del título es demasiado largo " + longitudTitulo + " carácteres")
        } else if ( longitudTitulo < 20 ){
            console.log("El tamaño del título es demasiado corto " + longitudTitulo + " carácteres")
        }else{
             console.log("sitio OK")
        }

    }




    phantom.exit();

})