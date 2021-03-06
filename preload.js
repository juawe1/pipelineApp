const { contextBridge } = require('electron');
const {  ipcRenderer: ipc } = require('electron-better-ipc')
const database = require('./db.js')

contextBridge.exposeInMainWorld('myAPI', {
  newUser: (user) => ipc.callMain('new-user', user),
  addTask: (task) => ipc.callMain('add-task', task), 
})

var Counter = require('./src/modules/increaseUser.js');
var attr = require('./src/modules/attributeUpdate.js')


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
  attr.newAttribute(btn, {"id": `user-${Counter.count}`, "value": data, "type": "button"})
  btn.classList.add('user')
  btn.innerText = data;
  btn.addEventListener("click", openCal)
  Counter.add();
}

var currentUser = ''

function openCal(){
  document.getElementById('currentUser').innerHTML = this.innerHTML
  document.getElementById('calBody').style.display = "block"
}



