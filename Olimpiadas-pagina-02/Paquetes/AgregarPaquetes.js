export const STRAPI_HOST = 'http://localhost:1338';
window.addEventListener("DOMContentLoaded",function(){
    cargarPaquetes();
});
document.getElementById('filtro-destino').addEventListener('change', function () {
  const destino = this.value.trim();
  cargarPaquetes(destino);  
}) ;  



export async function cargarPaquetes(destino =''){  
   const urlP = `${STRAPI_HOST}/api/paquetes-turismos?populate=*`;
   let url = urlP;
  if(destino){
    url += `&filters[destino][$eq]=${encodeURIComponent(destino)}`;
  }
    let res = await fetch (url);
    console.log(url);
    const data = await res.json();    
    console.log("respuesta de strapi",data);
    const paquetes = data.data;
    const section = document.getElementById("section");
    section.innerHTML = '';
    if(Array.isArray(paquetes)){
      paquetes.forEach(paquete => {
        const id = paquete.id;
        const Lista_paqutes = document.createElement("ul");
       const tarjeta = document.createElement("div");
    const figure = document.createElement("figure");
    const imagen =  document.createElement("img");
    const paquete_contenido = document.createElement("div");
    const paquete_datos = document.createElement("ul");
    //CLASES//  
    Lista_paqutes.className = 'Lista_paqutes';
    paquete_datos.className = 'paquete-datos';
    paquete_contenido.className = 'paquete-contenido';
    imagen.className ='paquete-img'; 
    figure.className = 'img-cont';    
    tarjeta.className = 'paquete';
    //APPENDCHILDS//
    section.appendChild(Lista_paqutes)
    Lista_paqutes.appendChild(tarjeta);
    tarjeta.appendChild(figure);
    figure.appendChild(imagen);
    tarjeta.appendChild(paquete_contenido);
    paquete_contenido.appendChild(paquete_datos);

    const datos1 = {
  noches: `Noches: ${paquete.noches?? 'noches no disponibles'}`,
  nombre: `Nombre: ${paquete.NombreV?? 'error Nviajes'}`,
  destino: `Destino: ${paquete.destino?? 'destino no disponible'}`,
  retiro: `Saliendo desde: ${paquete.saliendoDesde?? 'no disponible'}`,
  salida: `Fecha de salida: ${paquete.fechaDeSalida?? 'no disponibles'}`,
  vuelo: `Vuelo: ${paquete.vuelo?? 'no disponibles'}`,
  hotel: `Hotel: ${paquete.hotel?? 'no disponibles'}`,
};    
const clases1 = {
  noches: 'azul paquete-noches',
  nombre: 'paquete-nombre',
  destino: 'paquete-destino',
  retiro: 'paquete-retiro',
  salida: 'paquete-salida',
  vuelo: 'paquete-vuelo',
  hotel: 'paquete-hotel',
};

for (const key in datos1){
    const li = document.createElement('li');
    li.className = clases1[key];
    if(key === 'nombre'){
        const h3 = document.createElement('h3');
        h3.className = clases1[key];
        h3.textContent = datos1[key];
        li.appendChild(h3);
    } else{
        li.textContent = datos1[key];
    }
    paquete_datos.appendChild(li);
};
 //lista número dos//
    const datos2 = {
  precioLabel: 'Precio por persona',
      precio: `$${paquete.precio?? 'no disponibles'}`,     
      marca: 'paquetes now marketplace',
};
const clases2 = {
   precioLabel: '',
      precio: 'azul precio paquete-precio',
      marca: 'azul',
};
const Ulprecio = document.createElement('ul');
Ulprecio.className = 'paquete-precio flex-centrar';
paquete_contenido.appendChild(Ulprecio);
for(const key in datos2){
  const li = document.createElement("li");
  li.textContent = datos2[key];
  if (clases2[key]) {
    li.className = clases2[key];
  } 
  Ulprecio.appendChild(li);
};

const liBoton = document.createElement('li');
const enlace = document.createElement('a');
enlace.href = '#';
const boton = document.createElement('button');
boton.className = 'btn';
boton.textContent = 'ver';

boton.onclick = () => {
  localStorage.setItem('MostrarDatosID',id);

  window.location.href = '../producto/index.html';
};
Ulprecio.appendChild(liBoton);
liBoton.appendChild(enlace);
enlace.appendChild(boton);
return {data,paquetes};
});
} else{
console.error("los paquetes no fueron encontrados",data);  
}
}