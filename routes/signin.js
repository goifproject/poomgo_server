let express = require('express');
let router = express.Router();
let signin = require('../controller/signin/signin');

/* GET users listing. */
router.post('/', signin.signin);

module.exports = router;