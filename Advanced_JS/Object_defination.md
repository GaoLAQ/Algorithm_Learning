# Unstanding of Object 

## 创建自定义Object 

```
let person = new Object() 
person.name = 'Nicoloas'
person.age = 29 
person.sayName = function(){
   console.log(this.name) 
}
```
## 属性的类型

属性分为两种：数据属性和访问性属性 

数据属性：
- [[Configurable]]: 表示属性是否可以通过delete 删除并重新定义， 是否可以修改它的特性， 以及是否把它改为访问器
- [[Enumerable]]： 表示属性是否可以通过for-in 循环返回， 默认情况下， 所有直接定义在对象的属性特性是true
- [[Writable]]：表示属性值是否修改。 默认为ture
- [[Value]]： 包含属性实际的值。 默认属性为undefined 

### Example： 
```
let person = {
  name:'Nicolas'
}
```

这里， 我们创建一个名为name 的属性，并给它赋予一个值‘Nicolas’。 这意味着[[Value]]特性会设置为'Nicolas', 之后对这个值的任何修改都会保存这个值

```
let person = {}
Object.defineProperty(Person,'name',{
  writable: false, 
  value: 'Nicolas'
})
console.log(person.name) // 'Nicolas'
person.name = "Greg"
console.log(person.name) // 'Nicolas' 没有进行改变
console.log(person) // {} 说明我们只改变了内部值
```

*[[]] 外部不能 访问

## 访问器属性
访问器不包含数据值，相反，他们包含一个获取（getter) 函数和一个设置（setter）函数
-[[Configurable]] 表示属性是否可以通过delete 删除， 默认值为true
-[[Enumerable]] 表示属性是可以通过for-in 循环返回， 默认值为true
-[[GET]]：获取函数， 在读取属性时调用。 默认值为undefined
-[[SET]]：设置函数， 在写用时属性调用。默认值为undefined 

```
let book = {
  year_:2017,
  edition:1
}

Object.defineProperty(book, 'year', {
  get(){
    return this.year_
  }
  set(newValue){
    if(newValue > 2017）{
      this.year_ = newValue
      this.edition += newValue - 2017 // 先理解 this.edition = newValue - 2017 再理解this.edition += num 进行update
    }
  }
})
book.year = 2018 // year_ "_" 是一个符号
console.log(book.edition) 

```
> year_ 中的下划线常用来表示该属性并不希望在对象的外部被访问


