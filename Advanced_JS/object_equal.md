## 对象标识及相等判定

### 这些是 === 符合预期的情况  === 绝对等于 

```
console.log(true === 1); // false 
console.log({} === {}); // object 不等于 object false 
console.log({ name: "a" } === { name: "a" }); // false 
console.log("2" === 2); //false
```

### 这些是 === 不符合预期的情况
```
console.log(+0===-0); // false 
console.log(+0===0); // object 不等于 object false 
console.log(-0===0); // false 
```

### 要确定NaN的相等性，必须使用 isNaN()
```
console.log(NaN === NaN); // false 
console.log(isNan(NaN)); // object 不等于 object false 
```

### ECMAScript 6 新增 Object.is

console.log(Object.is(true,1)) // false 
console.log(Object.is(+0, -0)) // false 
console.log(Object.is(-0,0) // false 
console.log(Object.is(NaN, NaN)) // true 
