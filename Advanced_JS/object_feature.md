## 对象解构

```
let person = {
  name: 'Matt',
  age: 27
}

let personName = person.name
    personAge = person.age
console.log(personName)
console.log(personAge) 
```

结构 Object feature ， 拆分object feature 分支


```
let {name:personName, age: personAge} = person 
console.log(personName)
console.log(perosnAge) 
console.log(name) // name is undefined
console.log(age) // age is undefined 
```

### 嵌套解构
```
let person = {
  name:'Matt',
  age:27, 
  job:{
    title:'Software Engineer'
  }
}

let { job:{title} } = person 
console.log(title) 
```

###  部分解构
```
let person = {
  name:'Matt',
  age:27, 
}

let personName, personBar, personAge
// 顺序不对， 造成误差， 在一一对应的时候， 部分被结构
try{
  {name:personName, foo:{bar:personBar}, age:personAge} = person
}catch(e){
  console.log(e)
}
console.log(title) // Matt, undefined, undefined 
```

###  参数上下匹配 （按照顺序， 一一对应） 
let person = {
  name:'Matt', 
  age: 27
}
function printPerson(foo, {name,age},bar）{
  console.log(arguments)
  console.log(name,age) 
}
function printPerson2(foo, {name: personName,age:personAge},bar）{
  console.log(arguments)
  console.log(personName,personAge) 
}
printPerson('1st',person, '2nd')

printPerson2('1st',person, '2nd')

```

```
