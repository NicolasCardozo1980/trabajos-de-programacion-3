// Código TypeScript adicional aquí
// Obtener elementos del DOM
var newTaskInput = document.getElementById('newTaskInput');
var addTaskButton = document.getElementById('addTaskButton');
var taskList = document.getElementById('taskList');
// Evento de clic para agregar tarea
addTaskButton.addEventListener('click', function () {
    var taskName = newTaskInput.value.trim();
    if (taskName !== '') {
        // Crear nuevo elemento de lista
        var newTaskItem = document.createElement('li');
        newTaskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTaskItem.textContent = taskName;
        // Crear span para el badge
        var badgeSpan = document.createElement('span');
        badgeSpan.className = 'badge badge-primary';
        badgeSpan.textContent = 'Alta';
        // Agregar badge al elemento de lista
        newTaskItem.appendChild(badgeSpan);
        // Agregar elemento de lista al ul
        taskList.appendChild(newTaskItem);
        // Limpiar el campo de entrada
        newTaskInput.value = '';
    }
});
