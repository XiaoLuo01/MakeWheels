module.exports.compose = (middlewares = []) => {
  if (middlewares.length === 0) {
    return arg => arg
  }

  // 真正的复合函数
  return function () {
    const fn = middlewares.reduce((a, b) => arg => a(() => b(arg)))
    return fn(() => {})
  }
}
