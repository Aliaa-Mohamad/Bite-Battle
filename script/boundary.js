export class Boundary {
  constructor() {}
  static widthBoundary = window.innerWidth - 50;
  static heightBoundary = window.innerHeight - 50;
  static changeBoundary() {
    Boundary.widthBoundry -= 50;
    Boundary.heightBoundary -= 50;
  }
}
