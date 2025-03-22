var contenedor=document.getElementById("contenido");
contenedor.innerText="este mensaje viene de javascript";

function mostrarmensaje(){
    alert("hola, java script es aburrido");
}
function leervalor(){
    const input=document.getElementById("unInput");
    const valor=input.value;
    alert("el valor es " + valor);

}