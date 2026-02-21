import { Chili } from "./chili.js";
import { Boundary } from "./boundary.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;

export class ChiliArray {
  constructor(number) {
    this.number = number;
    this.arr = [];
    for (let i = 0; i < this.number; i++) {
      const c = new Chili();
      c.moveSingleChili();
      this.arr.push(c);
    }

    setInterval(() => {
      this.arr.forEach((c) => {
        c.element.style.bottom = Math.random() * heightBoundry + "px";
        c.element.style.left = Math.random() * widthBoundry + "px";
      });
    }, 5000);
  }

  moveChilies() {
    this.arr.forEach((c) => {
      c.element.style.bottom = Math.random() * heightBoundry + "px";
      c.element.style.left = Math.random() * widthBoundry + "px";
    });
  }

  deleteChili(c) {
    c.element.remove();

    this.arr = this.arr.filter((chili) => chili !== c);
  }

  getChiliArr() {
    return this.arr;
  }
}
