const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filters = document.querySelectorAll(".filter");
const themeToggle = document.getElementById("toggle-theme");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (currentFilter === "done") return task.done;
    if (currentFilter === "todo") return !task.done;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleDone(${index})">✔️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    taskInput.value = "";
    renderTasks();
  }
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

renderTasks();
