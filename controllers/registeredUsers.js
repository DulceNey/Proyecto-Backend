const {usersData} = require("../models/UsersData");

const registeredUsers = async (req, res) => {
    const registered = await usersData.find(req.body);
    res.json({registered})
    }

const newUser = async (req, res) => {
    const users = new usersData (req.body);
    await users.save();
}
module.exports = {registeredUsers, newUser}