const {usersData} = require("../models/UsersData");
const {check, validationResult} = require("express-validator")

//GET 
const registeredUsers = async (req, res) => {
    try {
        const protect = validationResult(req)
        if (protect.isEmpty) {
            const registered = await usersData.find(req.body);
            res.json({registered})
        } else {
            res.status(501).json({registered})
        }
    } catch (error) {
        res.status(501).json({error})
    }
    }

//POST    
const newUser = async (req, res) => {
    try {
        const protect = validationResult(req)
        if (protect.isEmpty) {
            const users = new usersData (req.body);
            await users.save();
            res.status(201).json({registered})
        } else {
            res.status(501).json(protect)
        }
        
    } catch (error) {
        res.status(501).json({error})
    }
}

//PUT
const updateUser = async (req, res) => {
    try {
        const protect = validationResult(req)
        if (protect.isEmpty) {
            await usersData.findByIdAndUpdate(req.params.id, req.body);
            res.json({registered})
        } else {
            res.status(501).json(protect)
        }
    } catch (error) {
        res.status(501).json({error})
    }
    
}

//DELETE
const deleteUser =  async (req, res) => {
    try {
        const protect = validationResult(req)
        if (protect.isEmpty) {
            await usersData.findByIdAndDelete(req.params.id);
            res.json(registered)
        } else {
            res.status(501).json(protect)
        }
    } catch (error) {
        res.status(501).json({error})
    }
    

}

module.exports = {registeredUsers, newUser, updateUser, deleteUser}