const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs= require('fs');

var newUser = require('./src/modules/newUserAdded.js')

async function addUser(event){
    newUser.addUserBtn();
    
    
    /*var btn = document.createElement('button');
    document.getElementById('userContainer').appendChild(btn)
    addAttr.newAttribute(btn, {"id":`user-${Counter.count}`,"value": document.querySelector("input").value, "type": "button"})
    btn.innerText = document.querySelector('input').value;
    btn.classList.add('user')
    
    document.querySelector('#userName').value = 'Enter user';
    btn.addEventListener("click", openCal)

    fs.readFile(
        './users.txt',
        'utf-8',
        (err, file) => fs.writeFile(
          './users.txt',
          file.split('\n').map( (line) => `${line + user},`).join('\n'),
          (err) => {}
        )
    );
    console.log(`new ${user} added`);*/
}





const createWindow = () => {
    const win = new BrowserWindow({
        height: 900,
        width: 1200,
        center: true,
        maxHeight: 900,
        maxWidth: 2000,
        minHeight: 900,
        minWidth: 1200,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
            //nodeIntegration: true,
            //contextIsolation: false
        }
    })

    win.loadFile('index.html')
    
    
}



app.whenReady().then(() =>{
    ipcMain.on('new-user', addUser)
    createWindow()

    app.on('activate', () =>{
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin') app.quit()
})


