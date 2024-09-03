document.addEventListener("DOMContentLoaded", () => {
    // Obtiene referencias a los elementos del DOM
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
  
    // Configura un evento para el botón
    buttonText.addEventListener("click", () => {
      // Obtiene el valor del campo de texto
      const text = inputText.value;
  
      // Almacena el valor en localStorage con la clave "storedData"
      localStorage.setItem("storedData", text);
  
      // Opcional: Limpia el campo de texto después de guardar
      inputText.value = "";
    });
  });
  