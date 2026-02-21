import { Player } from "./player.js";
import { Bot } from "./bot.js";
import { FoodArray } from "./foodArray.js";
import { ChiliArray } from "./chiliArray.js";
import { HeartArrr } from "./heartArray.js";
import { ShieldArray } from "./shieldArray.js";
import { Game } from "./game.js";
import { showNameInput, levels } from "./settings.js";

export const FoodArr = new FoodArray(20);
export const food = FoodArr.getFoodArr();
export const ChiliArr = new ChiliArray(5);
export const ShieldArr = new ShieldArray(5);
export const HeartArr = new HeartArrr(5);
const playerElement = document.getElementById("player");
const playerName = document.getElementById("player-name");
const botName = document.getElementById("bot-name");
const botElement = document.getElementById("bot");
const levelSelect = document.getElementById("levelSelect");

const botNames = [
  "Amira",
  "Osama",
  "Sherine",
  "Ola",
  "Tamer",
  "Yara",
  "Khaled",
  "Mona",
  "Hassan",
  "Nour",
  "Sara",
  "Adham",
  "Laila",
  "Fadi",
  "Nada",
  "Omar",
  "Rana",
  "Heba",
  "Mostafa",
  "Mariam",
];

export function setFirstTime(i) {
  firstTime = i;
}
export let firstTime;
console.log(localStorage.getItem("playerName"));
window.addEventListener("load", (_) => {
  if (!localStorage.getItem("playerName")) {
    localStorage.setItem("playerName", "Player");
    firstTime = true;
    showNameInput();
  }

  if (!localStorage.getItem("level")) {
    localStorage.setItem("level", 1000);
  }

  Game.manageGame(0);
  setTimeout(() => {
    Game.state = 1;
    window.addEventListener("keydown", (e) => {
      p.movePlayer(e);
    });
  }, 1500);
});

// pass food instance to both Player and Bot
export const p = new Player(
  localStorage.getItem("playerName"),
  playerElement,
  "player",
  parseInt(getComputedStyle(playerElement).left),
  parseInt(getComputedStyle(playerElement).bottom)
);

export const b = new Bot(
  botNames[Math.floor(Math.random() * botNames.length)],
  botElement,
  "bot",
  parseInt(getComputedStyle(botElement).left),
  parseInt(getComputedStyle(botElement).bottom),
  localStorage.getItem("level")
);

export function createConfetti() {
  const container = document.querySelector(".confetti-container");

  const colors = ["#ff4d4d", "#ffb703", "#4caf50", "#2196f3", "#9c27b0"];

  setInterval((_) => {
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      const x = (Math.random() - 0.5) * 300 + "px";
      const y = Math.random() * -250 + "px";

      confetti.style.setProperty("--x", x);
      confetti.style.setProperty("--y", y);

      confetti.style.left = "50%";
      confetti.style.top = "50%";

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 1500);
    }
  }, 500);
}

// playerName.innerHTML = p.name;
botName.innerHTML = b.name;
playerName.innerHTML = p.name;
for (let key in levels) {
  if (levels[key] == localStorage.getItem("level")) levelSelect.value = key;
}
// levels.forEach(level => {
//   levelSelect.value = localStorage.getItem("level");

// });
