const datos = [
    { id: 1, nombre: "Juan", apellido: "Pérez", correo: "juan.perez@example.com", telefono: "1234567890", comentario: "Comentario 1" },
    { id: 2, nombre: "María", apellido: "González", correo: "maria.gonzalez@example.com", telefono: "0987654321", comentario: "Comentario 2" },
    { id: 3, nombre: "Carlos", apellido: "Ramírez", correo: "carlos.ramirez@example.com", telefono: "1122334455", comentario: "Comentario 3" },
    { id: 4, nombre: "Ana", apellido: "Martínez", correo: "ana.martinez@example.com", telefono: "2233445566", comentario: "Comentario 4" },
    { id: 5, nombre: "Luis", apellido: "Fernández", correo: "luis.fernandez@example.com", telefono: "3344556677", comentario: "Comentario 5" }
];

const tabla = document.querySelector('#tabla');

function crearTabla() {
    let cadena = "<table>";
    cadena += "<thead><tr>";
    cadena += "<th>ID</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Teléfono</th><th>Comentario</th><th>Acción</th>";
    cadena += "</tr></thead><tbody>";

    for (const dato of datos) {
        cadena += `<tr>
            <td>${dato.id}</td>
            <td>${dato.nombre}</td>
            <td>${dato.apellido}</td>
            <td>${dato.correo}</td>
            <td>${dato.telefono}</td>
            <td>${dato.comentario}</td>
            <td><button class="btn-eliminar" onclick="eliminarFila(this)">🗑️</button></td>
        </tr>`;
    }

    cadena += "</tbody></table>";
    tabla.innerHTML = cadena;
}

function eliminarFila(boton) {
    const fila = boton.parentElement.parentElement;
    fila.remove();
}

crearTabla();

function mostrarModal() {
    document.getElementById('contenedor-formulario').style.display = 'flex';
}

function cerrarFormulario() {
    document.getElementById('contenedor-formulario').style.display = 'none';
}

function agregarFila() {
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const comentario = document.getElementById("comentario").value;

    if (id && nombre && apellido && correo && telefono && comentario) {
        const body = tabla.getElementsByTagName("tbody")[0];
        const nuevaFila = body.insertRow();
        nuevaFila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            <td>${telefono}</td>
            <td>${comentario}</td>
            <td><button class="btn-eliminar" onclick="eliminarFila(this)">🗑️</button></td>
        `;
        document.getElementById("formulario").reset();
    } else {
        alert('Datos incompletos');
    }
}
