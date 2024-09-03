document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el elemento del DOM donde se mostrará el dato
    const dataSpan = document.getElementById("data");
  
    // Recupera el valor almacenado en localStorage con la clave "storedData"
    const storedData = localStorage.getItem("storedData");
  
    // Muestra el valor en el elemento span
    dataSpan.textContent = storedData ? storedData : "No hay datos almacenados";
  });
  