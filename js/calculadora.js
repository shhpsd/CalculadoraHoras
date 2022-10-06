let nomina = document.getElementById("valorNomina");
let horasSemanales = document.getElementById("valorHoras");

let cantidadPorHora = null;

function calcular(){
    cantidadPorHora = nomina.value / horasSemanales.value;
    
   
    createBoxAlert();
    
}


function createBoxAlert(){
    let box = document.createElement("div");
    box.className =  "card bg-dark position-absolute d-flex align-content-center justify-content-center top-0 w-100 vh-100";
    let value = document.createElement("h3");
    value.className = "fw-bold fs-8 text-white text-center";

    value.innerHTML = cantidadPorHora + " euros por hora"; 
    
    box.appendChild(value);
    document.body.appendChild(box);
}
