const test = require('./../test.case')
describe('Compose组合', () => {
  // describe('Koa reduce实现', () => {
  //   const { compose } = require('../koa/koa-reduce')
  //   test(compose)
  // })

  describe('Koa 递归实现', () => {
    const { compose } = require('../koa')
    test(compose)
  })

  // describe('Koa class实现', () => {
  //   const { compose } = require('../koa/koa-class')
  //   test(compose)
  // })

  // describe('Express 实现', () => {
  //   const { compose } = require('../express')
  //   test(compose)
  // })

  // describe('Chain of Responsibility Pattern 责任链模式实现', () => {
  //   const { compose } = require('../chain-of-responsibility-pattern')
  //   test(compose)
  // })

  // describe('20期学员 mqycn', () => {
  //   const { compose } = require('../mqycn/compose')
  //   test(compose)
  // })
  // describe('stack-compose 测试', () => {
  //   const { compose } = require('../stack-compose/index.js')
  //   test(compose)
  // })

  // describe('async 测试', () => {
  //   const { compose } = require('../async/index.js')
  //   test(compose)
  // })

  // describe('ES6 Generator实现', () => {
  //   const { compose } = require('../generator/index.js')
  //   test(compose)
  // })
})
