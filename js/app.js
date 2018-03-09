$(document).ready(function() {

  ////// GRAB CURRENT COLOR //////

  let colorPicked
  $('#menu').click(function(event) {
    event.preventDefault()
    colorPicked = $(event.target).css('background-color')
  })

  $.ajax({
    url: 'https://g-colourloversapi.herokuapp.com/',
    data: {
      format: 'json'
    },
    success: colourPaletteSuccess
  })


  ////// GRID //////

  for (var i = 0; i < 1681; i++) {
    $('<div></div>').appendTo('#canvas').addClass('pixels')
  }


  ////// DRAGGING ///////

  let isDragging = false;

  $('#canvas').on('mousedown', function(e) {
    isDragging = true
    $(e.target).css('background-color', `${colorPicked}`)

  })

  $('#canvas').on('mousemove', function(e) {
    if (isDragging) {
      $(e.target).css('background-color', `${colorPicked}`)
    }

  })

  $('#canvas').on('mouseup', function(e) {
    isDragging = false

  })

  ////// CLEAR ALL //////

  $('#clear').on('click', function(e) {
    const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
    colorClasses.forEach(x => $('#canvas').children().css('background-color', ''))
  })

  ////// SAVE TO LOCAL STORAGE //////

  $('#save1').on('click', function() {
    let picture1 = $('#canvas').html()
    lsSave('picture1', picture1)
  })

  $('#save2').on('click', function() {
    let picture2 = $('#canvas').html()
    lsSave('picture2', picture2)
  })

  $('#save3').on('click', function() {
    let picture3 = $('#canvas').html()
    lsSave('picture3', picture3)
  })

  ////// RETRIVE FROM LOCAL STORAGE //////

  $('#btn1').on('click', function() {
    if (typeof(Storage !== 'undefined')) {
      lsRetrieve('picture1')
    }
  })

  $('#btn2').on('click', function() {
    if (typeof(Storage !== 'undefined')) {
      lsRetrieve('picture2')
    }
  })

  $('#btn3').on('click', function() {
    if (typeof(Storage !== 'undefined')) {
      lsRetrieve('picture3')
    }
  })
});

// save some stuff
function lsSave(name, value) {
  localStorage.setItem(name, value)
}

// retrieve some stuff
function lsRetrieve(val) {
  $('#canvas').html(localStorage.getItem(val))
}

//////  SHOWS COLORS IN PALETTE //////

function colourPaletteSuccess(result) {
  for (let i = 0, j = 1; i < result[0].colors.length; i++, j++) {
    const colour = result[0].colors[i]
    const circle = $(`#color-${j}`)
    circle.attr('style', `background-color: #${colour}`)
    circle.attr('data-colour', `#${colour}`)
  }
}
