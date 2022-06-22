---
lang: zh-CN
title: 
description: 页面的描述
---
# compose方法实现

:::tip
在函数式编程当中有一个很重要的概念就是函数组合， 实际上就是把处理数据的函数像管道一样连接起来， 然后让数据穿过管道得到最终的结果。
:::

```js
const operate = compose(div2, mul3, add1, add1)
operate(0) //=>相当于div2(mul3(add1(add1(0)))) 
```

手写
@[code{1-5}](./code/compose.js)
