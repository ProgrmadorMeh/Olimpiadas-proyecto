import {mostrarD} from "../Producto/mostrarDatos.js";

let datos = [];
window.addEventListener("DOMContentLoaded",async function(){
    let {cantidadT,id} = await mostrarD();     
    const botonComprar = document.getElementById("botonComprar");
    if(botonComprar){
botonComprar.addEventListener('click', () => (confirmar()));
    }    
    else{
        console.log("no se encuentra el boton")
    }
    cargar();   
});
 
 function GuardarLocal() {    
    localStorage.setItem("carrito",JSON.stringify(datos));
    localStorage.setItem("precioTpaquete",cantidadT); 
}
function cargar(){
    let guardar = localStorage.getItem("carrito");
    if(guardar){
        datos = JSON.parse(guardar);
    }
} 

function confirmar() { 
    try {
    const precio = document.getElementById("Sprecio").textContent;
const lugar = document.getElementById("lugar").textContent;
const inputC = document.getElementById("inputC").value;
console.log("Cantidad ingresada:", inputC); 
 if(!isNaN(inputC) && inputC > 0){    
    const item = {
        lugar: lugar,
        precio: precio,
        cantidad: inputC,
        id: id,       
    };
    datos.push(item);
    GuardarLocal();
    alert("Viaje agregado al carrito de compras correctamente");
 } else{
    alert("ingresar cantidad valida");
 }
    } catch (error) {
        console.error("la función no corre bien",error);
    }   

}

function limpiar(){
localStorage.clear();
}