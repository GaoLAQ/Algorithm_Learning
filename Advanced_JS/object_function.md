## 创建对象

### 工厂模式
```
function createPerson(name, age, job){
  let o = new Object()
  o.name = name 
  o.job = job
  o.age = age 
  o.sayName = function (){
    console.log(this.name) 
  }
  return o 
}

let person1 = createPerson('Nicolas', 29, 'Software Engineer') 
```
> 
- 没有显式地创建对象
- 属性和方法直接赋值给了 this
- 没有 return 

### 构造函数模式
```
function Person(name, age, job){
  this.name = name 
  this.age = age 
  this.sayName = function(){
    console.log(this.name) 
  }
}
let person1 = new Person('Nicolas', 29, 'Software Engineer')
```

- 内存中创建一个新对象
- 这个新对象内部的[[Prototpe]] 特性被赋值为构造函数的prototype 属性
- 构造函数内部的this被赋值为新的对象（即this 指向新对象） 
- 执行构造函数内部的代码
- 如果构造函数返回非空对象，则返回该对象； 否则，返回刚创建的新对象

> instanceof 操作符是确定对象类型更可靠的方式

### 构造函数也是函数
> 构造函数与普通函数唯一的区别就是调用方式不同
> 任何函数只要使用new 操作符调用的就是构造函数

作为构造函数
```
let person = new Person('Nicolas', 29, 'Software Engineer') 
person.sayName() // 'Nicolas'
```

作为函数调用
```
Person('Greg', 27, 'Doctor') // 添加到window 对象
window.sayName() // 'Greg'
```
在另一个对象的作用域中调用
```
let o = new Object()
Person.call(o,'Kristen',25,'Nurse')
o.sayName(); //'Greg'
```
即使用new操作符创建一个新对象， 然后是普通函数的调用方式， 这时候没有使用new 操作符 调用Person(), 结果会将属性和方法添加到window 对象。 
> 这里记住， 调用一个函数没有明确设置this， this 会指向global 对象 （在浏览器的window 对象）

### 构造函数问题
```
function Person(name, age, job){
  this.name = name 
  this.age = age 
  this.sayName = function(){
    console.log(this.name) 
  }
}
let person1 = new Person('Nicolas', 29, 'Software Engineer') 
let person2 = new Person('xiaoming', 28, 'Software Engineer AAA') 
```
person1 和 person2 都有名为 sayName()的方法，但这两个方法不是同一个 Function 实例。 
```
function Person(name, age, job){
  this.name = name 
  this.age = age 
  this.job = job
  this.sayName = new Function('console.log(this.name)')
}
```
说明不同new object 生成不同的函数（例如： sayName）
所以 concsole.log(person1.sayName === person2.sayName) // false 

```
function Person(name, age, job){
  this.name = name 
  this.age = age 
  this.job = job
  this.sayName = sayName
}
function sayName(){
  console.log(this.name) 
}
```
