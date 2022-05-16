# 图

## :sun_with_face: 图的定义
图是网络结构的抽象模型， 是一组由边连接的节点

图可以表示任何二元关系，比如道路，航班


###  Js中的图
JS 中没有图，但是可以用object 和 array 构建的图

图的表示法： 
- 邻接矩阵
- 邻接表
- 关联矩阵

####  :pushpin: JS邻接矩阵

![image](https://user-images.githubusercontent.com/61554320/168601494-3fc6a3ce-2d86-4eab-82cf-9467c25762fd.png)

从数列开始 A->B, 1 紧接着第二个数

#### :pushpin: JS邻接表
![image](https://user-images.githubusercontent.com/61554320/168600643-8a6a989d-3e21-4e65-b666-672ec0078940.png)

```
{
  A:['B'],
  B:['C','D'],
  C:['E'],
  D:['A'], 
  E:['D']
}
```
