function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let tasks = loadUserData("tasks");

  tasks.push({
    text: taskText,
    done: false
  });

  saveUserData("tasks", tasks);

  input.value = "";
  displayTasks();
}

function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = loadUserData("tasks");

  tasks.forEach(function(task, index) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    checkbox.onchange = function() {
      tasks[index].done = checkbox.checked;
      saveUserData("tasks", tasks);
      displayTasks();
    };

    let span = document.createElement("span");
    span.textContent = task.text;
    span.style.marginRight = "6px";

    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      tasks.splice(index, 1);
      saveUserData("tasks", tasks);
      displayTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

displayTasks();
