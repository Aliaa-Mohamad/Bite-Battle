import { p, b, createConfetti, firstTime } from "./main.js";
export class Game {
  static state = 1;
  static startOfGame = true;
  static manageGame(state, loser = false) {
    const playerName = document.getElementById("playerName");
    const botName = document.getElementById("botName");
    if (p.name) playerName.innerText = p.name;
    if (b.name) botName.innerText = b.name;
    // 0 : start
    // 2 : end
    const settingInBoard = document.getElementById("setting-in-board");
    const botSection = document.getElementById("bot-section");
    const playerSection = document.getElementById("player-section");
    const leaderBoard = document.getElementById("leader-board");
    const h3 = document.querySelector("#leader-board h3");
    Game.state = state;

    b.stop();
    switch (state) {
      case 0: {
        // start
        h3.innerText = "Game Started";
        leaderBoard.style.opacity = 1;

        settingInBoard.style.opacity = 1;
        b.stop();

        if (!firstTime) {
          setTimeout((_) => {
            leaderBoard.style.opacity = 0;
            b.moveBot();
            p.allowedToMove = 1;
          }, 1500);
        } else {
          // playerName.innerHTML = "Player";
          leaderBoard.style.opacity = 0;
        }
        // setFirstTime(false);
        Game.state = 1;
        break;
      }

      case 1: {
        p.allowedToMove = true;
        b.moveBot();
        break;
      }

      case 2: {
        // end
        leaderBoard.style.opacity = 1;
        h3.innerText = "Game Result";
        settingInBoard.style.opacity = 0;

        p.allowedToMove = false;
        b.stop();
        const playerFscore = document.getElementById("playerFscore");
        const botFscore = document.getElementById("botFscore");

        playerFscore.innerText = p.finalScore;
        botFscore.innerText = b.finalScore;

        const playerFinalLives = document.getElementById("playerFinalLives");
        const botFinalLives = document.getElementById("botFinalLives");

        playerFscore.innerText = p.finalScore;
        botFscore.innerText = b.finalScore;

        playerFinalLives.innerHTML = "";
        botFinalLives.innerHTML = "";

        for (let i = 0; i < p.lives.length; i++) {
          playerFinalLives.innerHTML += `<i class="fa-solid fa-heart"></i>`;
        }

        for (let i = 0; i < b.lives.length; i++) {
          botFinalLives.innerHTML += `<i class="fa-solid fa-heart"></i>`;
        }

        setTimeout(() => {
          playerFinalLives.innerHTML = "";
          botFinalLives.innerHTML = "";
          const playerLivesCount = p.lives.length;
          const botLivesCount = b.lives.length;

          if (loser) {
            const winner = loser === p ? b : p;

            if (winner === p) {
              botSection.classList.add("hidden");
              playerSection.classList.add("winner");

              for (let i = 0; i < p.lives.length; i++) {
                playerFinalLives.innerHTML += `<i class="fa-solid fa-heart"></i>`;
              }
            } else {
              playerSection.classList.add("hidden");
              botSection.classList.add("winner");

              for (let i = 0; i < b.lives.length; i++) {
                botFinalLives.innerHTML += `<i class="fa-solid fa-heart"></i>`;
              }
            }

            leaderBoard.style.setProperty("--hide-divider", "0");
            createConfetti();
          } else {
            if (
              p.finalScore > b.finalScore ||
              (p.finalScore === b.finalScore &&
                playerLivesCount > botLivesCount)
            ) {
              botSection.classList.add("hidden");
              playerSection.classList.add("winner");

              for (let i = 0; i < p.lives.length; i++) {
                playerFinalLives.innerHTML += `<i class="fa-solid fa-heart"></i>`;
              }

              leaderBoard.style.setProperty("--hide-divider", "0");
              createConfetti();
            } else if (
              b.finalScore > p.finalScore ||
              (b.finalScore === p.finalScore &&
                botLivesCount > playerLivesCount)
            ) {
              playerSection.classList.add("hidden");
              botSection.classList.add("winner");

              for (let i = 0; i < b.lives.length; i++) {
                botFinalLives.innerHTML += `<i class="fa-solid fa-heart"></i>`;
              }

              leaderBoard.style.setProperty("--hide-divider", "0");
              createConfetti();
            } else {
              playerSection.classList.add("tie");
              botSection.classList.add("tie");
              leaderBoard.style.setProperty("--hide-divider", "1");
            }
          }
        }, 1500);
        break;
      }
    }
  }
  static pauseGame() {
    // pause
    p.allowedToMove = false;
    b.stop();
  }
}

