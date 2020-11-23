/**
 * 模板编译
 */
module.exports.compile = temp => {
  // 通过正则表达式获取到中间的变量
  temp = temp.replace(/\{\{(.+)\}\}/g, function () {
    const key = arguments[1].trim()
    return '${' + key + '}'
  })
  // 主体部分
  let head = `let str = '';\r\n with(obj){\r\n`
  head += 'str+=`'
  // 转化if for的条件语句
  temp = temp.replace(/\{\%([^%]+)\%\}/g, function () {
    return '`\r\n' + arguments[1] + '\r\nstr += `\r\n'
  })
  let tail = '`}\r\n return str'
  return new Function('obj', head + temp + tail)
}
