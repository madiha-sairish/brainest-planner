function saveFFStory() {
  let title = document.getElementById("ffTitle").value;
  let character = document.getElementById("ffCharacter").value;
  let genre = document.getElementById("ffGenre").value;
  let story = document.getElementById("ffStory").value;

  if (title === "" || character === "" || genre === "" || story === "") return;

  let stories = JSON.parse(localStorage.getItem("ffStories")) || [];

  stories.unshift({
    title: title,
    character: character,
    genre: genre,
    story: story
  });

  localStorage.setItem("ffStories", JSON.stringify(stories));

  document.getElementById("ffTitle").value = "";
  document.getElementById("ffCharacter").value = "";
  document.getElementById("ffGenre").value = "";
  document.getElementById("ffStory").value = "";

  displayFFStories();
}

function displayFFStories() {
  let ffList = document.getElementById("ffList");
  ffList.innerHTML = "";

  let stories = JSON.parse(localStorage.getItem("ffStories")) || [];

  stories.forEach(function(entry, index) {
    let card = document.createElement("div");
    card.className = "ff-card";

    let title = document.createElement("h3");
    title.textContent = entry.title;

    let character = document.createElement("p");
    character.innerHTML = "<strong>Character:</strong> " + entry.character;

    let genre = document.createElement("p");
    genre.innerHTML = "<strong>Genre:</strong> " + entry.genre;

    let story = document.createElement("p");
    story.textContent = entry.story;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
      stories.splice(index, 1);
      localStorage.setItem("ffStories", JSON.stringify(stories));
      displayFFStories();
    };

    card.appendChild(title);
    card.appendChild(character);
    card.appendChild(genre);
    card.appendChild(story);
    card.appendChild(deleteBtn);

    ffList.appendChild(card);
  });
}

displayFFStories();
