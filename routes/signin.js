let express = require('express');
let router = express.Router();
let signin = require('../controller/signin');

/* GET users listing. */
router.post('/', signin)

module.exports = router;