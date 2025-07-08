
// script.js - Validación básica
// Guarda este bloque en un archivo separado llamado 'script.js'
function verificarEdad() {
  const esMayor = confirm("¿Tienes más de 18 años?");
  if (esMayor) {
    window.location.href = "explorar.html";
  } else {
    alert("Lo sentimos, este contenido es solo para mayores de edad.");
  }
}
