document.addEventListener('DOMContentLoaded', function() {
  lastColorPicked()

$.ajax ({
  url: 'http://www.colourlovers.com/api/palettes/random',
  data: {
    format: 'json'
  },
  success: colourPaletteSuccess
})

  //////  SHOWS COLORS IN PALETTE //////

function colourPaletteSuccess(result) {
  for (let i = 0, j = 1; i < result[0].colors.length; i++, j++) {
    const colour = result[0].colors[i]
    const circle = $(`#color-${j}`)
    circle.attr('style', `background-color: #${colour}`)
    circle.attr('data-colour', `#${colour}`)
  }
  // if the result is XML, pass it into your conversion function
  // xml2json(result)
}

  ////// loops through pixel to make grid of desired size //////

  var canvas = document.getElementById('canvas'); // shorthand to call the canvas id in DOM
  for (let i = 0; i < 1681; i++) { // loops through the new div
    let pixel = document.createElement('div'); // creates new div for pixels
    pixel.classList.add('pixels'); // adds pixels class the the list of classes
    // pixel.addEventListener('click', pixelClicked)
    canvas.appendChild(pixel); // actually attaches the pixel div to the canvas, then loops
  } // through the continually add pixels


  ///// GRAB CURRENT COLOR /////

  let colorPicked
  function lastColorPicked () {
    $('#menu').click(function(event){
      event.preventDefault()
      colorPicked = $(event.target).css('background-color')

    })
  }

  ////// DRAGGING ///////

  let dragging = false

  ////// MOUSEDOWN //////
  const start = (event) => { // same as "let start = function(event)" or function start(event)
    dragging = true // changes dragging to work
    console.log(colorPicked);
    event.target.style.backgroundColor = `${colorPicked}` // targets color selected
  }
  canvas.addEventListener("mousedown", start)

  //////MOUSEOVER /////

  const drag = (event) => {
    if (dragging === true){ // checks if it's still true so dragging continues
      event.target.style.backgroundColor = `${colorPicked}` // same as 'pixels ' + (currentColor)
    }
  }
  canvas.addEventListener("mouseover", drag)

  ////// MOUSEUP //////

  const end = (event) => {
    dragging = false // ends the dragging
  }
  canvas.addEventListener("mouseup", end)

  ////// CLEAR ALL //////

  $('#clear').on('click', function (e) {
    const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
    colorClasses.forEach(x => $('#canvas').children().css('background-color', ''))
  })
});
