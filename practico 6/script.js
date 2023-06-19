// TypeScript Code
document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    if (!taskInput || !taskList) {
        throw new Error("No se encontraron los elementos HTML necesarios.");
    }
    // Agregar tarea al presionar Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var taskText = taskInput.value;
            if (taskText !== "") {
                var listItem = document.createElement("li");
                listItem.className = "list-group-item";
                var taskItem = document.createElement("div");
                taskItem.className = "task-item";
                var taskSpan = document.createElement("span");
                taskSpan.className = "task-text";
                taskSpan.textContent = taskText;
                var deleteButton = document.createElement("button");
                deleteButton.className = "delete-button";
                var deleteIcon = document.createElement("i");
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
        var deleteButton = event.target;
        if (deleteButton.classList.contains("delete-button")) {
            var listItem = deleteButton.closest(".list-group-item");
            if (listItem) {
                listItem.remove();
            }
        }
    });
});
