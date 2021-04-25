module.exports.createStore = opts => {
  // 定义一个 store 类
  function Store (opts) {
    this.mutations = opts.mutations
    this.state = opts.state
  }
  // 定义实例方法 commit
  Store.prototype.commit = function (type) {
    // 获取type对应的mutation并传入state
    this.mutations[type](this.state)
    // 调用副作用函数
    this.effectFn()
  }
  Store.prototype.effect = function (fn) {
    this.effectFn = fn
  }
  // 创建一个Store实例返回它
  return new Store(opts)
}
