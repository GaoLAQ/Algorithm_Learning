## 继承
继承是面向对象重要话题. 很多面向对象语言支持两种继承：接口继承和实现继承. 前者只继承方法签名，后者继承实际的方法, 接口继承在ECMAScript中是不可能的, 因为函数没有签名.

### 原型链
每个构造i函数都有一个原型对象 -> 原型有一个属性指回构造函数 -> 如果原型是另一个类型的实例呢？ 那就意味着这个原型本身有一个内部指针指向另一个原型， 相应的另一个原型也有一个指针指向另一个构造函数， 就这样实例和原型之间构造了一条原型链. 这就是原型链的基本构想. 

```
function SuperType(){
  this.property = true 
}
SuperType.prototype.getSuperValue = function(){
  return this.property 
}
function SubType(){
  this.subproperty = false 
}

// 继承 SuperType 
SubType.prototype = new SuperType()
SubType.prototpe.getSubValue = function(){
  return this.subproperty
}
```

