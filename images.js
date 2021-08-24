// Get the modal
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
let modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById("myImg1");
let img2 = document.getElementById("myImg2");
let img3 = document.getElementById("myImg3");
let img4 = document.getElementById("myImg4");
let img5 = document.getElementById("myImg5");
let modalImg1 = document.getElementById("img01");
let modalImg2 = document.getElementById("img02");
let modalImg3 = document.getElementById("img03");
let modalImg4 = document.getElementById("img04");
let modalImg5 = document.getElementById("img05");
let captionText = document.getElementById("caption");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText.innerHTML = this.alt;
}
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText.innerHTML = this.alt;
  }
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}