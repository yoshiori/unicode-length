var test = require('tape')
var unicodeLength = require('../lib/unicode-length')

test('.get(): should throw if no input', function (t) {
  t.throws(function () {
    unicodeLength.get(null)
  }, /Missing input/)

  t.end()
})

test('.get(): should throw if input is not a string', function (t) {
  t.throws(function () {
    unicodeLength.get(123)
  }, /Invalid input: 123/)

  t.end()
})

test('.get(): should return zero if empty string', function (t) {
  t.equal(unicodeLength.get(''), 0)

  t.end()
})

test('.get(): should return the correct length of a string containing unicode symbols', function (t) {
  const result = unicodeLength.get('汉字')
  t.equal(result, 2)

  t.end()
})

test('.get(): should return the correct length of a string containing unicode symbols and colors', function (t) {
  const result = unicodeLength.get('\u001b[32m?\u001b[39m \u001b[1mWhat\'s your first name:\u001b[22m ')
  t.equal(result, 26)

  t.end()
})
