$(document).ready(inicio);

function inicio() {

    // flipar();
}


var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
var aleatorios = [];

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
    aleatorios = array;
}

function crearJuego(){

    $('.juego').html(''); //reset

    aleatorizar(array); // randomiza el array al elegir la dificultad

    for(var i=0; i<4; i++ ){

        $('.juego').append("<div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><br>"); // añado los div que llevarán las imagenes
    }
    $('.imagen').css({backgroundImage:'url(\'./img/hp.jpg \')'});
    $('.juego').css({border:'4px solid black'}); //aplico un border al juego al empezar
    // atribuirImagenes();
    valores();
    flipar(); // ejecuto la funcion valores
    
} 

function atribuirImagenes(valor) {

    for( var i=1; i<21; i++){
        var value = $(`.imagen:eq(${i})`).attr("value");
        
        console.log(value);
        
        if( value==valor){
            console.log("match");
            $(`.imagen:eq(${valor})`).css({backgroundImage:'url(\'./img/hp.jpg \')'});   
        }

    }
    
}


function valores() { // funcion que atribue valores del array a las imagenes

   console.log(aleatorios);

    for(let i in aleatorios) { // recogemos el array y atribuimos los valores
        $(`.imagen:eq(${i})`).attr("value",aleatorios[i]);
    }   
}

function flipar(){
    
    $(".imagen").click(function () {
        var valor = $(this).attr("value");
        $(this).css({backgroundImage:'url(\'./img/'+valor+'.jpg \')'},
            setTimeout(function(){atribuirImagenes(valor)},2000)
        );
    });
        
    
}
// atribuirImagenes(valor)