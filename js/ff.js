function saveFFStory() {
  let title = document.getElementById("ffTitle").value.trim();
  let character = document.getElementById("ffCharacter").value.trim();
  let genre = document.getElementById("ffGenre").value.trim();
  let story = document.getElementById("ffStory").value.trim();

  if (title === "" || character === "" || genre === "" || story === "") return;

  let stories = loadUserData("ffStories");

  stories.unshift({
    title: title,
    character: character,
    genre: genre,
    story: story
  });

  saveUserData("ffStories", stories);

  document.getElementById("ffTitle").value = "";
  document.getElementById("ffCharacter").value = "";
  document.getElementById("ffGenre").value = "";
  document.getElementById("ffStory").value = "";

  displayFFStories();
}

function displayFFStories() {
  let ffList = document.getElementById("ffList");
  ffList.innerHTML = "";

  let stories = loadUserData("ffStories");

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
      saveUserData("ffStories", stories);
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
