## Merge Object 
assign 覆盖理论
```
let dest, src, result;

dest = {};
src = { id: "src" };
result = Object.assign(dest, src);

// Object.assign 修改目标对象， 同时修改后目标对象

多个object 覆盖理论
console.log(dest === result); // true 
console.log(dest!==src); // true 
console.log(result); // {id:src} 
console.log(dest); // {id:src}

```

```
let dest = {id:'dest'}
result = Object.assign(dest,{id:'src1', a:'foo'}, {id:'src2', b:'bar'}
// Object.assign // 会覆盖重复的属性
console.log(result) // {id:src2, a:'foo', b:'bar'}
```

对象引用 - 浅复制意味指挥复制对象的引用

```
dest = {}
src = {a:{}}
Object.assign(dest, src)
console.log(dest) // {a:{}}
console.log(dest.a === src.a) // true 
```

