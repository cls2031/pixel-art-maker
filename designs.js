// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// Other variables
const table = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
function sizeSubmit(event) {
  makeGrid();
  // Use preventDefault to stop form from resetting height & width values
  event.preventDefault();
}

form.addEventListener('submit', sizeSubmit);

function makeGrid() {
  // Erase existing grid
  table.innerHTML = '';
  // Draw rows
  for (let x = 0; x < height.value; x++) {
    let row = table.insertRow(x);
    // Draw columns
    for (let y = 0; y < width.value; y++) {
      let cell = row.insertCell(y);
      // Change cell background color on single-click
      cell.addEventListener('click', function() {
        cell.style.backgroundColor = color.value;
      });
    }
  }
}

// References:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
