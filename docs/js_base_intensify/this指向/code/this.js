function f1 () {
  console.log(`this ==> `, this)
}

function f2 () {
  'use strict'
  console.log(`this ==> `, this)
}

f1() // window/Object [global]
f2() // undefined

const foo = {
  bar: 10,
  name: 'lucas',
  fn: function () {
    console.log(`this ==> `, this)
    console.log(`this.bar ==> `, this.bar)
  },
  logName () {
    console.log(`this.name ==> `, this.name)
  }
}
const bar = {
  name: 'mike'
}

foo.fn()
const fn2 = foo.fn
fn2() // this ==> 全局
foo.logName.call(bar) // mike

// 构造函数中的this
function Foo () {
  this.user = 'Lucas'
  return {}
}

function Foo2 () {
  this.user = 'Lucas'
  return 1 // 返回基本类型时this仍然指向实例
}

const instance = new Foo()
const instance2 = new Foo2()
console.log(`instance.user ==> `, instance.user) // undefined
console.log(`instance2.user ==> `, instance2.user) // Lucas

// 箭头函数中的this
const foo_arrow = {
  fn: function () {
    setTimeout(function () {
      console.log(`this ==> `, this)
    })
  }
}
const foo_arrow2 = {
  fn: function () {
    setTimeout(() => {
      console.log(`this ==> `, this)
    })
  }
}
foo_arrow.fn()  // node环境： Timeout对象，浏览器环境：Window
foo_arrow2.fn() // fn

var a = 123

function foo2 () {
  return a => {
    console.log(`this.a ==> `, this.a)
  }
}

const obj1 = {
  a: 2
}
const obj2 = {
  a: 3
}
const bar2 = foo2.call(obj1)    // this.a ==>  2
const bar3 = bar2.call(obj2)
console.log(`bar3 ==> `, bar3) // undefined

const foo3 = () => a => console.log(`this.a3 ==> `, this.a)
const bar4 = foo3.call(obj1)    // this.a3 ==>  123(window)/undefined(node)

