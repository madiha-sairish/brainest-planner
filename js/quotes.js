const defaultQuotes = [
  "Small progress is still progress.",
  "Discipline beats motivation.",
  "Dream big, start small.",
  "Your future is built today.",
  "Stay soft and strong.",
  "Keep going, you are growing."
];

function showQuote() {
  let randomIndex = Math.floor(Math.random() * defaultQuotes.length);
  document.getElementById("quoteDisplay").textContent = defaultQuotes[randomIndex];
}

function saveCustomQuote() {
  let input = document.getElementById("customQuoteInput");
  let quoteText = input.value.trim();

  if (quoteText === "") return;

  let saved = loadUserData("customQuotes");

  saved.unshift(quoteText);

  saveUserData("customQuotes", saved);

  input.value = "";
  displaySavedQuotes();
}

function displaySavedQuotes() {
  let savedQuotes = document.getElementById("savedQuotes");
  savedQuotes.innerHTML = "";

  let saved = loadUserData("customQuotes");

  saved.forEach(function(quote, index) {
    let card = document.createElement("div");
    card.className = "quote-card";

    let text = document.createElement("p");
    text.textContent = quote;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      saved.splice(index, 1);
      saveUserData("customQuotes", saved);
      displaySavedQuotes();
    };

    card.appendChild(text);
    card.appendChild(deleteBtn);

    savedQuotes.appendChild(card);
  });
}

displaySavedQuotes();
