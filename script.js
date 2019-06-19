var x = 0;

function nextSlide() {
  if (x == 0) {
    document.getElementById('slide-one').style.display = "none";
    document.getElementById('slide-two').style.display = "block";
    x++;
  } else if(x == 1){
    document.getElementById('slide-two').style.display = "none";
    document.getElementById('slide-three').style.display = "block";
    x++;
  } else if(x == 2){
    document.getElementById('slide-three').style.display = "none";
    document.getElementById('slide-four').style.display = "block";
    x++;
  } else if(x == 3){
    document.getElementById('slide-four').style.display = "none";
    document.getElementById('slide-five').style.display = "block";
    document.getElementById('right-modal-button').textContent = "Finish";
  }
}
