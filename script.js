const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function updateEmptyMessage() {
  const emptyMessage = taskList.querySelector(".empty-message");
  const tasks = taskList.querySelectorAll(".task-item");

  if (tasks.length === 0) {
    if (!emptyMessage) {
      const li = document.createElement("li");

      li.className = "empty-message";
      li.textContent = "No tasks yet. Add your first task!";

      taskList.appendChild(li);
    }
  } else if (emptyMessage) {
    emptyMessage.remove();
  }
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  // Prevent empty tasks
  if (taskText === "") {
    taskInput.focus();
    return;
  }

  // Create task item
  const li = document.createElement("li");
  li.className = "task-item";

  // Create task text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.type = "button";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateEmptyMessage();
  });

  // Add elements to the list
  li.append(span, deleteBtn);
  taskList.appendChild(li);

  // Clear input after adding
  taskInput.value = "";
  taskInput.focus();

  updateEmptyMessage();
});
