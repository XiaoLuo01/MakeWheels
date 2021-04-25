let effective
function effect (fun) {
  effective = fun
}

function reactive (data) {
  if (typeof data !== 'object' || data == null) {
    return data
  }

  const observed = new Proxy(data, {
    get (target, key, receiver) {
      const res = Reflect.get(target, key, receiver)
      return typeof res === 'object' ? reactive(res) : res
    },
    set (target, key, value, receiver) {
      effective()
      const res = Reflect.set(target, key, value, receiver)
      return res
    },
    deleteProperty (target, key) {
      return Reflect.deleteProperty(target, key)
    }
  })
  return observed
}

module.exports = {
  reactive,
  effect
}
