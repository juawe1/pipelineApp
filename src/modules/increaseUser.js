const { contextBridge } = require('electron')

var increaseUser = module.exports = {
    count: 1,
    add: function(){
        increaseUser.count += 1
        //console.log(this.count)
    }
}



contextBridge.exposeInMainWorld('Counter', {
    getNum: () => { return increaseUser.count},
    add: () => { increaseUser.add() }
})