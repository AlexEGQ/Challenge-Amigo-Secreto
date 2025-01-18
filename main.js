// Inicializa un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para cargar nombres en la lista
function cargarNombres() {
    // Obtiene el valor del campo de entrada con id "nombresAgregados"
    let nombres = document.getElementById("nombresAgregados").value;
    
    // Verifica si el nombre no está vacío y no está ya en la lista de amigos
    if (nombres && amigos.indexOf(nombres) === -1) {
        // Agrega el nombre al array de amigos
        amigos.push(nombres);
        
        // Actualiza la lista de amigos en el DOM
        actualizarListaDeAmigos();
        
        // Limpia el campo de entrada
        document.getElementById("nombresAgregados").value = "";
    } else if (amigos.indexOf(nombres) !== -1) {
        // Muestra una alerta si el nombre ya existe en la lista
        alert("El nombre ya existe");
    } else {
        // Muestra una alerta si el campo de entrada está vacío
        alert("Por favor, ingrese un nombre");
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaDeAmigos() {
    // Obtiene el elemento de la lista con id "listaDeAmigos"
    let lista = document.getElementById("listaDeAmigos");
    
    // Limpia la lista existente
    lista.innerHTML = "";
    
    // Itera sobre el array amigos y agrega cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento de lista (li)
        let li = document.createElement("li");
        
        // Establece el texto del nuevo elemento de lista al nombre del amigo
        li.textContent = amigos[i];
        
        // Añade el nuevo elemento de lista a la lista en el DOM
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verifica si hay nombres en la lista de amigos
    if (amigos.length > 0) {
        // Genera un índice aleatorio basado en la longitud de la lista de amigos
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // Obtiene el nombre del amigo secreto usando el índice aleatorio
        let amigoSecreto = amigos[indiceAleatorio];
        
        // Muestra el nombre del amigo secreto en el elemento con id "nombreAmigoSecreto"
        document.getElementById("nombreAmigoSecreto").textContent = amigoSecreto;
        
        // Muestra el contenedor del resultado del sorteo
        document.getElementById("resultadoAmigoSecreto").classList.remove("resultado-oculto");
        
        // Limpia la lista de amigos y el contenido del elemento de lista en el DOM
        amigos = [];
        document.getElementById("listaDeAmigos").innerHTML = "";
    } else {
        // Muestra una alerta si no hay nombres en la lista para sortear
        alert("No hay nombres en la lista para sortear.");
    }
}

// Añadir evento al botón de sortear amigo
document.querySelector('.sortearAmigo').addEventListener('click', sortearAmigo);

