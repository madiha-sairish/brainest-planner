function loadProgress() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let total = tasks.length;
  let completed = tasks.filter(task => task.done).length;

  let percentage = 0;
  if (total > 0) {
    percentage = Math.round((completed / total) * 100);
  }

  document.getElementById("totalTasks").textContent = total;
  document.getElementById("completedTasks").textContent = completed;
  document.getElementById("progressText").textContent = percentage + "%";
  document.getElementById("progressFill").style.width = percentage + "%";
}

loadProgress();
