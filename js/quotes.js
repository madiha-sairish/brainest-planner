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
  let quoteText = input.value;

  if (quoteText === "") return;

  let saved = JSON.parse(localStorage.getItem("customQuotes")) || [];
  saved.unshift(quoteText);

  localStorage.setItem("customQuotes", JSON.stringify(saved));

  input.value = "";
  displaySavedQuotes();
}

function displaySavedQuotes() {
  let savedQuotes = document.getElementById("savedQuotes");
  savedQuotes.innerHTML = "";

  let saved = JSON.parse(localStorage.getItem("customQuotes")) || [];

  saved.forEach(function(quote, index) {
    let card = document.createElement("div");
    card.className = "quote-card";

    let text = document.createElement("p");
    text.textContent = quote;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      saved.splice(index, 1);
      localStorage.setItem("customQuotes", JSON.stringify(saved));
      displaySavedQuotes();
    };

    card.appendChild(text);
    card.appendChild(deleteBtn);

    savedQuotes.appendChild(card);
  });
}

displaySavedQuotes();
