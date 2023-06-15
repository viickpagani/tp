window.onload = loadTasks;

document.querySelectorAll("form").forEach((form, index) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask(e, index);
    });
});

function loadTasks() {
    // Nenhuma ação necessária sem o armazenamento local
}

function addTask(e, index) {
    const target = e.target;
    const task = target.querySelector("input");
    const list = target.parentElement.querySelector("ul");

    if (task.value === "") {
        alert("Adicione um horário!");
        return false;
    }

    if (target.querySelector(`input[value="${task.value}"]`)) {
        alert("Horário já existente!");
        return false;
    }

    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
      <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
      <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
    task.value = "";
}

function taskComplete(event) {
    event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
    event.parentElement.remove();
}

// store current task to track changes
var currentTask = null;

// get current task
function getCurrentTask(event) {
    currentTask = event.value;
}

// edit the task
function editTask(event) {
    // No localStorage, apenas limpe o valor do campo
    event.value = "";
}