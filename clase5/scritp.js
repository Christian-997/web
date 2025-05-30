titulo = document.getElementById("titulo");
bMas = document.getElementById("aumentar");
bMenos = document.getElementById("disminuir");
size = 15;

titulo.style.fontSize = size + "pt";

function incremento(){
    size = size + 1;

    if(size <= 30){

        titulo.style.fontSize = size + "pt";
    }else{
        
        size = 30;
    }
}

function decremento(){
    size = size - 1;
    titulo.style.fontSize = size + "pt";
}

bMas.addEventListener("click",incremento);
bMenos.addEventListener("click",decremento);