function saveMood(selectedMood) {
  let today = new Date().toISOString().split("T")[0];

  let moods = JSON.parse(localStorage.getItem("moodEntries")) || [];

  moods.unshift({
    date: today,
    mood: selectedMood
  });

  localStorage.setItem("moodEntries", JSON.stringify(moods));

  displayMoods();
}

function displayMoods() {
  let moodList = document.getElementById("moodList");
  moodList.innerHTML = "";

  let moods = JSON.parse(localStorage.getItem("moodEntries")) || [];

  moods.forEach(function(entry, index) {
    let card = document.createElement("div");
    card.className = "mood-card";

    let date = document.createElement("h3");
    date.textContent = entry.date;

    let moodText = document.createElement("p");
    moodText.textContent = entry.mood;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      moods.splice(index, 1);
      localStorage.setItem("moodEntries", JSON.stringify(moods));
      displayMoods();
    };

    card.appendChild(date);
    card.appendChild(moodText);
    card.appendChild(deleteBtn);

    moodList.appendChild(card);
  });
}

displayMoods();
