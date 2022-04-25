// Get the modal
var modal = document.getElementById("myModal");
let signInmodal=document.getElementById("signInmodal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");
let signInBtn = document.getElementById("signInBtn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let span1= document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("transparentBcg")
  modalDom.classList.add("showCart")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  signInmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

signInBtn.onclick = ()=>{
	signInmodal.style.display = "block"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}