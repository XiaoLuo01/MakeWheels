const { func } = require('assert-plus')
const { fchmod } = require('fs')

/**
 * 节流函数
 * @param {*} fn 将要执行的函数
 * @param {*} delay 节流规定的时间
 */
function throttle(fn, delay) {
  // 第一种：
  // // 设置一个定时器
  // let timer = null
  // // 返回一个工厂函数
  // return (...args) => {
  //   // 如果 timer 为 false，则执行函数
  //   if (!timer) {
  //     fn.apply(this, args)

  //     // 并在规定的时间之后将 timer 重置
  //     timer = setTimeout(() => {
  //       timer = null
  //     }, delay)
  //   }
  // }
  // 第二种：
  let last = 0
  return (...args) => {
    const now = +Date.now()
    if (now > last + delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

/**
 * 防抖函数
 * @param {*} fn 将要执行的函数
 * @param {*} delay 指定防抖的持续时间
 */
function debounce(fn, delay) {
  let timer = null
  return (...args) => {
    // 若上次还未执行则会被清除
    if (timer) {
      clearTimeout(timer)
    }

    // 重新执行并停止上次执行
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}

module.exports = { throttle, debounce }
