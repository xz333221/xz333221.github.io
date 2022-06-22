function foo (arg1 = arg2, arg2) {
  console.log(`arg1, arg2 ==> `, arg1, arg2)
}

foo('arg1', 'arg2')
// foo(undefined, 'arg2')
foo(null, 'arg2')

var a = 'foo' // 分配内存
a = 'bar' // 读写内存
a = null // 释放内存

var element = document.getElementById('element')
element.mark = 'marked'

// 移除element节点
function remove () {
  element.parentElement.removeChild(element)
}

