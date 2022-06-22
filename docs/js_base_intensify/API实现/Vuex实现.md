
# Vuex 实现

### vuex做了哪些事
- 定义一个全局的state 可以用vue借鸡生蛋 
- 为实例绑定了$store

state 借用vue 

_data等同于$data

commit dispatch 改变this指向

getters 属性 响应式

插件 plugin.install(Vue,options) 

由于new Vuex.Store({})
所以解构 export default

简单版本的vuex实现
@[code{1-62}](code/xvuex.js)
