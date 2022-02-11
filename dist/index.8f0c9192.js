// Selectores
const tipo = document.querySelector('#tipo');
const lugar = document.querySelector('#lugar');
const sector = document.querySelector('#sector');
// Datos para la busqueda
const datosBusqueda = {
    tipo: '',
    lugar: '',
    sector: ''
};
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
});
// Event Listeners para el formulario
tipo.addEventListener('input', (e)=>{
    datosBusqueda.tipo = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});
sector.addEventListener('input', (e)=>{
    datosBusqueda.sector = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});
lugar.addEventListener('input', (e)=>{
    datosBusqueda.lugar = e.target.value;
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});
function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');
    // limpiar los resultados anteriores
    while(contenedor.firstChild)contenedor.removeChild(contenedor.firstChild);
}
function mostrarAutos(autos) {
    limpiarHTML();
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');
    // Construir el HTML de los autos
    autos.forEach((auto)=>{
        const autoHTML = document.createElement('p');
        //autoHTML.className ='card body';
        //autoHTML.classList.add('alert alert-success');
        autoHTML.innerHTML = `
            <p>${auto.tipo} - ${auto.sector} - ${auto.descripcion} - Precio: ${auto.precio} - Direccion: ${auto.lugar} - Contacto: ${auto.notas}</p><br/>
        `;
        contenedor.appendChild(autoHTML);
    });
}
function noResultado() {
    limpiarHTML();
    const noResultado1 = document.createElement('div');
    noResultado1.classList.add('alerta', 'error');
    noResultado1.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado1);
}
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarPuertas).filter(filtrarTransmision);
    //    console.log(resultado);
    if (resultado.length) mostrarAutos(resultado);
    else noResultado();
}
// Aplica los filtros
function filtrarMarca(auto) {
    if (datosBusqueda.tipo) return auto.tipo === datosBusqueda.tipo;
    return auto;
}
function filtrarPuertas(auto) {
    if (datosBusqueda.sector) return auto.sector === datosBusqueda.sector;
    return auto;
}
function filtrarTransmision(auto) {
    if (datosBusqueda.lugar) return auto.lugar === datosBusqueda.lugar;
    return auto;
}

//# sourceMappingURL=index.8f0c9192.js.map
