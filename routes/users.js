const express = require('express');
const { usersRoute } = require('../controllers/userController');
const {registeredUsers, newUser, updateUser, deleteUser} = require("../controllers/registeredUsers");
const {check} = require("express-validator");
const { checkDeleteById } = require('../middleware/delete');
const router = express.Router();

//GET
router.get('/', usersRoute);
router.get("/registered", registeredUsers);

//POST
router.post("/new", 
    [check("Name").not().isEmpty().withMessage("We are sorry, but Name cannot be empty. Dont be Shy.").isLength({min:1 , max: 30}).withMessage("Try again, we can read from 1 to 30 letters in a name"),
    check("Age").not().isEmpty().withMessage("We need to know you better. Allow us to know your age, please.").isNumeric().withMessage("Tell us your age with numbers"),
    check("Occupation").isLength({min:1 , max: 30}).withMessage("Please, try to use at least 1 word and lesser than 30 of them")]
,newUser)

//PUT
router.put("/update/:id", [check("Name").not().isEmpty().withMessage("We are sorry, but Name cannot be empty. Dont be Shy.").isLength({min:1 , max: 30}).withMessage("Try again, we can read from 1 to 30 letters in a name"),
check("Age").not().isEmpty().withMessage("We need to know you better. Allow us to know your age, please.").isNumeric().withMessage("Tell us your age with numbers"),
check("Occupation").isLength({min:1 , max: 30}).withMessage("Please, try to use at least 1 word and lesser than 30 of them")], updateUser)

//DELETE
router.delete("/delete/:id",checkDeleteById, deleteUser)

module.exports = router;
