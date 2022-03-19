var currentUser = ''
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
   //create new button for new user
  var btn = document.createElement('button');
  document.getElementById('userContainer').appendChild(btn)
  //setting new button attributes

  newAttribute(btn, {"id":`user-${Counter.getNum()}`,"value": document.querySelector("input").value, "type": "button"})
  Counter.add()
  
  btn.innerText = document.getElementById('userName').value;
  
  btn.classList.add('user')
  btn.addEventListener("click", openCal)

  myAPI.newUser(document.getElementById('userName').value); //adding user to user.txt with api call to preload to trigger event on main.js
  
  document.getElementById('userName').value = 'Enter user';
  modal.style.display = "none";
}
 
var closeCal = document.getElementsByClassName("calClose")[0];
var calendar = document.getElementById('calBody')

closeCal.onclick =()=>{
  calendar.style.display = "none"
} 

function openCal(){
  document.getElementById('currentUser').innerHTML = this.innerHTML
  calendar.style.display = "block"
}

function newAttribute(el, attrs){
  for(var key in attrs){
      el.setAttribute(key, attrs[key])
  }
};

var entryArea = document.getElementById('entryBox')
var EntryDate = document.getElementById('dateRegion')


var pEls = document.getElementsByClassName('calP')
Array.from(pEls).forEach(function(pEls) {
  pEls.onclick = function(){
    calendar.style.display = "none"
    var parent = pEls.parentElement.id
    console.log(`Date: ${parent} ${pEls.innerHTML}`)

    document.getElementById('currentDay').innerText = `${parent} ${pEls.innerHTML}`
    document.getElementById('taskView').style.display = "block"
  }
})

document.getElementById('submitTask').onclick = function(){
    
    
    const task = {
      user: document.getElementById('currentUser').innerHTML,
      date: document.getElementById('dateRegion').innerHTML,
      title: document.getElementById('taskTitle').value,
      client: document.getElementById('forClient').checked,
      category: document.getElementById('category').value,
      notes: document.getElementById('notes').value
    }

    console.log(task)
    
    myAPI.addTask(task)
    entryArea.style.display = "none"
    calendar.style.display = "block"
}


