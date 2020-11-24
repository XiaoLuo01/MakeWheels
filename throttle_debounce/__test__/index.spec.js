it('节流Throttle', done => {
  const { throttle } = require('../index')
  // 定义一个 mock 函数
  const mockFn = jest.fn()
  // 封装为节流函数
  const fn = throttle(mockFn, 10)

  // 同步调用两次
  fn(1)
  fn(2)

  setTimeout(() => {
    // 调用函数
    const calls = mockFn.mock.calls

    // 断言
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toBe(1)
    done()
  }, 50)
})

it('防抖Debounce', done => {
  const { debounce } = require('../index')
  // 定义一个 mock 函数
  const mockFn = jest.fn()
  // 封装为节流函数
  const fn = debounce(mockFn, 10)

  // 同步调用两次
  fn(1)
  fn(2)

  setTimeout(() => {
    // 调用函数
    const calls = mockFn.mock.calls

    // 断言
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toBe(2)
    done()
  }, 50)
})
