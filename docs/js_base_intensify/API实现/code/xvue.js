function defineReactive (obj, key, val) {
  observe(val)
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    get () {
      Dep.target && dep.add_watcher(Dep.target)
      return val
    },
    set (newVal) {
      observe(newVal)
      if (newVal !== val) {
        val = newVal
        dep.notify()
      }
    }
  })
}

// todo:响应式新增属性
function set (obj, key, val) {
  defineReactive(obj, key, val)
}

function observe (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  new Observe(obj)
}

class Observe {
  constructor (value) {
    this.value = value
    if (Array.isArray(value)) {

    } else {
      this.walk(value)
    }
  }

  walk (obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}

function proxy (vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get () {
        return vm.$data[key]
      },
      set (v) {
        vm.$data[key] = v
      }
    })
  })
}

class XVue {
  constructor (options) {
    this.$options = options
    this.$data = options.data
    this.$el = document.querySelector(options.el)

    this.dep_list = []

    // 响应式处理
    observe(this.$data)

    // 代理
    proxy(this)
    new Compile(this)
  }
}

class Compile {
  constructor (vm) {
    this.$vm = vm
    this.$el = vm.$el

    this.compile(this.$el)

  }

  compile (node) {
    node.childNodes.forEach(node_item => {
      if (this.is_Interpolation(node_item)) {
        this.update('text', node_item, RegExp.$1)
      }

      if (this.is_element(node_item)) {
        const attrs = Array.from(node_item.attributes)
        attrs.forEach(attr => {
          if (attr.name.startsWith('v-')) {
            let directive = attr.name.substring(2)
            const data_key = attr.value

            this.update(directive, node_item, data_key)
          }
        })
      }

      if (node_item.childNodes) {
        this.compile(node_item)
      }
    })
  }

  is_element (node) {
    return node.nodeType === 1
  }

  // 判断是插值表达式
  is_Interpolation (node) {
    const reg_Interpolation = /\{\{(.*)\}\}/
    return node.nodeType === 3 && reg_Interpolation.test(node.textContent)
  }

  update (directive, node, key) {
    const fn = `${directive}Updater`
    this[fn] && this[fn](node, this.$vm[key])
    new Watcher(this.$vm, key, (key) => {
      this[fn] && this[fn](node, this.$vm[key])
    })
  }

  textUpdater (node, value) {
    node.textContent = value
  }

  htmlUpdater (node, value = '') {
    node.innerHTML = value
  }


}

class Watcher {
  constructor (vm, key, cb) {
    this.$vm = vm
    this.$key = key
    this.$cb = cb
    Dep.target = this
    this.$vm[this.$key]
    Dep.target = null
  }

  update () {
    this.$cb(this.$key)
  }
}

class Dep {
  constructor () {
    this.watcher_list = []
  }

  add_watcher (watcher) {
    this.watcher_list.push(watcher)
  }

  notify () {
    this.watcher_list.forEach(watcher => {
      watcher.update()
    })
  }
}
