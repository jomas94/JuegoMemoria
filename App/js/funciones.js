$(document).ready(inicio);

function inicio() {

    crear_dialogo();
    crono();

}
var tiempo = { //variables del cronometro
    hora: 0,
    minuto: 0,
    segundo: 0,
    centesima:0,
    corriendo :0
};
//arrays usados
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
    match=0;
    move=0;
    tiempo = {
        hora: 0,
        minuto: 0,
        segundo: 0,
        centesima:0,
        corriendo :0
    };
    clearInterval(tiempo.corriendo);

    comprobando = []; 
    comprobandoID = [];
    aleatorizar(array);

    $('.juego').html(''); //reset

    for(var i=0; i<4; i++ ){

        $('.juego').append("<div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><br>"); // añado los div que llevarán las imagenes
    
    }
    $('.imagen').css({backgroundImage:'url(\'./img/hp.jpg \')'});
    $('.juego').css({border:'4px solid black'}); //aplico un border al juego al empezar
    $('.movimientos').text('0');
    
    valores();
    flipar();
    comprobar();
} 

function valores() { // funcion que atribue valores del array a las imagenes

    for(let i in aleatorios) { // recogemos el array y atribuimos los valores
        $(`.imagen:eq(${i})`).attr("value",aleatorios[i]);
        
    }   
    for(var j=0; j<21; j++){ //atribuo IDs a las imagens
        $(`.imagen:eq(${j})`).attr("id",[(j+1)]);
    }
}

var move=0;
function flipar(){
    
    $(".imagen").click(function () {    
        var valorclicado = $(this).attr('value');
        // var idclicado = $(this).attr('id');
        move++;
        $(this).css({backgroundImage:'url(\'./img/'+valorclicado+'.jpg \')'});
        $('.movimientos').text(move);
            
    });
}
    
function atribuirImagenes(img1,img2) { //vuelvo a poner la imagen inicial
    $(`#${img1}`).css({backgroundImage:'url(\'./img/hp.jpg \')'});   
    $(`#${img2}`).css({backgroundImage:'url(\'./img/hp.jpg \')'});   

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
        comprobandoID.push(idclicado);
        
        if(comprobando.length==2){

            if(comprobando[0]===comprobando[1] && comprobandoID[0]!=comprobandoID[1]){ // PAREJA

                deshabilitar(comprobandoID[0],comprobandoID[1]);
                hasganado();
            }
            else if(comprobandoID[0]!=comprobandoID[1] && comprobando[0]!=comprobando[1]){ // INCORRECTO
                setTimeout(function(){
                    atribuirImagenes(comprobandoID[0],comprobandoID[1])
                        
                        
                },500);
                
                    
            }

        }
        if(comprobando.length==3){
            comprobando=[];
            comprobando.push(valorclicado);
            comprobandoID=[];
            comprobandoID.push(idclicado);

        }


               
    });

}


function crear_dialogo(){
    $('.dialogo').dialog({
        height:"auto",
		width:550,
        modal:true,
        title: 'ZORIONAK!!!!',
        resizable:false,
        draggable: false,
		autoOpen: false,
        show: {effect: "bounce", duration: 3000},
	});
}

var match=0;

function hasganado(){
    match ++;
    if(match==10){
        $(".dialogo").dialog("open");
        clearInterval(tiempo.corriendo);
    }

}

function crono(){ 
    
    $(".boton").click(function(){
        if ( $(this).text() == 'Iniciar' ){
            tiempo.corriendo = setInterval(function(){
                // centesimas
                tiempo.centesima++;
                if(tiempo.centesima >= 100){
                    tiempo.centesima =0;
                    tiempo.segundo++;
                }  
                // Segundos
                if(tiempo.segundo >= 60){
                    tiempo.segundo = 0;
                    tiempo.minuto++;
                }      
                // Minutos
                if(tiempo.minuto >= 60){
                    tiempo.minuto = 0;
                    tiempo.hora++;
                }
                $("#minuto").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
                $("#segundo").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
                $("#centesima").text(tiempo.centesima < 10 ? '0' + tiempo.centesima : tiempo.centesima);
            }, 10);
        }
        else 
        {
            clearInterval(tiempo.corriendo);
        }
    })        
    
}