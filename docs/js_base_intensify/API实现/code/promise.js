// https://zhuanlan.zhihu.com/p/407883529
const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败
class MyPromise {
  constructor (fn) {
    fn(this.resolve, this.reject)
  }

  value = undefined
  reason = undefined
  status = PENDING
  success_cb_arr = []
  error_cb_arr = []

  resolve = value => {
    if (this.status !== PENDING) return
    this.status = FULFILLED
    this.value = value
    while (this.success_cb_arr.length) this.success_cb_arr.shift()(value)
  }

  reject = reason => {
    if (this.status !== PENDING) return
    this.status = REJECTED
    this.reason = reason
    while (this.error_cb_arr.length) this.error_cb_arr.shift()(reason)
  }

  then (success_fn, err_fn) {
    switch (this.status) {
      case FULFILLED:
        if (success_fn) success_fn(this.value)
        break
      case REJECTED:
        if (err_fn) err_fn(this.reason)
        break
      default:
        if (success_fn) this.success_cb_arr.push(success_fn)
        if (err_fn) this.error_cb_arr.push(err_fn)
    }
    return this
  }

  catch (err_fn) {
    if (this.status === REJECTED && err_fn) {
      err_fn(this.reason)
      return
    }
    if (this.status === PENDING && err_fn) {
      this.error_cb_arr.push(err_fn)
    }
  }
}

const my_promise = new MyPromise((resolve, reject) => {
  if (Math.random() < 0.5) {
    setTimeout(() => {
      resolve(123)
    }, 2000)
  } else {
    setTimeout(() => {
      reject(456)
    }, 1000)
  }
})
my_promise.then(res => {
  console.log(`res ==> `, res)
}).catch(err => {
  console.log(`err ==> `, err)
})
my_promise.then(res => {
  console.log(`res222 ==> `, res)
})
console.log(`my_promise ==> `, my_promise)
