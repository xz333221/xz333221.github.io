function objectFactory (fn, ...args) {
  let obj = {}
  obj.__proto__ = fn.prototype
  fn.apply(obj, args)
  return obj
}

const Person = function (name) {
  this.name = name || 'jerry'
  this.age = 18
}

const person = new Person('tom')
console.log(`person ==> `, person)

const person2 = objectFactory(Person, 'tom')
console.log(`person2.__proto__ === Person.prototype ==> `, person2.__proto__ === Person.prototype)
console.log(`person2 ==> `, person2)
