const express = require('express');
const { usersRoute } = require('../controllers/userController');
const router = express.Router();

/* GET users listing. */
router.get('/', usersRoute);

module.exports = router;
