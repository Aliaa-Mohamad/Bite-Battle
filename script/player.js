import { Boundary } from "./boundary.js";
import { Life } from "./life.js";
import { Game } from "./game.js";
import { FoodArr, ChiliArr, HeartArr } from "./main.js";
import { ShieldArr } from "./main.js";
let heightBoundry = Boundary.heightBoundary;
let widthBoundry = Boundary.widthBoundary;
const playerScore = document.querySelector("#player-score .score-number span");
const botScore = document.querySelector("#bot-score .score-number span");
const playerLives = document.getElementById("player-lives");
const botLives = document.getElementById("bot-lives");

export class Player {
  constructor(name, element, type, left, bottom) {
    this.name = name;
    this.element = element;
    this.type = type;
    this.left = left;
    this.bottom = bottom;
    this.width = parseInt(getComputedStyle(this.element).width);
    this.height = parseInt(getComputedStyle(this.element).height);
    this.finalScore = 0;
    this.lives = [];
    this.createLives(3);
    this.allowedToMove = 1;
    this.shielded = false;
  }

  createLives(number) {
    for (let i = 0; i < number; i++) {
      this.lives.push(new Life());
      this.type == "player"
        ? playerLives.append(this.lives[i].getElement())
        : botLives.append(this.lives[i].getElement());
    }
  }

  movePlayer(e) {
    let p = this;
    let left = p.left;
    let bottom = p.bottom;
    const playerWidth = p.width;
    const playerHeight = p.height;
    if (this.allowedToMove) {
      if (e.key == "ArrowUp" && bottom + playerHeight < heightBoundry) {
        bottom += 50;
      } else if (e.key == "ArrowDown" && bottom > 0) {
        bottom -= 50;
      } else if (e.key == "ArrowLeft" && left > 0) {
        left -= 50;
      } else if (e.key == "ArrowRight" && left + playerWidth < widthBoundry) {
        left += 50;
      }
      p.bottom = bottom;
      p.left = left;
      p.element.style.bottom = bottom + "px";
      p.element.style.left = left + "px";
      Game.startOfGame = false;
      // console.log(Game.startOfGame);
    }
    this.crash();
  }

  changeScore(increase) {
    const scoreElement = this.type === "player" ? playerScore : botScore;

    let currentScore = Number(scoreElement.innerHTML);

    if (increase) {
      currentScore++;
      this.finalScore++;
    } else if (currentScore > 0) {
      currentScore--;
      this.finalScore--;
    }

    scoreElement.innerHTML = currentScore;
  }

  resizePlayer(op) {
    if (op == "+") {
      this.width += 5;
      this.height += 5;
    } else if (op == "-" && this.width > 50) {
      this.width -= 5;
      this.height -= 5;
    }
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
  }

  crash() {
    // element position
    let pLeft = Math.ceil(parseFloat(this.element.style.left));
    let pBottom = Math.ceil(parseFloat(this.element.style.bottom));
    let pWidth = this.width;
    let pHeight = this.height;

    // detect food crash
    FoodArr.getFoodArr().forEach((f) => {
      const fLeft = Math.ceil(parseFloat(f.element.style.left));
      const fBottom = Math.ceil(parseFloat(f.element.style.bottom));
      const fWidth = parseInt(getComputedStyle(f.element).width);
      const fHeight = parseInt(getComputedStyle(f.element).height);

      if (
        pLeft < fLeft + fWidth &&
        pLeft + pWidth > fLeft &&
        pBottom < fBottom + fHeight &&
        pBottom + pHeight > fBottom
      ) {
        // collision happened exactly
        this.changeScore(true);
        this.resizePlayer("+");
        Boundary.changeBoundary();
        FoodArr.deleteFood(f);
      }
    });

    HeartArr.getHeartArr().forEach((h) => {
      const hLeft = Math.ceil(parseFloat(h.element.style.left));
      const hBottom = Math.ceil(parseFloat(h.element.style.bottom));
      const hWidth = parseInt(getComputedStyle(h.element).width);
      const hHeight = parseInt(getComputedStyle(h.element).height);

      if (
        pLeft < hLeft + hWidth &&
        pLeft + pWidth > hLeft &&
        pBottom < hBottom + hHeight &&
        pBottom + pHeight > hBottom
      ) {
        if (this.lives.length < 3) {
          const newLife = new Life();
          this.lives.push(newLife);

          if (this.type === "player") {
            playerLives.append(newLife.getElement());
          } else {
            botLives.append(newLife.getElement());
          }

          h.element.remove();
          HeartArr.deleteHeart(h);
        }
      }
    });

    ChiliArr.getChiliArr().forEach((c) => {
      const cLeft = Math.ceil(parseFloat(c.element.style.left));
      const cBottom = Math.ceil(parseFloat(c.element.style.bottom));
      const cWidth = parseInt(getComputedStyle(c.element).width);
      const cHeight = parseInt(getComputedStyle(c.element).height);

      if (
        pLeft < cLeft + cWidth &&
        pLeft + pWidth > cLeft &&
        pBottom < cBottom + cHeight &&
        pBottom + pHeight > cBottom
      ) {
        if (!this.shielded) {
          this.resizePlayer("-");
          const lostLife = this.lives.pop();
          lostLife.getElement().remove();
          if (this.lives.length == 0) {
            Game.manageGame(2, this);
          }
          this.changeScore(false);
        } else {
          // إذا player shielded، يمنع خسارة الحياة
          // ممكن تعمل effect صغير أو تحافظ على حجم player
        }
        Boundary.changeBoundary();
      }
    });

    ShieldArr.getShieldArr().forEach((sh) => {
      const shLeft = Math.ceil(parseFloat(sh.element.style.left));
      const shBottom = Math.ceil(parseFloat(sh.element.style.bottom));
      const shWidth = parseInt(getComputedStyle(sh.element).width);
      const shHeight = parseInt(getComputedStyle(sh.element).height);

      if (
        pLeft < shLeft + shWidth &&
        pLeft + pWidth > shLeft &&
        pBottom < shBottom + shHeight &&
        pBottom + pHeight > shBottom
      ) {
        if (!this.shielded) {
          sh.element.remove();
          ShieldArr.deleteShield(sh);
          this.shielded = true;
          let navShield =
            this.type == "player"
              ? document.getElementById("player-shield")
              : document.getElementById("bot-shield");
          navShield.style.opacity = 1;
          navShield.style.display = "block";
          setTimeout(() => {
            navShield.style.opacity = 0;
            navShield.style.display = "none";

            this.shielded = false;
          }, 3000);
        }
      }
    });
  }
}
