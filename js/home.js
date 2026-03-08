function loadHomeDashboard() {
  let tasks = loadUserData("tasks");
  let diaryEntries = loadUserData("diaryEntries");
  let moodEntries = loadUserData("moodEntries");
  let customQuotes = loadUserData("customQuotes");
  let extraNotes = loadUserData("extraNotes");
  let currentUser = localStorage.getItem("currentUser");
document.getElementById("welcomeUser").textContent =
"Logged in as: " + currentUser;
  let totalTasks = tasks.length;
  let completedTasks = tasks.filter(task => task.done).length;

  document.getElementById("homeTotalTasks").textContent = totalTasks;
  document.getElementById("homeCompletedTasks").textContent = completedTasks;

  if (moodEntries.length > 0) {
    document.getElementById("homeLatestMood").textContent =
      moodEntries[0].date + " - " + moodEntries[0].mood;
  } else {
    document.getElementById("homeLatestMood").textContent = "No mood saved yet.";
  }

  if (diaryEntries.length > 0) {
    document.getElementById("homeLatestDiary").textContent =
      diaryEntries[0].date + " - " + diaryEntries[0].text;
  } else {
    document.getElementById("homeLatestDiary").textContent = "No diary entry yet.";
  }

  document.getElementById("homeQuotesCount").textContent = customQuotes.length;
  document.getElementById("homeExtraCount").textContent = extraNotes.length;
}

loadHomeDashboard();
