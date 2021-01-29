$(document).ready(inicio);

function inicio() {

    // randomiza el array al elegir la dificultad
    // flipar();
    // $(".dialogo" ).dialog({
    //     autoOpen: false,
    //     show: {
    //       effect: "blind",
    //       duration: 1000
    //     },
    //     hide: {
    //       effect: "explode",
    //       duration: 1000
    //     }
    //   });


}


var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
var aleatorios = [];
var comprobando = [];
var comprobandoID = [];
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
    
    //vaciamos los arrays cada vez que empezamos el juego
    comprobando = []; 
    comprobandoID = [];
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
            
    });
}
    
function atribuirImagenes(img1,img2) { //vuelvo a poner la imagen inicial
    console.log(img1,img2);
    $(`#${img1}`).css({backgroundImage:'url(\'./img/hp.jpg \')'});   
    $(`#${img2}`).css({backgroundImage:'url(\'./img/hp.jpg \')'});   

}
function deshabilitar(img1,img2){ //Ids de las imágenes
    console.log(`id1:${img1}. id2:${img2}`);
    $(`#${img1}`).css({pointerEvents:"none" });
    $(`#${img2}`).css({pointerEvents:"none" });
    
}


function comprobar(){

    $(".imagen").click(function () {
        
        var valorclicado = $(this).attr('value');
        var idclicado = $(this).attr('id');
        
        comprobando.push(valorclicado);
        comprobandoID.push(idclicado);
        
        console.log(comprobando);
        
        if(comprobando.length==2){

            if(comprobando[0]===comprobando[1] && comprobandoID[0]!=comprobandoID[1]){ // PAREJA
                console.log("son pareja");

                deshabilitar(comprobandoID[0],comprobandoID[1]);
                hasganado();
            }
            else if(comprobandoID[0]!=comprobandoID[1] && comprobando[0]!=comprobando[1]){ // INCORRECTO
                console.log("son distintos");
                setTimeout(function(){
                    atribuirImagenes(comprobandoID[0],comprobandoID[1])
                        
                        
                },500);
                
                    
            }

        }
        if(comprobando.length==3){
            console.log("borrar array ");

            comprobando=[];
            comprobando.push(valorclicado);
            comprobandoID=[];
            comprobandoID.push(idclicado);

        }


               
    });

}

var match=0;

function hasganado(){
    match ++;
    console.log(match);
    if(match==10){
        // $(".dialogo").dialog("open");
    }

}