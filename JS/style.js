var click = 0;
function biggerPictures() {
    click++;
    var pic30 = document.getElementById("pic30");
    if ((click + 1) % 2 == 0) {
        pic30.style.height = "80%";
        pic30.style.width = "80%";
    }
    else if (click % 2 == 0) {
        pic30.style.height = "30%";
        pic30.style.width = "30%";
    }
}