function loadArchive() {
  loadTasksArchive();
  loadDiaryArchive();
  loadMoodArchive();
  loadQuotesArchive();
  loadExtraArchive();
  loadFFArchive();
}

function loadTasksArchive() {
  let tasks = loadUserData("tasks");
  let container = document.getElementById("archiveTasks");
  container.innerHTML = "";

  if (tasks.length === 0) {
    container.innerHTML = "<p>No saved tasks yet.</p>";
    return;
  }

  tasks.forEach(function(task) {
    let card = document.createElement("div");
    card.className = "archive-card";

    let text = document.createElement("p");
    text.textContent = (task.done ? "✅ " : "⬜ ") + task.text;

    card.appendChild(text);
    container.appendChild(card);
  });
}

function loadDiaryArchive() {
  let entries = loadUserData("diaryEntries");
  let container = document.getElementById("archiveDiary");
  container.innerHTML = "";

  if (entries.length === 0) {
    container.innerHTML = "<p>No diary entries yet.</p>";
    return;
  }

  entries.forEach(function(entry) {
    let card = document.createElement("div");
    card.className = "archive-card";

    let title = document.createElement("h4");
    title.textContent = entry.date;

    let text = document.createElement("p");
    text.textContent = entry.text;

    card.appendChild(title);
    card.appendChild(text);
    container.appendChild(card);
  });
}

function loadMoodArchive() {
  let moods = loadUserData("moodEntries");
  let container = document.getElementById("archiveMood");
  container.innerHTML = "";

  if (moods.length === 0) {
    container.innerHTML = "<p>No mood history yet.</p>";
    return;
  }

  moods.forEach(function(entry) {
    let card = document.createElement("div");
    card.className = "archive-card";

    let text = document.createElement("p");
    text.textContent = entry.date + " - " + entry.mood;

    card.appendChild(text);
    container.appendChild(card);
  });
}

function loadQuotesArchive() {
  let quotes = loadUserData("customQuotes");
  let container = document.getElementById("archiveQuotes");
  container.innerHTML = "";

  if (quotes.length === 0) {
    container.innerHTML = "<p>No saved quotes yet.</p>";
    return;
  }

  quotes.forEach(function(quote) {
    let card = document.createElement("div");
    card.className = "archive-card";

    let text = document.createElement("p");
    text.textContent = quote;

    card.appendChild(text);
    container.appendChild(card);
  });
}

function loadExtraArchive() {
  let notes = loadUserData("extraNotes");
  let container = document.getElementById("archiveExtra");
  container.innerHTML = "";

  if (notes.length === 0) {
    container.innerHTML = "<p>No extra notes yet.</p>";
    return;
  }

  notes.forEach(function(note) {
    let card = document.createElement("div");
    card.className = "archive-card";

    let text = document.createElement("p");
    text.textContent = note;

    card.appendChild(text);
    container.appendChild(card);
  });
}

function loadFFArchive() {
  let stories = loadUserData("ffStories");
  let container = document.getElementById("archiveFF");

  if (!container) return;

  container.innerHTML = "";

  if (stories.length === 0) {
    container.innerHTML = "<p>No fan fiction stories yet.</p>";
    return;
  }

  stories.forEach(function(entry) {
    let card = document.createElement("div");
    card.className = "archive-card";

    let title = document.createElement("h4");
    title.textContent = entry.title;

    let character = document.createElement("p");
    character.textContent = "Character: " + entry.character;

    let genre = document.createElement("p");
    genre.textContent = "Genre: " + entry.genre;

    let story = document.createElement("p");
    story.textContent = entry.story;

    card.appendChild(title);
    card.appendChild(character);
    card.appendChild(genre);
    card.appendChild(story);

    container.appendChild(card);
  });
}

loadArchive();
