const bConvertir = document.getElementById("bConvertir");

bConvertir.addEventListener("click",convertir);

compraDolar = 7900; compraReal = 1200; compraEuro = 8200;

function convertir(){
    const monedaDe = document.getElementById("monedaDe");
    const monedaA = document.getElementById("monedaA");
    const cantidad = document.getElementById("cantidad");
    const resultado = document.getElementById("resultado");
    
    m1 = monedaDe.value;
    m2 = monedaA.value;
    res = 1;
    
    if(m1 != m2){
        if(m1 == "dolar" && m2 == "guarani"){
            res = Number(cantidad.value) * compraDolar;
        }else if (m1 == "real" && m2=="guarani"){
            res = Number(cantidad.value) * compraReal;
        }else if (m1 == "euro" && m2=="guarani"){
            res = Number(cantidad.value) * compraEuro;
        }
    }
    resultado.innerHTML= res;
  
}