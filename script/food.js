// import { FoodArray } from "./foodArray.js";
import { Boundary } from "./boundary.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;
const garden = document.getElementById("garden");

export class Food {
  constructor() {
    // create the food element
    this.element = document.createElement("div");
    this.element.setAttribute("id", "food");
    this.element.style.position = "absolute";
    this.element.style.width = "30px";
    this.element.style.height = "30px";
    let img = document.createElement("img");
    img.setAttribute("src", "./resources/food.png");
    // this.element.style.backgroundColor = 'red';
    this.element.appendChild(img);
    garden.appendChild(this.element);
  }

  moveSingleFood() {
    this.element.style.bottom = Math.random() * heightBoundry + "px";
    this.element.style.left = Math.random() * widthBoundry + "px";
  }
}


