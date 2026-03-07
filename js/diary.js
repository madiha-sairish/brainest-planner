function saveDiary() {
  let date = document.getElementById("diaryDate").value;
  let text = document.getElementById("diaryInput").value;

  if (date === "" || text === "") return;

  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

  entries.unshift({
    date: date,
    text: text
  });

  localStorage.setItem("diaryEntries", JSON.stringify(entries));

  document.getElementById("diaryInput").value = "";
  document.getElementById("diaryDate").value = "";

  displayDiary();
}

function displayDiary() {
  let diaryList = document.getElementById("diaryList");
  diaryList.innerHTML = "";

  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

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
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
      displayDiary();
    };

    card.appendChild(date);
    card.appendChild(text);
    card.appendChild(deleteBtn);

    diaryList.appendChild(card);
  });
}

displayDiary();
