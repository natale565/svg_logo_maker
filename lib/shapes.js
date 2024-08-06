// shapes.js
class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
  
    generateShapeSVG() {
      throw new Error('generateShapeSVG() must be implemented in subclasses');
    }
  }
  
  class Circle extends Shape {
    generateShapeSVG() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    generateShapeSVG() {
      return `<rect x="50" height="200" width="200" fill="${this.shapeColor}" />`;
    }
  }
  
  class Triangle extends Shape {
    generateShapeSVG() {
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}" />`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  