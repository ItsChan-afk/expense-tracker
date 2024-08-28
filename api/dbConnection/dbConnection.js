const mongoose = require('mongoose')

const DbConnection = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database sucessfully connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = DbConnection