const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Example of a succesfull connection with and external API
//GET
const { kittyStatus } = require("../controllers/Api");
router.get("/cat", kittyStatus)

module.exports = router;

module.exports = router;
