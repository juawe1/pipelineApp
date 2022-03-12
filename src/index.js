
// Get the modal
var modal = document.getElementById("userInputModal");

// Get the button that opens the modal
var addBtn = document.getElementById("NewUser");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("modalEnter").addEventListener("click", addUser)

function addUser(){
  
  window.myAPI.newUser();
  modal.style.display = "none";
}
 
var closeCal = document.getElementsByClassName("calClose")[0];

closeCal.onclick =()=>{
  
  document.getElementById('calBody').style.display = "none"
} 

function openCal(){
  document.getElementById('calBody').style.display = "block"
}

/*function newAttribute(el, attrs){
  for(var key in attrs){
      el.setAttribute(key, attrs[key])
  }
};*/

/*function newEvent(elementID, eventType, task){
  document.getElementById(elementID).addEventListener(eventType, task)
}*/

