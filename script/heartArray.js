import { Heart } from "./heart.js";
import { Boundary } from "./boundary.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;

export class HeartArrr {
  constructor(number) {
    this.number = number;
    this.arr = [];
    for (let i = 0; i < this.number; i++) {
      const c = new Heart();
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

  //   moveChilies() {
  //     this.arr.forEach((c) => {
  //       c.element.style.bottom = Math.random() * heightBoundry + "px";
  //       c.element.style.left = Math.random() * widthBoundry + "px";
  //     });
  //   }

  deleteHeart(c) {
    c.element.remove();

    this.arr = this.arr.filter((heart) => heart !== c);
  }

  getHeartArr() {
    return this.arr;
  }
}
