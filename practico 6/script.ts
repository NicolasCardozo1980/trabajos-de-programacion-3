// TypeScript Code
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement | null;
  const taskList = document.getElementById("taskList");

  if (!taskInput || !taskList) {
    throw new Error("No se encontraron los elementos HTML necesarios.");
  }

  // Agregar tarea al presionar Enter
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const taskText = taskInput.value;
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";

        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        const taskSpan = document.createElement("span");
        taskSpan.className = "task-text";
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";

        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash";

        deleteButton.appendChild(deleteIcon);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        listItem.appendChild(taskItem);
        taskList.appendChild(listItem);

        taskInput.value = "";
      }
    }
  });

  // Eliminar tarea
  taskList.addEventListener("click", function (event) {
    const deleteButton = event.target as HTMLElement;
    if (deleteButton.classList.contains("delete-button")) {
      const listItem = deleteButton.closest(".list-group-item");
      if (listItem) {
        listItem.remove();
      }
    }
  });
});
