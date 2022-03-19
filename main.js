const { app, BrowserWindow, ipcMain } = require('electron');
const { ipcMain: ipc } = require('electron-better-ipc')
const path = require('path');
const fs = require('fs')
const db = require('./db.js');
const { default: mongoose } = require('mongoose');


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
    ipc.answerRenderer('new-user', async (user) =>{
        fs.readFile(
            './users.txt',
            'utf-8',
            (err, file) => fs.writeFile(
              './users.txt',
              file.split('\n').map( (line) => `${line + user},`).join('\n'),
              (err) => {}
            )
        );
        console.log(`${user} added to file`)
        db.newUserData(user)

    })

    ipc.answerRenderer('add-task', async (date, title) =>{

    }
    })
    db.connect()
    createWindow()
    app.on('activate', () =>{
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () =>{
    db.disconnect()
    if (process.platform !== 'darwin') app.quit()
})


