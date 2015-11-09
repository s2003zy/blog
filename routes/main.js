/**
 * Created by s2003zy on 15/11/9.
 */

var express = require('express');
var router = express.Router();
var main = require('../controllers/main')
router.get('/',  main.page);

module.exports = router;