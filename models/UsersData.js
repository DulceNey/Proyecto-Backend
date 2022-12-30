const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const usersSchema = new Schema ({
    
    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Ocuppation: {
        type: String,
        required: true,
    },
})

const usersData = mongoose.model("usersData", usersSchema);

module.exports = {usersData}