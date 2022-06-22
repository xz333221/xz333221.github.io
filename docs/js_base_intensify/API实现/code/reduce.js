let arr = [11, 22, 33, , 44]
const sum = arr.reduce((a, b) => a + b)
console.log(`sum ==> `, sum)

// arr.reduce(callback[,initialValue])

Object.defineProperty(Array.prototype, 'myReduce', {
  value: function (callback) {
    //特殊处理
    if (this === null) {
      throw new TypeError('reduce called on null or undefined!')
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function!')
    }

    let o = Object(this)
    // >>> 0: 所有非数值转换成0，所有大于等于 0 等数取整数部分
    let len = o.length >>> 0

    let k = 0
    let value

    if (arguments.length >= 2) {
      value = arguments[1]
    } else {
      // 处理空index
      while (k < len && !(k in o)) {
        k++
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value')
      }
      value = o[k++]
    }

    while (k < len) {
      if (k in o) {
        value = callback(value, o[k], k, o)
      }
      k++
    }
    return value
  }
})

const sum2 = arr.myReduce((a, b) => a + b)
console.log(`sum2 ==> `, sum2)
// https://blog.csdn.net/weixin_42595216/article/details/119776517

Array.prototype.myReduce2 = function (cb_fn) {
  const arr = Object(this)
  let init_index = arguments.length >= 2 ? 0 : 1
  let value = init_index === 0 ? arguments[1] : arr[0]
  for (let i = init_index; i < arr.length; i++) {
    if (i in arr)
      value = cb_fn(value, arr[i], i, arr)
  }
  return value
}

// const sum3 = arr.myReduce2((a, b) => a + b)
// console.log(`sum3 ==> `, sum3)
const sum4 = arr.myReduce2((a, b) => a + b)
console.log(`sum4 ==> `, sum4)
