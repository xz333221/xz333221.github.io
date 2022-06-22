// vue 插件
let Vue // 插件install的时候保存下vue变量
class VueRouter {
  constructor (options) {
    this.$options = options
    let current_obj = () => this.$options.routes.find(item => item.path === window.location.hash.slice(1))
    Vue.util.defineReactive(this, 'current', current_obj() || {})
    window.addEventListener('hashchange', () => {
      this.current = current_obj()
    })
  }
}

VueRouter.install = function (_vue, options) {
  Vue = _vue
  // todo:实例需要有$router
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 注册router-view和router-link
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render (h) {
      return h('a', {
        attrs: {
          href: '#' + this.to
        }
      }, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render (h) {
      // todo:获取当前路由对应组件
      return h(this.$router.current.component)
    }
  })
}

export default VueRouter
