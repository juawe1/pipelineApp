
// Get the modal
var modal = document.getElementById("userInputModal");

// Get the button that opens the modal
var addBtn = document.getElementById("NewUser");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var counter = 0
// When the user clicks on the button, open the modal
addBtn.onclick = function() {
  modal.style.display = "block";
  counter = document.getElementsByClassName('user').length
  console.log(counter)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("modalEnter").addEventListener("click", addUser)

function addUser(){
   //create new button for new user
  var btn = document.createElement('button');
  document.getElementById('userContainer').appendChild(btn)
  //setting new button attributes
  counter += 1
  console.log(counter)
  newAttribute(btn, {"id":`user-${counter}`,"value": document.querySelector("input").value, "type": "button"})
  btn.innerText = document.querySelector('input').value;
  btn.classList.add('user')
  btn.addEventListener("click", openCal)
  window.myAPI.newUser(document.querySelector('input').value); //adding user to user.txt with api call to preload to trigger event on main.js
  document.querySelector('#userName').value = 'Enter user';
  modal.style.display = "none";
}
 
var closeCal = document.getElementsByClassName("calClose")[0];

closeCal.onclick =()=>{
  document.getElementById('calBody').style.display = "none"
} 

function openCal(){
  document.getElementById('calBody').style.display = "block"
}

function newAttribute(el, attrs){
  for(var key in attrs){
      el.setAttribute(key, attrs[key])
  }
};


