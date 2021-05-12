// CHANGING BG COLOR // 

var x = 0;
var y = 0;

document.addEventListener('mousemove', function(event) {
  x = event.clientX;
  y = event.clientY;
  document.body.style.backgroundColor = 'rgb(' + x + ', ' + y + ', ' + y + ''; 
});


