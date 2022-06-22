---
lang: zh-CN
title: this到底指向谁
---

# this到底指向谁

::: tip 
- 显式绑定与隐式绑定 
    - 显式绑定：call、apply、bind、new 
    - 隐式绑定：通过调用关系确定

- 一般通过上下文对象调用函数时，函数体内的this会被绑定到该对象上。
:::

<br/>

在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的this会绑定到undefined上，在非严格模式下则会被绑定到全局对象window/global上。
@[code{1-11}](./code/this.js)

<br/>

一般通过 call/apply/bind 方法显式调用函数时，函数体内的this会被绑定到指定参数的对象上。
@[code{13-31}](./code/this.js)

<br/>

一般使用new方法调用构造函数时，构造函数内的this会被绑定到新创建的对象上。
@[code{33-47}](./code/this.js)

<br/>

在箭头函数中，this的指向是由外层作用域来决定的。
@[code{49-65}](./code/this.js)
@[code{67-86}](./code/this.js)
