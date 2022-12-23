const mongoose = require ("mongoose")
require("dotenv").config()

const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO_DB) 
console.log("Database succesfully connected")
    } catch (error) {
        console.log("Error. We cannot connect with the Database")
        
    }
}
module.exports = {connect}