var addEvent = module.exports = {
    newEvent: function(elementID, eventType, task){
        document.getElementById(elementID).addEventListener(eventType, task)
    }
}