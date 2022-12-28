const express = require('express');
const { usersRoute } = require('../controllers/userController');
const {registeredUsers, newUser} = require("../controllers/registeredUsers");
const router = express.Router();

//GET
router.get('/', usersRoute);
router.get("/registered", registeredUsers);

//POST
router.post("/new", newUser)

module.exports = router;
