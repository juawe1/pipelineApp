const mongoose = require('mongoose');

const url = `mongodb+srv://juawei:Xria1X7vJB3jcNRh@cluster0.vkyfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectionPramas = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

var connect = module.exports = {
    start: () =>{
        mongoose.connect(url,connectionPramas)
            .then( () => {
                console.log('connected to database')
            })
            .catch( (err) =>{
                console.log(`Error connecting to the database. \n${err}`)
            })
    }
}
