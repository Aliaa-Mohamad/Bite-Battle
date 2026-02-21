import { firstTime, p, b, setFirstTime } from "./main.js";
import { Game } from "./game.js";
// import { firstTime } from "./main.js";
const settings = document.getElementById("settings");
const settingsSection = document.getElementById("settings-section");
const levelSelect = document.getElementById("levelSelect");

const nameInput = document.getElementById("nameInput");
const playerName = document.getElementById("player-name");

const settingInBoard = document.getElementById("setting-in-board");
const closeNameForm = document.getElementById("closeNameForm");

export const levels = {
  mild: 1500,
  spicy: 1000,
  fiery: 500,
  extreme: 300,
};

settings.addEventListener("click", () => {
  settingsSection.style.opacity = 1;
  Game.pauseGame();
  showNameInput();
});

settingInBoard.addEventListener("click", () => {
  settingsSection.style.opacity = 1;
  Game.pauseGame();
  showNameInput();
});
export let level;

settingsSection.addEventListener("submit", (e) => {
  e.preventDefault();

  level = levels[levelSelect.value];
  console.log("Selected Level:", level);

  if (level) {
    b.level = level;
    // b.stop();
    b.moveBot();
    localStorage.setItem("level", level);
    settingsSection.style.opacity = 0;
    p.allowedToMove = 1;
    if (!Game.startOfGame) {
      console.log('l')
      // Game.manageGame(0);
      window.location.reload();
    }
  }

  const name = nameInput.value.trim();
  if (name) {
    p.name = name;
    localStorage.setItem("playerName", name);

    setFirstTime(false);

    Game.manageGame(0);

    playerName.innerHTML = p.name;
    settingsSection.style.opacity = 0;
  }
});

export function showNameInput() {
  settingsSection.style.opacity = 1;
  // document.getElementById("selectDiv").style.display = "none";
}

closeNameForm.addEventListener("click", () => {
  settingsSection.style.opacity = 0;
  Game.manageGame(0);
});
