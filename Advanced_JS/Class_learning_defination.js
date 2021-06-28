class Rectangle {
  // instance property 
  constructor(_width, _height, _color) {
    console.log("The Rectangle is being created")
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  // instance methods 
  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
  }
}

// let myTectangle1 = new Rectangle();
// console.log(myTectangle1) // now we create the object, according to class 

// Now if we try to change values inside object 
let myRectangle1 = new Rectangle(5, 3, "blue")
let myRectangle2 = new Rectangle(30, 50, "red")

console.log(myRectangle1) // it does not change successfully, because it does not pass values
// So now we add _width, _height, _color into constructor functions, it become dynamic
console.log(myRectangle2)

// By using instance methods
console.log(myRectangle1.getArea())
console.log(myRectangle2.getArea())
console.log(myRectangle2.printDescription())