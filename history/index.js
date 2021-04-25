module.exports.createHistory = () => {
  // 时间线
  const timeLine = {
    past: [], // 过去的状态
    present: null, // 现在的状态
    future: [] // 未来的状态
  }

  // 实现一个可以在时间线上跳转的方法
  timeLine.gotoState = index => {
    // 获取全部状态数据
    const allState = [...timeLine.past, timeLine.present, ...timeLine.future]
    timeLine.present = allState[index]
    timeLine.past = allState.slice(0, index)
    timeLine.future = allState.slice(index + 1)
  }

  // 实现一个 push 方法可以添加一个新的状态
  timeLine.push = currentState => {
    // 如果有当前的状态，则直接将当前的状态放入 past
    if (timeLine.present) {
      timeLine.past.push(timeLine.present)
    }
    // 替换当前状态为传入的新状态
    timeLine.present = currentState
  }

  timeLine.getIndex = () => {
    return timeLine.past.length
  }

  // 实现一个 undo 方式，可以跳转到上一个状态
  timeLine.undo = () => {
    if (timeLine.past.length !== 0) {
      timeLine.gotoState(timeLine.past.length - 1)
    }
  }

  // 实现一个 redo 方法，可以跳转到下一个状态
  timeLine.redo = () => {
    if (timeLine.future.length !== 0) {
      timeLine.gotoState(timeLine.getIndex() + 1)
    }
  }

  return timeLine
}
