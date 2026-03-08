function saveDiary() {
  let date = document.getElementById("diaryDate").value;
  let text = document.getElementById("diaryInput").value.trim();

  if (date === "" || text === "") return;

  let entries = loadUserData("diaryEntries");

  entries.unshift({
    date: date,
    text: text
  });

  saveUserData("diaryEntries", entries);

  document.getElementById("diaryInput").value = "";
  document.getElementById("diaryDate").value = "";

  displayDiary();
}

function displayDiary() {
  let diaryList = document.getElementById("diaryList");
  diaryList.innerHTML = "";

  let entries = loadUserData("diaryEntries");

  entries.forEach(function(entry, index) {
    let card = document.createElement("div");
    card.className = "diary-card";

    let date = document.createElement("h3");
    date.textContent = entry.date;

    let text = document.createElement("p");
    text.textContent = entry.text;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      entries.splice(index, 1);
      saveUserData("diaryEntries", entries);
      displayDiary();
    };

    card.appendChild(date);
    card.appendChild(text);
    card.appendChild(deleteBtn);

    diaryList.appendChild(card);
  });
}

displayDiary();
