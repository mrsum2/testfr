const games = {
  "Vertical Dash": '<iframe src="https://www.jopi.com/gam/go-up-dash/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Mini Golf": '<iframe src="https://www.jopi.com/gam/pixel-mini-golf/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Key Quest": '<iframe src="https://www.jopi.com/gam/key-quest/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Space Slide": '<iframe src="https://www.jopi.com/gam/space-slide/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
};

const fullscreen = document.getElementById("fullscreen");
const closeFullscreen = document.getElementById("closeFullscreen");
const gameEmbed = document.getElementById("gameEmbed");
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const gamesList = document.getElementById("gamesList");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

// Initially hide the loading screen
window.onload = () => {
  loadingScreen.classList.add("hidden");
  loadGamesList(); // Populate the list of games when the site loads
};

// Populate games as buttons
function loadGamesList() {
  for (const gameKey in games) {
    const button = document.createElement("button");
    button.textContent = gameKey;
    button.addEventListener("click", () => loadGame(gameKey));
    gamesList.appendChild(button);
  }
}

// Handle search functionality
searchButton.addEventListener("click", () => {
  const query = searchBar.value.trim().toLowerCase();
  gamesList.innerHTML = ""; // Clear previous buttons

  for (const gameKey in games) {
    if (gameKey.toLowerCase().includes(query)) {
      const button = document.createElement("button");
      button.textContent = gameKey;
      button.addEventListener("click", () => loadGame(gameKey));
      gamesList.appendChild(button);
    }
  }

  if (gamesList.innerHTML === "") {
    gamesList.innerHTML = "<p style='color: white;'>No games found for your search.</p>";
  }
});

// Load game with fullscreen and loading screen
function loadGame(gameKey) {
  showLoadingScreen();
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    fullscreen.style.display = "flex";
    gameEmbed.innerHTML = games[gameKey];
  }, 2000); // Simulate loading time
}

// Close fullscreen
closeFullscreen.addEventListener("click", () => {
  fullscreen.style.display = "none";
  gameEmbed.innerHTML = ""; // Clear the embed
});

// Show loading screen
function showLoadingScreen() {
  loadingText.textContent = "Loading Assets...";
  loadingScreen.classList.remove("hidden");
}
const games = {
  "Vertical Dash": '<iframe src="https://www.jopi.com/gam/go-up-dash/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Mini Golf": '<iframe src="https://www.jopi.com/gam/pixel-mini-golf/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Key Quest": '<iframe src="https://www.jopi.com/gam/key-quest/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Space Slide": '<iframe src="https://www.jopi.com/gam/space-slide/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
};

const fullscreen = document.getElementById("fullscreen");
const closeFullscreen = document.getElementById("closeFullscreen");
const gameEmbed = document.getElementById("gameEmbed");
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const gamesList = document.getElementById("gamesList");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

// Initially hide the loading screen
window.onload = () => {
  loadingScreen.classList.add("hidden");
  loadGamesList(); // Populate the list of games when the site loads
};

// Populate games as buttons
function loadGamesList() {
  for (const gameKey in games) {
    const button = document.createElement("button");
    button.textContent = gameKey;
    button.addEventListener("click", () => loadGame(gameKey));
    gamesList.appendChild(button);
  }
}

// Handle search functionality
searchButton.addEventListener("click", () => {
  const query = searchBar.value.trim().toLowerCase();
  gamesList.innerHTML = ""; // Clear previous buttons

  for (const gameKey in games) {
    if (gameKey.toLowerCase().includes(query)) {
      const button = document.createElement("button");
      button.textContent = gameKey;
      button.addEventListener("click", () => loadGame(gameKey));
      gamesList.appendChild(button);
    }
  }

  if (gamesList.innerHTML === "") {
    gamesList.innerHTML = "<p style='color: white;'>No games found for your search.</p>";
  }
});

// Load game with fullscreen and loading screen
function loadGame(gameKey) {
  showLoadingScreen();
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    fullscreen.style.display = "flex";
    gameEmbed.innerHTML = games[gameKey];
  }, 2000); // Simulate loading time
}

// Close fullscreen
closeFullscreen.addEventListener("click", () => {
  fullscreen.style.display = "none";
  gameEmbed.innerHTML = ""; // Clear the embed
});

// Show loading screen
function showLoadingScreen() {
  loadingText.textContent = "Loading Assets...";
  loadingScreen.classList.remove("hidden");
}
const games = {
  "Vertical Dash": '<iframe src="https://www.jopi.com/gam/go-up-dash/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Mini Golf": '<iframe src="https://www.jopi.com/gam/pixel-mini-golf/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Key Quest": '<iframe src="https://www.jopi.com/gam/key-quest/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
  "Space Slide": '<iframe src="https://www.jopi.com/gam/space-slide/" frameborder="0" scrolling="no" width="800px" height="600px" ></iframe>',
};

const fullscreen = document.getElementById("fullscreen");
const closeFullscreen = document.getElementById("closeFullscreen");
const gameEmbed = document.getElementById("gameEmbed");
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const gamesList = document.getElementById("gamesList");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

// Initially hide the loading screen
window.onload = () => {
  loadingScreen.classList.add("hidden");
  loadGamesList(); // Populate the list of games when the site loads
};

// Populate games as buttons
function loadGamesList() {
  for (const gameKey in games) {
    const button = document.createElement("button");
    button.textContent = gameKey;
    button.addEventListener("click", () => loadGame(gameKey));
    gamesList.appendChild(button);
  }
}

// Handle search functionality
searchButton.addEventListener("click", () => {
  const query = searchBar.value.trim().toLowerCase();
  gamesList.innerHTML = ""; // Clear previous buttons

  for (const gameKey in games) {
    if (gameKey.toLowerCase().includes(query)) {
      const button = document.createElement("button");
      button.textContent = gameKey;
      button.addEventListener("click", () => loadGame(gameKey));
      gamesList.appendChild(button);
    }
  }

  if (gamesList.innerHTML === "") {
    gamesList.innerHTML = "<p style='color: white;'>No games found for your search.</p>";
  }
});

// Load game with fullscreen and loading screen
function loadGame(gameKey) {
  showLoadingScreen();
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    fullscreen.style.display = "flex";
    gameEmbed.innerHTML = games[gameKey];
  }, 2000); // Simulate loading time
}

// Close fullscreen
closeFullscreen.addEventListener("click", () => {
  fullscreen.style.display = "none";
  gameEmbed.innerHTML = ""; // Clear the embed
});

// Show loading screen
function showLoadingScreen() {
  loadingText.textContent = "Loading Assets...";
  loadingScreen.classList.remove("hidden");
}
