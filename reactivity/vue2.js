let effective

// 副作用函数
function effect (fun) {
  effective = fun
}

// 数组劫持
const oldArrayProto = Array.prototype
const proto = Object.create(oldArrayProto)
const arrMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
arrMethods.forEach(method => {
  // 函数劫持
  proto[method] = function () {
    effective()
    oldArrayProto[method].call(this, ...arguments)
  }
})

function reactive (data) {
  if (typeof data !== 'object' || data == null) {
    return data
  }

  // 数组通过数据劫持提供响应式
  if (Array.isArray(data)) {
    data.__proto__ = proto
  }

  // 遍历对象，一个一个劫持
  Object.keys(data).forEach(key => {
    let value = data[key]
    // 递归调用
    reactive(value)
    Object.defineProperty(data, key, {
      enumerable: false,
      configurable: true,
      get: () => {
        return value
      },
      set: newVal => {
        if (newVal !== value) {
          effective()
          value = newVal
        }
      }
    })
  })
  return data
}

module.exports = {
  effect,
  reactive
}
