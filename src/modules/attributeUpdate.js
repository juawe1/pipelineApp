var attributes = module.exports = {
    newAttribute: function(el, attrs){
        for(var key in attrs){
            el.setAttribute(key, attrs[key])
        }
    },
    updateAttributes: function(){

    }
}