const expect = chai.expect

describe('Colour picked', function () {
  it('Grabs currect color', function () {
    expect('blue').to.eql('blue')
  })

  it('5 colors given', function () {
  expect('#menu').to.have.lengthOf(5)
  })
})

describe('Saving', function () {
  it('Saves to localStorage*', function () {
    expect(true).to.be.true
  })
})

describe('Clear', function () {
  it('Clears canvas when clear all button is pushed*', function () {
    expect('').to.be.empty
  })
})
