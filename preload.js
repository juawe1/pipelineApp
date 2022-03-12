const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('myAPI', {
  newUser: () => ipcRenderer.send('new-user'),
})

var Counter = require('./src/modules/increaseUser.js');
var calControl = require('./src/modules/calControl.js');

window.addEventListener('DOMContentLoaded', () => {
  fetch('users.txt').then(Response => Response.text()).then((data) => {
    let users = data
    console.log(users)
    var usersArr = users.split(',');
    console.log(usersArr)
    for (let i=0; i < usersArr.length -1; i++){
      addUser(usersArr[i])
    }
  })
  
})


function addUser(data){
  var btn = document.createElement('button');
  document.getElementById('userContainer').appendChild(btn)
  setAttributes(btn, {"id": `user-${Counter.count}`, "value": data, "type": "button"} )
  btn.classList.add('user')
  btn.innerText = data;
  //eventsUpdate.newEvent(`user-${Counter.count}`,"click",openCal)
  Counter.add();
}

function setAttributes(el, attrs) {
  for(var key in attrs){
    el.setAttribute(key, attrs[key])
  }
}

function openCal(){
  calControl.control(document.getElementById('calBody'), "open")
}

