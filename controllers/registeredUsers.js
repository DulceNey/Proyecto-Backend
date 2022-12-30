const {usersData} = require("../models/UsersData");

//GET
const registeredUsers = async (req, res) => {
    const registered = await usersData.find(req.body);
    res.json({registered})
    }

//POST    
const newUser = async (req, res) => {
    const users = new usersData (req.body);
    await users.save();
}

//PUT
const updateUser = async (req, res) => {
    await usersData.findByIdAndUpdate(req.params.id, req.body);
}
//DELETE
const deleteUser =  async (req, res) => {
    await usersData.findByIdAndDelete(req.params.id);

}

module.exports = {registeredUsers, newUser, updateUser, deleteUser}