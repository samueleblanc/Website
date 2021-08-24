// Get the modal
let modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg1");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption1");
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