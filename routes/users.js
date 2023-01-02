const express = require('express');
const { usersRoute } = require('../controllers/userController');
const {registeredUsers, newUser, updateUser, deleteUser} = require("../controllers/registeredUsers");
const router = express.Router();

//GET
router.get('/', usersRoute);
router.get("/registered", registeredUsers);

//POST
router.post("/new", newUser)

//PUT
router.put("/update/:id", updateUser)

//DELETE
router.delete("/delete/:id", deleteUser)

module.exports = router;
