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
    mostrarAvisos(aviso);
});
// Event Listeners para el formulario
tipo.addEventListener('input', (e)=>{
    datosBusqueda.tipo = e.target.value;
    // Mandar llamar la función de filtrar avisos
    filtrarAviso();
});
sector.addEventListener('input', (e)=>{
    datosBusqueda.sector = e.target.value;
    // Mandar llamar la función de filtrar avisos
    filtrarAviso();
});
lugar.addEventListener('input', (e)=>{
    datosBusqueda.lugar = e.target.value;
    // Mandar llamar la función de filtrar avisos
    filtrarAviso();
});
function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');
    // limpiar los resultados anteriores
    while(contenedor.firstChild)contenedor.removeChild(contenedor.firstChild);
}
function mostrarAvisos(avisos) {
    limpiarHTML();
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');
    // Construir el HTML de los avisos
    avisos.forEach((aviso)=>{
        const avisoHTML = document.createElement('div');
        avisoHTML.className = 'bg-liqht card body m-4 ';
        //avisoHTML.classList.add('alert alert-success');
        avisoHTML.innerHTML = `
            <p>${aviso.tipo} - ${aviso.sector} - ${aviso.descripcion} - Precio: ${aviso.precio} - Direccion: ${aviso.lugar} - Contacto: ${aviso.notas}<p/>
        `;
        contenedor.appendChild(avisoHTML);
    });
}
function noResultado() {
    limpiarHTML();
    const noResultado1 = document.createElement('div');
    noResultado1.classList.add('alerta', 'error');
    noResultado1.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado1);
}
function filtrarAviso() {
    const resultado = aviso.filter(filtrarTipo).filter(filtrarSector).filter(filtrarLugar);
    //    console.log(resultado);
    if (resultado.length) mostrarAvisos(resultado);
    else noResultado();
}
// Aplica los filtros
function filtrarTipo(aviso) {
    if (datosBusqueda.tipo) return aviso.tipo === datosBusqueda.tipo;
    return aviso;
}
function filtrarSector(aviso) {
    if (datosBusqueda.sector) return aviso.sector === datosBusqueda.sector;
    return aviso;
}
function filtrarLugar(aviso) {
    if (datosBusqueda.lugar) return aviso.lugar === datosBusqueda.lugar;
    return aviso;
}

//# sourceMappingURL=index.de5c0784.js.map
