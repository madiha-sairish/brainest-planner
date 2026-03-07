function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === "") return;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push(taskText);

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

li.textContent = task;

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){

tasks.splice(index,1);

localStorage.setItem("tasks", JSON.stringify(tasks));

displayTasks();

};

li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

displayTasks();
