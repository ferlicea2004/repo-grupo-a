
//funcioness
function llamaDoubleClick(event){
    cuadromorado.textContent='Hiciste doble click';
}

function logEvent(event) {
    console.log(`El evento ${event.type} fue disparado`);
}

function agregarclase(event){
    cuadrocyan.classList.add('clasenueva');
}

const cuadromorado=document.querySelector('#miId');
//const cuadromorado=document.getElementById('miId')
cuadromorado.textContent='Este texto viene de JavaScript';
cuadromorado.innerText='Este texto reemplaza al anterior';
cuadromorado.innerHTML='<h1>Esto es un titulo</h1>'

const cuadrocyan=document.querySelector('.miclase');
cuadrocyan.textContent='contenido en mi clase';

//Eventos

//de forma anonima
cuadromorado.addEventListener('click', () => {
    cuadromorado.textContent='Hiciste click en el cuadro morado';
});

//con nombre de una funcion
cuadromorado.addEventListener('dblclick', llamaDoubleClick);
cuadromorado.addEventListener('mouseover', logEvent);
cuadromorado.addEventListener('mousedown', logEvent);
cuadromorado.addEventListener('mouseout', logEvent);

cuadrocyan.addEventListener('dblclick', agregarclase);


