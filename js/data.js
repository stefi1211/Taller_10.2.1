document.addEventListener("DOMContentLoaded", () => {
    const dataSpan = document.getElementById("data");
    const storedData = localStorage.getItem("storedData");
    dataSpan.textContent = storedData ? storedData : "No hay datos almacenados";
  });
  