// Get the modal
let modal = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg4");
let modalImg = document.getElementById("img04");
let captionText = document.getElementById("caption4");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}