document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList") as HTMLUListElement;
  const addTaskButton = document.getElementById("addTaskButton") as HTMLButtonElement;
  const newTaskInput = document.getElementById("newTaskInput") as HTMLInputElement;

  addTaskButton.addEventListener("click", () => {
    const taskName = newTaskInput.value;
    if (taskName) {
      const taskItem = createTaskItem(taskName);
      taskList.appendChild(taskItem);
      newTaskInput.value = "";
    }
  });

  function createTaskItem(taskName: string): HTMLLIElement {
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    taskItem.textContent = taskName;

    const badge = document.createElement("span");
    badge.classList.add("badge", "badge-primary");
    badge.textContent = "Alta";

    taskItem.appendChild(badge);
    return taskItem;
  }
});
