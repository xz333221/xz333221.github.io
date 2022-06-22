const foo = (function () {
  var v = 0
  console.log(`v + 1 ==> `, v + 1)
  return () => v++
}())

for (let i = 0; i < 10; i++) {
  foo()
}
console.log(`foo() ==> `, foo())

const foo = () => {
  var arr = []
  var i
  for (i = 0; i < 10; i++) {
    arr[i] = function () {
      console.log(`i ==> `, i)
    }
  }
  return arr[0]
}
foo()()


var fn = null
const foo = () => {
  var a = 2
  function innerFoo(){
    console.log(`a ==> `, a)
  }
  fn = innerFoo
}
const bar = () => {
  fn()
}
foo()
bar()

var fn = null
const foo = () => {
  var a = 2
  function innerFoo(){
    console.log(`c ==> `, c)
    console.log(`a ==> `, a)
  }
  fn = innerFoo
}
const bar = () => {
  var c = 100
  fn()
}

foo()
bar()
