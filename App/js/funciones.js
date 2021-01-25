

function crearJuego(nivel) {
   
    
    if(nivel==1){
        $('.juego').css({border:'2px solid black'}); 
        for(var i=0; i<6;i++){

            $('.juego').append("<div class='imagen'>"+i+"</div>"); 
        }

    
    }if(nivel==2){
        $('.juego').css({background:'blue', width:'500px',height:'500px',border:'2px solid black'});
    }if(nivel==3){ 
        // $('.juego').css("");
        $('.juego').css({backgroundColor:'green', width:'500px',height:'500px',border:'2px solid black'});

    }
    
}

function aleatorizar(array) {
    var j, x, i;
    //Recorremos el array del final hacia delante
    for (i = array.length - 1; i > 0; i--) {
    //Generamos una posicion comprendida entre los valores de nuestro array
    j = Math.floor(Math.random() * (i + 1));
    // Asignamos el valor de la posición actual a una variable
    x = array[i];
    //Intercambiamos los valores de las dos posiciones
    array[i] = array[j];
    array[j] = x;
    }
}