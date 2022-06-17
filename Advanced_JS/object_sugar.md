# Object 语法糖

### 属性值简写
```
let name = 'Matt'
let person = {
  name: name 
}
```
```
let name = 'Matt'
let person = {
   name: name 
}
```

```
## 有一个难点
function makePersonName(name){
  return name 
} 
```

---
### 可计算属性
在引入可计算属性之前，如果使用变量的值作为属性， 那么必须前声明对象， 然后使用中括号来添加属性。 
```
const nameKey = 'name'
const ageKey = 'age'
const jobKey = 'job'

let person = {}
person[nameKey] = 'Matt'
person[ageKey] = 27 
person[jobKey] = 'Software Engineer'

console.log(person) 
```

等价于
```
const nameKey = 'name'
const ageKey = 'age'
const jobKey = 'job'

let person = {
  [nameKey] ： 'Matt'
  [ageKey] ： 27 
  [jobKey] ： 'Software Engineer'
}


console.log(person) 
```
---
### 简写方法名
```
let person = {
    sayName: function(name){
        console.log(`My name is ${name}`)
    }
}
```

等价于
```
let person = {
    sayName(name){
        console.log(`My name is ${name}`)
    }
}
```
等价于
```
let person = {
    // 内部设置
    name_:'', 
    get name(){
      return this.name_
    }
    set name(name){
      this.name_ = name
    }
    sayName(name){
        console.log(`My name is ${name}`)
    }
}
```
等价于
```
const methodKey = 'sayName'
let person = {
    [methodKey](name){
        console.log(`My name is ${name}`)
    }
}
```

