const { complie } = require('./../template.js')
describe('模板编译', () => {
  it('{{}}表达式', () => {
    const output = compile('<b>{{ name }}</b>')({ name: 'tom' })
    expect(output).toBe(`<b>tom</b>`)
  })
})
