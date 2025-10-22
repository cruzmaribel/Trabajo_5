// script.js

function irAPais() {
  const pais = document.getElementById("pais").value.toLowerCase().trim();
  const nombre = document.getElementById("nombre").value.trim();

  // Mapeo de países con sus archivos index respectivos
  const destinos = {
    mexico: "index1.html",
    argentina: "index2.html",
    chile: "index3.html",
    peru: "index4.html",
    brasil: "index5.html",
    bolivia: "index6.html",
    francia: "index7.html"
  };

  if (!nombre) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  if (destinos[pais]) {
    // Guarda nombre y país para usar en la siguiente página
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("pais", pais.charAt(0).toUpperCase() + pais.slice(1));
    window.location.href = destinos[pais];
  } else {
    alert("Ese país no está disponible. Escribe: México, Argentina, Chile, Francia, Brasil, Perú o Bolivia.");
  }
}

// Mostrar saludo personalizado en las páginas de países
document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("nombre");
  const pais = localStorage.getItem("pais");
  const saludo = document.getElementById("saludo");
  const mensaje = document.getElementById("mensaje");

  if (saludo && nombre && pais) {
    saludo.textContent = `¡Bienvenido ${nombre} a ${pais}!`;
  }

  if (mensaje && nombre && pais) {
    mensaje.textContent = `${nombre} quiere visitar ${pais}`;
  }
});
