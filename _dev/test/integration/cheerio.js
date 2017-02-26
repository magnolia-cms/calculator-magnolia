/* Tests the rendered templates with mocha and cheerio.
These tests depend on a demo page installed on a running magnolia instance.
*/

const assert = require('assert')
const request = require('request')
const cheerio = require('cheerio')

const URL = 'http://superuser:superuser@localhost:8080/magnoliaAuthor/demo-calculator.html'

// Magnolia server rejects the request if it does not appear to come from a browser.
const USER_AGENT = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0'
}

describe('integration test', () => {

  it('renders the template with the calculator', (done) => {
    request({
      headers: USER_AGENT,
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)
      assert.equal($('.calculator').length, 2)
      done()
    })
  }).timeout(10000)

  it('renders the interest calculator', (done) => {
    request({
      headers: USER_AGENT,
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)

      const $el = $('#interestCalculator')

      assert.ok($el.length, '#interestCalculator found')
      assert.equal($el.find('h2').text(), 'Interest Calculator')
      done()
    })
  })


  it('renders the mortgage calendar', (done) => {
    request({
      headers: USER_AGENT,
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)

      const $el = $('#mortgageCalculator')

      assert.ok($el.length, '#mortgageCalculator found')
      assert.equal($el.find('h2').text(), 'Mortgage Calculator')
      done()
    })
  })

})
