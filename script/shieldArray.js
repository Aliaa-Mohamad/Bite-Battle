import { Shield } from "./shield.js";
import { Boundary } from "./boundary.js";
let widthBoundry = Boundary.widthBoundary;
let heightBoundry = Boundary.heightBoundary;

export class ShieldArray {
  constructor(number) {
    this.number = number;
    this.arr = [];
    for (let i = 0; i < this.number; i++) {
      const s = new Shield();
      s.moveSingleShield();
      this.arr.push(s);
    }

    setInterval(() => {
      this.arr.forEach((s) => {
        s.element.style.bottom = Math.random() * heightBoundry + "px";
        s.element.style.left = Math.random() * widthBoundry + "px";
      });
    }, 5000);
  }

  //   moveChilies() {
  //     this.arr.forEach((c) => {
  //       c.element.style.bottom = Math.random() * heightBoundry + "px";
  //       c.element.style.left = Math.random() * widthBoundry + "px";
  //     });
  //   }

  deleteShield(sh) {
    sh.element.remove();

    this.arr = this.arr.filter((heart) => heart !== sh);
  }

  getShieldArr() {
    return this.arr;
  }
}
