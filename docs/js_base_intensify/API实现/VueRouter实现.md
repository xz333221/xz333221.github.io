
# VueRouter 实现

### vueRouter做了哪些事
- 实现了全局组件 router-view router-link
- 为实例绑定了$router
- router-link 点击后切换路由并展示对应组件

全局混入 Vue.mixin({})

插件 plugin.install(Vue,options) 

render(createElement)

简单版本的hash路由实现
@[code{2-49}](code/x-vue-router.js)
