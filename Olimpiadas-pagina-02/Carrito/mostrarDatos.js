function mostrarDOM(){
 
    datos = JSON.parse(localStorage.getItem("carrito"));

    datos.forEach((item) =>{
    let lugar = document.getElementById("nombre");
    let precio = document.getElementById("precioP");
    let cantidad = document.getElementById("cantidad");
    lugar.innerHTML = item.lugar;
    precio.innerHTML = item.precio;
    cantidad.innerHTML = item.cantidad;                            
    });
    console.log("funcionando");
}
mostrarDOM();