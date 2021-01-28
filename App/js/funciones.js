$(document).ready(inicio);

function inicio() {

    // randomiza el array al elegir la dificultad
    // flipar();
}


var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
var aleatorios = [];
var comprobando = [];
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
    aleatorizar(array);
    $('.juego').html(''); //reset

    for(var i=0; i<4; i++ ){

        $('.juego').append("<div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><br>"); // añado los div que llevarán las imagenes
    
    }
    $('.imagen').css({backgroundImage:'url(\'./img/hp.jpg \')'});
    $('.juego').css({border:'4px solid black'}); //aplico un border al juego al empezar
    
    setImagenes();//enseño las imagenes
    setTimeout(function(){$('.imagen').css({backgroundImage:'url(\'./img/hp.jpg \')'})},2000); // tras tres segundos las giro
    valores();
    flipar();
    comprobar();
} 

function valores() { // funcion que atribue valores del array a las imagenes

   console.log(aleatorios);

    for(let i in aleatorios) { // recogemos el array y atribuimos los valores
        $(`.imagen:eq(${i})`).attr("value",aleatorios[i]);
        
    }   
    for(var j=0; j<21; j++){ //atribuo IDs a las imagens
        $(`.imagen:eq(${j})`).attr("id",[(j+1)]);
    }
}

function atribuirImagenes(valor) { //vuelvo a poner la imagen inicial

    $(`#${valor}`).css({backgroundImage:'url(\'./img/hp.jpg \')'});   

}

function setImagenes(){

    for(let i in aleatorios) { 
        
        $(`.imagen:eq(${i})`).attr("value",aleatorios[i]);
        $(`.imagen:eq(${i}), .imagen2:eq(${i})`).css({backgroundImage:'url(\'./img/'+aleatorios[i]+'.jpg \')'});
    }

}



function flipar(){
     
    $(".imagen").click(function () {    
        var valorclicado = $(this).attr('value');
        var idclicado = $(this).attr('id');

        $(this).css({backgroundImage:'url(\'./img/'+valorclicado+'.jpg \')'});
        $(`#${idclicado}`).css({transform: 'translateY(360deg)'});
        // $(this);
             
            // if(valor1==valor2){ // comprobar si son iguales
            //     deshabilitar(valor1,valor2); //deshabilitar si son iguales
            //     comprobar();
            //     // }
            // }else{
            //     setTimeout(function(){atribuirImagenes(idclicado)},2000);
            // }
   
    });
}

function deshabilitar(img1,img2){ //Ids de las imágenes

    $(`#${img1}`).css({pointerEvents:"none" });
    $(`#${img2}`).css({pointerEvents:"none" });
     
}


function comprobar(){

    $(".imagen").click(function () {

        var valorclicado = $(this).attr('value');
        var idclicado = $(this).attr('id');

        comprobando.push(valorclicado);
       

        console.log("valor:"+valorclicado);
        console.log("id:"+idclicado);
        console.log("array: "+comprobando);
        for(var i=0; i<2; i++){
            if(comprobando[0]==comprobando[1]){

                deshabilitar(comprobando[0],comprobando[1]);
            }
            if(comprobando.length==2){
                console.log("borrar array ");

                comprobando.length=0;
            }
        }
        setTimeout(function(){
            atribuirImagenes(idclicado)
        },2000);

        
    });

}