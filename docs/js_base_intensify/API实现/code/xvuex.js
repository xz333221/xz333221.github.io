let Vue

class Store {
  constructor (options) {
    this.$options = options
    // todo:借鸡生蛋
    this._vm = new Vue({
      data: {
        // $$ 不会被代理，会藏起来
        $$state: options.state
      }
    })
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
    this.getters = {}
    let _this = this
    for (const getter_key in options.getters) {
      Object.defineProperties(this.getters, {
        [getter_key]:{
          get () {
            return options.getters[getter_key](_this.state)
          }
        }
      })
    }
  }

  get state () {
    return this._vm._data.$$state
  }

  set state (v) {
    console.error('please use replaceState to reset state')
  }

  commit (mu_name, ...args) {
    let target_mutation = this.$options.mutations[mu_name]
    if (target_mutation) {
      target_mutation.call(this, this.state, ...args)
    }
  }

  dispatch (ac_name, ...args) {
    let target_action = this.$options.actions[ac_name]
    if (target_action) {
      target_action.call(this, this, ...args)
    }
  }
}

function install (_vue) {
  Vue = _vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default { Store, install }
