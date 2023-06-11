// Función para mostrar el snackbar
function showSnackbar() {
  const snackbar = document.getElementById("snackbar");
  if (snackbar !== null) {
    snackbar.classList.add("show");
    setTimeout(function() {
      snackbar.classList.remove("show");
    }, 3000);
  }
}

// Manejador de evento para redirigir a la página de detalles de precios
function redirectToPrices() {
  window.location.href = "precios.html";
}

// Manejador de evento para el envío del formulario de pregunta
function submitForm(event: Event) {
  event.preventDefault();
  const preguntaInput = document.getElementById("pregunta") as HTMLInputElement;
  if (preguntaInput !== null) {
    const pregunta = preguntaInput.value.trim();

    if (pregunta !== "") {
      // Aquí puedes realizar las acciones necesarias con la pregunta
      console.log("Pregunta enviada:", pregunta);
      preguntaInput.value = "";
    }
  }
}

// Manejador de evento para el cambio de opción en la caja de comandos
function handleSortSelect(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  if (selectElement !== null) {
    const selectedValue = selectElement.value;

    // Aquí puedes realizar las acciones necesarias para ordenar los productos
    console.log("Orden seleccionado:", selectedValue);
  }
}

// Asignar los manejadores de eventos una vez que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
  const formPregunta = document.getElementById("form-pregunta");
  if (formPregunta !== null) {
    formPregunta.addEventListener("submit", submitForm);
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect !== null) {
    sortSelect.addEventListener("change", handleSortSelect);
  }
});
