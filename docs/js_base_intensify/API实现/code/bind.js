const obj1 = {
  name: 'Jack',
  showName (num) {
    console.log(`num ==> `, num)
    console.log(`arguments ==> `, arguments)
    console.log(`this.name ==> `, this.name)
  }
}
const obj2 = {
  name: 'Tom'
}
obj1.showName.bind(obj2, 111, 222)(333)
obj1.showName.call(obj2, 444, 555)
obj1.showName.apply(obj2, [666, 777])


Function.prototype.my_call = function (context, ...arr) {
  if (context === null) {
    context = window
  } else {
    context = Object(context)
  }

  const specialProp = Symbol('独立属性')
  // 把this给到obj的一个独立属性上，防止破坏原对象
  context[specialProp] = this
  let result = context[specialProp](...arr)
  delete context[specialProp]
  return result
}

Function.prototype.my_bind = function (context) {
  const _this = this
  const args = Array.prototype.slice.call(arguments, 1)
  return function () {
    const innerArgs = Array.prototype.slice.call(arguments)
    const finalArgs = args.concat(innerArgs)
    return _this.apply(context, finalArgs)
  }
}

obj1.showName.my_bind(obj2, 1, 2)(3)
obj1.showName.my_call(obj2, 4, 5)

Function.prototype.my_apply = function (context) {
  if (context === null || context === undefined) {
    context = window // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
  } else {
    context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }

  // JavaScript权威指南判断是否为类数组对象
  function isArrayLike (o) {
    if (o &&                                    // o不是null、undefined等
      typeof o === 'object' &&                // o是对象
      isFinite(o.length) &&                   // o.length是有限数值
      o.length >= 0 &&                        // o.length为非负值
      o.length === Math.floor(o.length) &&    // o.length是整数
      o.length < 4294967296)                  // o.length < 2^32
      return true
    else
      return false
  }

  const specialPrototype = Symbol('特殊属性Symbol') // 用于临时储存函数
  context[specialPrototype] = this // 隐式绑定this指向到context上
  let args = arguments[1] // 获取参数数组
  let result
  // 处理传进来的第二个参数
  if (args) {
    // 是否传递第二个参数
    if (!Array.isArray(args) && !isArrayLike(args)) {
      throw new TypeError('myApply 第二个参数不为数组并且不为类数组对象抛出错误')
    } else {
      args = Array.from(args) // 转为数组
      result = context[specialPrototype](...args) // 执行函数并展开数组，传递函数参数
    }
  } else {
    result = context[specialPrototype]() // 执行函数
  }
  delete context[specialPrototype] // 删除上下文对象的属性
  return result // 返回函数执行结果
}
