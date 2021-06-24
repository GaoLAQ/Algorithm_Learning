// Learning source from https://juejin.cn/post/6844904051973292045
// Class -> Object 

// Instance Properites: what they have 

// - name 
// - age 
// - height 

// Instance Methods: what they do 

// - talk 
// - run 
// - jump 

class Point {
  constructor (x, y) {
      this.x = x
      this.y = y
  }
  MyName () {
      return (`我的名字叫${this.x}${this.y}!`)
  }
} 
   let getName = new Point('f', 'zh');
   getName.MyName()   // 我的名字叫fzh

// 通过上面的代码可以看出这个class的写法，与ES5中构造函数的写法很相似，
// 没错，class就是构造函数的语法糖（可以理解成class就是构造函数的另一种写法），
// 使用的时候，也是直接对class(类)使用new命令，跟构造函数的用法完全一致；考虑到有的同学不太明白上面写的啥，在这里解释一下：

// 1. 首先声明了一个名字为Point的class，换做ES5的写法就是 function Point ( ) { }

// class Point (){

// }

// 2. class里面写的方法，最终都定义在了 class 的原型上，换做ES5的写法就是：Point.prototype.MyName = function ( ) { }；
// class Point(){
//   MyName(){
//     return ()
//   }
// }

//3. constructor 方法就是构造方法，里面的 this 代表实例对象，constructor 属性，直接指向“类”的本身；
// constructor 方法就是构造方法，里面的 this 代表实例对象，constructor 属性，直接指向“类”的本身；
// constructor 是class的默认方法，通过 new 命令生成对象实例时，自动调用 constructor ，即使没有定义 constructor ，也会默认有一个空的 constructor；

// 它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已，光说无用，让我们来证明一下吧

// console.log(typeof Point);   // "function"
// console.log(Point === Point.prototype.constructor);   // true

// 这段代码表明了类的数据类型就是函数，类的本身就是指向构造函数；

// class内部定义的方法都是不可枚举的；
// 生成类的写法需使用 new 命令，否则会报错；
// constructor 方法默认返回实例对象（即 this ）；
// 类和模块的内部，默认就是严格模式，所以不需要使用 use strict 指定运行模式；
// 类不存在变量提升；
// 类的方法内部如果含有this，它默认指向类的实例；

// class进阶知识
// 开头咱们说到过class是强大和优雅的，那么它到底强大在哪？又优雅在哪呢？我怎么读现在还没有看出来呢？好，让我们带着这两个疑问去下面的文章寻找答案！

// class静态方法
// 类相当于实例的原型，所有在类中定义的方法都会被实例继承，
// 如果不想让你定义的方法被实例继承，也很简单，只需要在方法前面加上 static 关键字，
// 就表示该方法不会被实例继承，而且直接通过类就可以调用，这也称为 静态方法 ，看下面代码：

// class MyStatic {
//   static classMsg () {
//       return ("My name is feng zhihao");
//   }
// }
 // 因为"classMsg"定义方法名称之前加了 'static' 关键字
 // 所以该方法是一个静态方法

 // Mystatic.classMsg();  
 
 // "My name is feng zhihao"

// let foo = new Mystaic();
// foo.classMsg(); // TypeError: foo.classMsg is not a function
// 上面代码表明：静态方法可以直接在类上调用，而不是在类的实例上调用，如果在实例上调用的话，就会抛出错误，表示不存在该方法；扩展一下，父类的静态方法可以被子类继承：

// class Fzh {
//     static classMsg () {
//         return (`新春快乐，鼠你最棒`);
//     }
// }

// class Ibas extends Fzh {}

// Ibas.classMsg();  // "新春快乐，鼠你最棒"`


 // " 返回当前class "
//  class Register {
//      constructor (x) {
//          console.log(new.target === Register);
//          this.x = x;
//      }
//  }
 
 // 返回的是true，说明new.target返回的是当前的class
//  let RegClass = new Register("hello")  // true

// "父类调用new.target返回子类"

// class Register {
//     constructor () {
//         console.log(new.target === Register);
//     }
// }

// class Square extends Register {
//     constructor (x) {
//         super(x, x);
//     }
// }

// let sole = new Square(1);    // false（new.target返回的是子类）


// super关键字

// 读到这，是不是觉得初学react的时候就是在学习class呢，
// 尤其是 extends、super关键字，我们会经常碰到它们的身影，其实super这个关键字既可以当做函数使用，也可以当做对象使用，在这两种情况下，它的作用完全不同：

// 第一种情况： 做为函数时，super只能用在子类的构造函数中，用在其他地方会报错；当调用super时，它代表父类的构造函数 ( 这是规定 ) ，ES6还规定了子类的构造函数必须执行一次super函数；
// 接下来的说法可能比较绕，建议读完一遍然后看一遍代码，再回过头读一遍效果会更好：super虽然代表父类，但是它返回的是子类的实例，也就是说super内部的this是指向子类的，证明一下：

// class Supe {
//   constructor () {
//     console.log(new.target.name);
//   }
// }

// class SonSupe extends Supe {
//   constructor () {
//     super();
//   }
// }

// new Supe();   // Supe
// new SonSupe();  // SonSupe

// 第二种情况： super作为对象时，在普通方法中指向父类的原型对象，在静态方法中指向父类，由于 super 指向的是父类的原型对象，所以定义在父类实例上的方法或属性是无法通过 super 调用的:

// class A {
//     gain () {
//         return ("欢迎大佬指出不足，我绝对不会改~");
//     }
// }

// class B extends A {
//     constructor () {
//         super();
//         console.log(super.gain());   // "欢迎大佬指出不足，我绝对不会改~"
//     }
// }

// 从上面代码可以看出super指向父类的prototype ，所以 super.gain() 等同于 A.prototype.gain() ，ES6规定：通过 super 调用父类方法时，super 会绑定子类的 this；