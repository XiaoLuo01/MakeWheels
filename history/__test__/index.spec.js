const { createHistory } = require('./../index')

it('前进undo ', () => {
  const history = createHistory()

  history.push({ num: 1 })
  history.push({ num: 2 })
  history.push({ num: 3 })
  history.undo()
  expect(history.present.num).toBe(2)
})

it('回退redo ', () => {
  const history = createHistory()

  history.push({ num: 1 })
  history.push({ num: 2 })
  history.push({ num: 3 })
  history.push({ num: 4 })
  history.undo()
  history.undo()
  history.undo()
  history.redo()
  expect(history.present.num).toBe(2)
})

it('定点回退 ', () => {
  const history = createHistory()

  history.push({ num: 1 })
  history.push({ num: 2 })
  history.push({ num: 3 })
  history.gotoState(1)
  expect(history.present.num).toBe(2)
})
