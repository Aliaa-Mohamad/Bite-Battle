import { Boundary } from "./boundary.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;
const garden = document.getElementById("garden");

export class Shield {
  constructor() {
    this.element = document.createElement("div");
    // this.element.setAttribute("id", "shield");
    this.element.classList.add("shield");

    this.element.style.position = "absolute";
    this.element.style.width = "50px";
    this.element.style.height = "50px";

    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-shield");
    this.element.appendChild(icon);
    garden.appendChild(this.element);
  }

  moveSingleShield() {
    this.element.style.bottom = Math.random() * heightBoundry + "px";
    this.element.style.left = Math.random() * widthBoundry + "px";
  }
}
