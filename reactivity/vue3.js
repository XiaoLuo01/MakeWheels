let effective
function effect(fun) {
  effective = fun
}

function reactive(data) {
  if (typeof data !== 'object' || data == null) {
    return data
  }

  const observed = new Proxy(data, {
    get(target, key, receiver) {
      // Reflect 有返回值不报错
      let result = Reflect.get(target, key, receiver)
      // 多层代理
      return typeof result !== 'object' ? result : reactive(result)
    },
    set(target, key, value, receiver) {
      effective()
      const ret = Reflect.set(target, key, value, receiver)
      return ret
    },
    deleteProperty(target, key) {
      effective()
      const ret = Reflect.deleteProperty(target, key)
      return ret
    },
  })
  return observed
}

module.exports = {
  reactive,
  effect,
}
