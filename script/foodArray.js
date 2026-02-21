import { Food } from "./food.js";
import { Boundary } from "./boundary.js";
import { Game } from "./game.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;

export class FoodArray {
  constructor(number) {
    this.number = number;
    this.arr = [];
    for (let i = 0; i < this.number; i++) {
      const f = new Food();
      f.moveSingleFood();
      this.arr.push(f);
    }

    setInterval(() => {
      this.arr.forEach((f) => {
        f.element.style.bottom = Math.random() * heightBoundry + "px";
        f.element.style.left = Math.random() * widthBoundry + "px";
      });
    }, 5000);
  }

  moveFood() {
    this.arr.forEach((f) => {
      f.element.style.bottom = Math.random() * heightBoundry + "px";
      f.element.style.left = Math.random() * widthBoundry + "px";
    });
  }

  deleteFood(f) {
    f.element.remove();
    this.arr = this.arr.filter((food) => food !== f);
    if (this.arr.length == 0) {
      Game.manageGame(2);
    }
  }

  getFoodArr() {
    return this.arr;
  }
}
