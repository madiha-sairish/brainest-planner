function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === "") return;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push({text:taskText, done:false});

localStorage.setItem("tasks", JSON.stringify(tasks));

displayTasks();

input.value = "";
}

function displayTasks(){

let taskList = document.getElementById("taskList");
taskList.innerHTML = "";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(function(task,index){

let li = document.createElement("li");

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = task.done;

checkbox.onchange = function(){

tasks[index].done = checkbox.checked;

localStorage.setItem("tasks", JSON.stringify(tasks));

displayTasks();

};

let span = document.createElement("span");
span.textContent = task.text;

if(task.done){
span.style.textDecoration = "line-through";
span.style.color = "gray";
}

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){

tasks.splice(index,1);

localStorage.setItem("tasks", JSON.stringify(tasks));

displayTasks();

};

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

displayTasks();
