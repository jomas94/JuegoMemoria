// $(document).load(inicio);
  
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

function crearJuego(nivel){
    $('.juego').html(''); //reset

    aleatorizar(array);
    for(var i=0; i<4; i++ ){

        $('.juego').append("<div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><div class='imagen'></div><br>");
    }
           
    $('.juego').css({border:'4px solid black'});
    // $('.imagen').css({backgroundColor:'black', width:'100px',height:'100px',border:'2px solid white'});

    valores();


} 

function valores() {
   console.log(aleatorios);

   for(let i in aleatorios) {
    $(`.imagen:eq(${i})`).attr("value",aleatorios[i]);
   }
    
    
}

