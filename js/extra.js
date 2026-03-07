function saveExtraNote() {
  let input = document.getElementById("extraInput");
  let text = input.value;

  if (text === "") return;

  let notes = JSON.parse(localStorage.getItem("extraNotes")) || [];

  notes.unshift(text);

  localStorage.setItem("extraNotes", JSON.stringify(notes));

  input.value = "";
  displayExtraNotes();
}

function displayExtraNotes() {
  let extraList = document.getElementById("extraList");
  extraList.innerHTML = "";

  let notes = JSON.parse(localStorage.getItem("extraNotes")) || [];

  notes.forEach(function(note, index) {
    let card = document.createElement("div");
    card.className = "extra-card";

    let text = document.createElement("p");
    text.textContent = note;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      notes.splice(index, 1);
      localStorage.setItem("extraNotes", JSON.stringify(notes));
      displayExtraNotes();
    };

    card.appendChild(text);
    card.appendChild(deleteBtn);

    extraList.appendChild(card);
  });
}

displayExtraNotes();
