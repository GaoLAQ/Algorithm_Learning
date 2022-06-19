### 原生对象原型

原型模式 -> 不仅体现自定义类型上，更重要的是实现所有原生引用类型模式（Object, Array, String ）
比如， 数组实例的sort()
```
console.log(typeof Array.prototype.sort) // function  
console.log(typeof String.prototype.substring) // function 
```

```
String.prototype.startsWith = function(text){
  return this.indexOf(text) === 0 
}
```
startsWith 是默认定义

### 原型的问题

原型模式也不是没有问题. 它弱化了向构造函数传递初始化参数的能力,对导致所有实例默认都取得相同的属性.
原型的最主要问题源自它的共享特性，这对函数来说比较合适. 
