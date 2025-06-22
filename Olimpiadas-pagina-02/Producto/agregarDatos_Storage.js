import { STRAPI_HOST } from "../Producto/mostrarDatos.js";
import {mostrarD} from "../Producto/mostrarDatos.js";
mostrarD();
let datos = [];
window.addEventListener("DOMContentLoaded",async function(){
      
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
}
function cargar(){
    let guardar = localStorage.getItem("carrito");
    if(guardar){
        datos = JSON.parse(guardar);
    }
} 

function confirmar() { 
    try {
    const id = parseFloat(localStorage.getItem("MostrarDatosID"));
    const precioTpaquete = parseFloat(localStorage.getItem("precioTpaquete"));    
    const precio = document.getElementById("Sprecio").textContent;
const nombre = document.getElementById("nombre").textContent;
const inputC = document.getElementById("inputC").value;
console.log("Cantidad ingresada:", inputC); 
 if(!isNaN(inputC) && inputC > 0){    
    const item = {
        nombre: nombre,
        precio: "precio por persona: ",precio,
        cantidad: inputC,
        id: id,
        precioTpaquete: "precio por cantidad de personas ingresadas",precioTpaquete       
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