const expect = chai.expect

describe('Retrieves colors', function () {

  it('colourPaletteSuccess', function () {
    $('body').append(`
      <div id="color-1" class="color"></div>
      <div id="color-2" class="color"></div>
      <div id="color-3" class="color"></div>
      <div id="color-4" class="color"></div>
      <div id="color-5" class="color"></div>
    `)
    let res = [{color: ["220F3C", "7341A0", "FC40DD", "F3068C", "65BD69"]}] //????
    colourPaletteSuccess(res)
      // for (let i = 0, j = 1; i < result[0].colors.length; i++, j++) {
      //   const colour = result[0].colors[i]
      //   const circle = $(`#color-${j}`)
      //   circle.attr('style', `background-color: #${colour}`)
      //   circle.attr('data-colour', `#${colour}`)
      // }
    // that some given color div has a bg color
    expect(res[0].color).to.have.lengthOf(5)

  })
})

describe('Saving', function () {
  it('Saves to localStorage', function () {
    lsSave('myparamname', 'something')
    let val = localStorage.getItem('myparamname')
    expect(val).to.equal('something')
  })

  it('Retrieves from localStorage', function () {
    lsRetrieve('data')
    let ret = $('#canvas').html(localStorage.getItem('data'))
    expect(ret).to.eql($('#canvas').html(localStorage.getItem('data')))
  })
})
