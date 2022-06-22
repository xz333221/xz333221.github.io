
# Vue的基础实现

### 思路


- DOM中每一个更新的data对应一个watcher
- 对 data 遍历时，每次创建一个Dep来管理其所对应的watcher
- data的劫持 Object.defineProperty，每次修改时更新对应watcher

### watcher 与 dep关系的建立

- 每次new Watcher时给Dep添加一个静态属性 ```Dep.target = this```
- 显式读取data对应key ，在get()中添加watcher
- 删除静态属性
@[code{1-169}](code/xvue.js)
