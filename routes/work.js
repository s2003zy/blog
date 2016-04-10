/**
 * Created by s2003zy on 16/4/10.
 */

var express = require('express');
var router = express.Router();
var work = require('../controllers/work')
router.get('/',  work.page);

module.exports = router;