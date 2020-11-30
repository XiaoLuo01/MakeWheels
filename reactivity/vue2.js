let effective

// 副作用函数
function effect(fn) {
  effective = fn
}

const oldArrayPrototype = Array.prototype
const proto = Object.create(oldArrayPrototype)
;[('push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse')].forEach(
  method => {
    proto[method] = function () {
      effective()
      oldArrayPrototype[method].call(this, ...arguments)
    }
  }
)

function reactive(data) {
  // 判断数据是不是对象
  if (typeof data !== 'object' || data === null) {
    return data
  }

  // 数组通过数据劫持提供响应式
  if (Array.isArray(data)) {
    data.__proto__ = proto
  }

  Object.keys(data).forEach(key => {
    let value = data[key]
    // 如果有嵌套，递归调用
    reactive(value)
    Object.defineProperty(data, key, {
      enumerable: false,
      configurable: true,
      get: () => {
        return value
      },
      set: v => {
        if (v !== value) {
          value = v
        }
      },
    })
  })

  return data
}

module.exports = {
  effect,
  reactive,
}
