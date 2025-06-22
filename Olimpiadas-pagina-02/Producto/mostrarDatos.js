export const STRAPI_HOST = 'http://localhost:1338'
export async function mostrarD() {
     const id = localStorage.getItem("MostrarDatosID");
     const precioT = localStorage.getItem("precioTpaquete");
     const urlP = `${STRAPI_HOST}/api/paquetes-turismos?populate=*&filters[id][$eq]=${encodeURIComponent(id)}`;
       let url = urlP;
      if(!id){
        console.error("No carga el ID de parte del LocalStorage");
        return;
      }      
        let res = await fetch (url);
        if (!res.ok) {
  console.error("Paquete no encontrado en Strapi con ID:", id);
  return;
}
        console.log(url);
        const data = await res.json();    
        console.log("respuesta de strapi",data);
        const paquetes = data.data;
        let cantidadT = 0;
        if(Array.isArray(paquetes)){        
        paquetes.forEach(paquete => {
        const descripcionPR = document.getElementById("descripcionPR");
        const nombre = document.getElementById("nombre");
        const precio = document.getElementById("Sprecio");
        const inputC = document.getElementById("inputC");
        const cantidadSpan = document.getElementById("cantidadSpan");
        descripcionPR.innerHTML = paquete.descripcion;
        nombre.innerHTML = paquete.NombreV;
        precio.innerHTML = paquete.precio;
        inputC.addEventListener('input',function(){            
        cantidadT = (paquete.precio * inputC.value);     
        cantidadSpan.innerHTML = cantidadT;    
        localStorage.setItem("precioTpaquete",cantidadT); 
        });
        });     
    }    
    }