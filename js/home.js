function loadHomeDashboard() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let diaryEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  let customQuotes = JSON.parse(localStorage.getItem("customQuotes")) || [];
  let extraNotes = JSON.parse(localStorage.getItem("extraNotes")) || [];

  let totalTasks = tasks.length;
  let completedTasks = tasks.filter(task => task.done).length;

  document.getElementById("homeTotalTasks").textContent = totalTasks;
  document.getElementById("homeCompletedTasks").textContent = completedTasks;

  if (moodEntries.length > 0) {
    document.getElementById("homeLatestMood").textContent =
      moodEntries[0].date + " - " + moodEntries[0].mood;
  }

  if (diaryEntries.length > 0) {
    document.getElementById("homeLatestDiary").textContent =
      diaryEntries[0].date + " - " + diaryEntries[0].text;
  }

  document.getElementById("homeQuotesCount").textContent = customQuotes.length;
  document.getElementById("homeExtraCount").textContent = extraNotes.length;
}

loadHomeDashboard();
