// Documentations
//
// browser API: http://webdriver.io/api.html
// expect API: http://chaijs.com/api/bdd/

import chai from 'chai'

let expect = chai.expect

describe('harttle.com', function () {
  before(function () {
    browser.url('http://harttle.com/')
  })

  it('should open harttle.com', function () {
    expect(browser.getUrl()).to.contain('harttle.com')
  })

  it('should have title properly set', function () {
    expect(browser.getTitle()).to.contain('Harttle Land')
  })

  it('should contain logo text', function () {
    let text = browser.getText('.banner .logo')
    expect(text).to.contain('arttle Land')
  })

  it('should support go/back', function () {
    browser.url('http://example.com')
    expect(browser.getTitle()).to.contain('Example Domain')
    browser.back()
    expect(browser.getTitle()).to.contain('Harttle Land')
  })

  it('should open a blog page', function () {
    browser.click('.posts .post h1.title a')
    browser.pause(3000)
    expect(browser.getUrl()).to.match(/harttle.com.*\.html$/)
  })
})
