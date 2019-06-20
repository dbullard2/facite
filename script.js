var x = 0;

function showModal(){
  if(!localStorage.noFirstVisit){
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal-overlay').style.display = "block";
    localStorage.noFirstVisit = "1";
  }
}

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
    x++;
  } else if(x == 4){
    document.getElementById('modal').style.display = "none";
    document.getElementById('modal-overlay').style.display = "none";
  }
}
