var tipo=document.querySelector("#tipo"),lugar=document.querySelector("#lugar"),sector=document.querySelector("#sector"),datosBusqueda={tipo:"",lugar:"",sector:""};function limpiarHTML(){for(var t=document.querySelector("#resultado");t.firstChild;)t.removeChild(t.firstChild)}function mostrarAvisos(t){limpiarHTML();var e=document.querySelector("#resultado");t.forEach((function(t){var r=document.createElement("div");r.className="bg-liqht card body m-4 ",r.innerHTML="\n            <p>".concat(t.tipo," - ").concat(t.sector," - ").concat(t.descripcion," - Precio: ").concat(t.precio," - Direccion: ").concat(t.lugar," - Contacto: ").concat(t.notas,"<p/>\n        "),e.appendChild(r)}))}function noResultado(){limpiarHTML();var t=document.createElement("div");t.classList.add("alerta","error"),t.appendChild(document.createTextNode("No hay Resultados")),document.querySelector("#resultado").appendChild(t)}function filtrarAviso(){var t=aviso.filter(filtrarTipo).filter(filtrarSector).filter(filtrarLugar);t.length?mostrarAvisos(t):noResultado()}function filtrarTipo(t){return datosBusqueda.tipo?t.tipo===datosBusqueda.tipo:t}function filtrarSector(t){return datosBusqueda.sector?t.sector===datosBusqueda.sector:t}function filtrarLugar(t){return datosBusqueda.lugar?t.lugar===datosBusqueda.lugar:t}document.addEventListener("DOMContentLoaded",(function(){mostrarAvisos(aviso)})),tipo.addEventListener("input",(function(t){datosBusqueda.tipo=t.target.value,filtrarAviso()})),sector.addEventListener("input",(function(t){datosBusqueda.sector=t.target.value,filtrarAviso()})),lugar.addEventListener("input",(function(t){datosBusqueda.lugar=t.target.value,filtrarAviso()}));
//# sourceMappingURL=index.65fcd9bc.js.map
