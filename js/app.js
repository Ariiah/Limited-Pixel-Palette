document.addEventListener('DOMContentLoaded', function() {


  //
  // // success: 200,
  // // jsonp: 'onJSONPLoad'

$.ajax ({
  url: 'http://www.colourlovers.com/api/palettes/random',
  data: {
    format: 'json'
  },
  success: function(result) {
    let selection = result[0].colors
    for (var i = 0; i < selection.length; i++) {
      console.log(selection[i])
    }
    // ('api result:', result[0].colors);

    // if the result is XML, pass it into your conversion function
    // xml2json(result)

  }
})


  ////// loops through pixel to make grid of desired size //////

  var canvas = document.getElementById('canvas'); // shorthand to call the canvas id in DOM
  for (let i = 0; i < 1681; i++) { // loops through the new div
    let pixel = document.createElement('div'); // creates new div for pixels
    pixel.classList.add('pixels'); // adds pixel class the the list of classes
    canvas.appendChild(pixel); // actually attaches the pixel div to the canvas, then loops
  } // through the continually add pixels


  let menuColors = document.getElementById("menu")

  ///// GET CURRENT COLOR /////
  let currentColor; // declare unassigned global variable to use later
  menuColors.addEventListener('click', function(event) {
    currentColor = event.target.classList[0]
    event.target.classList.add(currentColor)
  })


  ////// DRAGGING ///////

  let dragging = false

  ////// MOUSEDOWN //////
  const start = (event) => { // same as "let start = function(event)" or function start(event)
    dragging = true // changes dragging to work
    event.target.className = `pixels ${currentColor}` // targets color selected
  }
  canvas.addEventListener("mousedown", start)

  //////MOUSEOVER /////

  const drag = (event) => {
    if (dragging === true){ // checks if it's still true so draggin continues
      event.target.className = `pixels ${currentColor}` // same as 'pixels ' + (currentColor)
    }
  }
  canvas.addEventListener("mouseover", drag)

  ////// MOUSEUP //////

  const end = (event) => {
    dragging = false // ends the dragging
  }
  canvas.addEventListener("mouseup", end)

  ////// ERASE //////
  //
  // let eraser = document.getElementsByClassName('eraser')
  // eraser.addEventListener('click', function (event) {
  //   document.eraser.style.backgroundColor = 'white'
  // })

  // let currentColor; // declare unassigned global variable to use later
  // menuColors.addEventListener('click', function(event) {
  //   currentColor = event.target.classList[0]
  //   event.target.classList.add(currentColor)
  // })

//   var node = document.getElementById('eraser');
//     node.addEventListener('click', function (event) {
//       while (node.hasChildNodes()) {
//         node.removeChild(node.firstChild);
//     }
// })

  ////// CLEAR ALL //////

  let clear = document.getElementById('clear')
  // clear.addEventListener('click', function (event) {
  //   currentColor = event.target.classList[0]
  //   event.target.classList.remove(currentColor)
  //
  // })

  clear.addEventListener('click', function (event) {
    const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
    colorClasses.forEach(x => $('#canvas').children().removeClass(x))
  })

  ////// for looping through colors //////

  // var menu = document.getElementById('menu')
  // for (var i = 0; i < 2; i++) {
  //   let color = document.createElement('div');
  //   color.classList.add('hues');
  //   menu.appendChild(color);
  //
  // }

  ////// creating new div element for palette //////

  // let menu = document.getElementById('menu')
  // let colorPicker = document.createElement('div')
  // colorPicker.classList.add('palette')
  // menu.appendChild(colorPicker)
  //
  //   }
  // }



});
