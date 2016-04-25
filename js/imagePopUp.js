function showImgModal(appendNo){
    var modal = document.getElementById('myModal');
    // Get the image and insert it inside the modal 
    var img = document.getElementById('myImg'+appendNo);
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
//
//window.onload = function(event){
//    var elem1 = document.getElementById("myImg");
//    alert(elem1);
//    var style = window.getComputedStyle(elem1,null).getPropertyValue("width");
//    alert(style);
//}
////
//function highlight_row() {
//    var table = document.getElementById('display-table');
//     //var table = document.getElementById("myTable");
//    count=table.rows.length;
//    alert("count is:"+count);
//    var cells = table.getElementsByTagName('td');
//
//    for (var i = 0; i < cells.length; i++) {
//        // Take each cell
//        var cell = cells[i];
//        // do something on onclick event for cell
//        cell.onclick = function () {
//            // Get the row id where the cell exists
//            var rowId = this.parentNode.rowIndex;
//
//            var rowsNotSelected = table.getElementsByTagName('tr');
//            for (var row = 0; row < rowsNotSelected.length; row++) {
//                rowsNotSelected[row].style.backgroundColor = "";
//                rowsNotSelected[row].classList.remove('selected');
//            }
//            var rowSelected = table.getElementsByTagName('tr')[rowId];
//            rowSelected.style.backgroundColor = "yellow";
//            rowSelected.className += " selected";
//
//           
//        }
//    }
//
//} //end of function
//
//window.onload = highlight_row;