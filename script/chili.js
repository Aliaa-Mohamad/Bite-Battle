import { Boundary } from "./boundary.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;
const garden = document.getElementById("garden");

export class Chili {
  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "pepper");
    this.element.style.position = "absolute";
    this.element.style.width = "50px";
    this.element.style.height = "50px";
    let img = document.createElement("img");
    img.setAttribute("src", "./resources/chili.png");
    this.element.appendChild(img);
    garden.appendChild(this.element);
  }

  moveSingleChili() {
    this.element.style.bottom = Math.random() * heightBoundry + "px";
    this.element.style.left = Math.random() * widthBoundry + "px";
  }
}
