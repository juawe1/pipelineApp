var openCal = module.exports = {
    control: function(elementID, type){
        if (type === "open"){
            elementID.style.display = "block"
            console.log("calendar has opened");
        }else if (type === "close"){
            elementID.style.display = "none"
            console.log("calendar closed");
        }
        return
    }
}