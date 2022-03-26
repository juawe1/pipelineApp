const { app, BrowserWindow, ipcMain } = require('electron');
const { ipcMain: ipc } = require('electron-better-ipc')
const path = require('path');
const fs = require('fs')
const { dbAPI } = require('./db.js');
const taskSchema = require('./src/schemas/task-schema.js')


var userAPI = new dbAPI("Cluster0", "pipeLine-app", "users")
var taskAPI = new dbAPI("Cluster0", "pipeLine-app", "tasks")

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
        
        userAPI.insertFor([{ name: user }]).then((response) => {console.log(response)})

    })

    ipc.answerRenderer('add-task', async (task) =>{
        taskAPI.insertFor([task]).then((response) => {console.log(response)})
    })

    ipc.answerRenderer('read-users', async () =>{
        userAPI.readFor().then((response)=>{console.log(response)})
    })

    ipc.answerRenderer('read-tasks', async (date, user) =>{
        taskAPI.readFor({user: user, date: date}).then((response) =>{console.log(response)})
    })

    createWindow()
    app.on('activate', () =>{
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () =>{
    
    if (process.platform !== 'darwin') app.quit()
})


