// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg1");
let img = document.getElementById("myImg2");
let img = document.getElementById("myImg3");
let img = document.getElementById("myImg4");
let img = document.getElementById("myImg5");
let modalImg = document.getElementById("img01");
let modalImg = document.getElementById("img02");
let modalImg = document.getElementById("img03");
let modalImg = document.getElementById("img04");
let modalImg = document.getElementById("img05");
let captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}