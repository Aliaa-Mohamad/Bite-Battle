import { Player } from "./player.js";
import { Boundary } from "./boundary.js";
import { FoodArr } from "./main.js";
import { Game } from "./game.js";
import { Life } from "./life.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;

export class Bot extends Player {
  constructor(name, element, type, left, bottom, level) {
    super(name, element, type, left, bottom, level);
    this.level = level || 1500;
    this.xDirection = 1;
    this.yDirection = 1;

    this.moveRight = () => {
      this.left += 30;
      this.element.style.left = this.left + "px";
    };

    this.moveLeft = () => {
      this.left -= 30;
      this.element.style.left = this.left + "px";
    };

    this.moveUp = () => {
      this.bottom += 30;
      this.element.style.bottom = this.bottom + "px";
    };

    this.moveDown = () => {
      this.bottom -= 30;
      this.element.style.bottom = this.bottom + "px";
    };

    this.catch = (dx, dy) => {
      if (dy > 0 && this.bottom + this.height < heightBoundry) this.moveUp();
      else if (dy < 0 && this.bottom > 0) this.moveDown();

      if (dx > 0 && this.left + this.width < widthBoundry) this.moveRight();
      else if (dx < 0 && this.left > 0) this.moveLeft();
    };
  }
  moveBot() {
    this.intervalId = setInterval(() => {
      let minDistance = Infinity;
      let closestX = 0;
      let closestY = 0;

      FoodArr.getFoodArr().forEach((f) => {
        const foodBottom = parseFloat(getComputedStyle(f.element).bottom);
        const foodLeft = parseFloat(getComputedStyle(f.element).left);

        const dx = foodLeft - this.left;
        const dy = foodBottom - this.bottom;

        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < minDistance) {
          minDistance = d;
          closestX = dx;
          closestY = dy;
        }
        Game.startOfGame = false;
      });

      this.catch(closestX, closestY);
      this.crash();
    }, this.level);
  }
  stop() {
    clearInterval(this.intervalId);
  }
}
