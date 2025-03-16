// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];




function agregarAmigo(){
    let boton = document.getElementById("boton-accion");
    if (boton.textContent === "Reiniciar") {
        reiniciarJuego();
        return;
    }


    //obtener el valor imput
     let nombre = document.getElementById("amigoescrito").value.trim();

     if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;}
    
           
     // Verificar que el nombre no esté repetido
     if (listaAmigos.includes(listaAmigos)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    // Agregar el nombre al array
    listaAmigos.push(nombre); 
    
    // Actualizar la lista en pantalla
    actualizarLista()
    console.log(listaAmigos);
     // Asegurar que la lista sea visible
     document.getElementById("listaAmigos").style.display = "block";

     document.getElementById("amigoescrito").value = "";
    
// Limpiar el input
document.getElementById("amigoescrito").value = "";
}

function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar nombre
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("delete-btn");
        botonEliminar.onclick = function () {
            eliminarNombre(index);
        };

        li.appendChild(botonEliminar);
        ul.appendChild(li);
    });
}

function eliminarNombre(index) {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");
        return;
    }
    listaAmigos.splice(index, 1); 
    // Elimina el nombre del array
    actualizarLista(); 
    
    // Refresca la lista en pantalla
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El ganador es: <li>${amigoSorteado}</li>`;
    document.getElementById("listaAmigos").style.display = "none";
    document.getElementById("boton-accion").textContent = "Reiniciar";


};

function reiniciarJuego() {
    listaAmigos = []; // Vaciar la lista
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la pantalla
    document.getElementById("resultado").innerHTML = ""; // Borrar el resultado del sorteo
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista vacía
    document.getElementById("boton-accion").textContent = "Añadir"; // Volver a "Añadir"
}





