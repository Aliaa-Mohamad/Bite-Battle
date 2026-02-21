// const lives = document.getElementById("lives");
export class Life {
  constructor() {
    this.element = document.createElement("li");
    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-heart");

    this.element.append(heart);
    // lives.append(this.element);
  }
  getElement() {
    return this.element;
  }
}
