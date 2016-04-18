function showImgModal(){
    var modal = document.getElementById('myModal');
    // Get the image and insert it inside the modal 
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("imgModal").valueOf();
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
       document.getElementById('myModal').style.display = "none";
    }
}