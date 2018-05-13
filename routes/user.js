let express = require('express');
let router = express.Router();
let user = require('../controller/user/user');
let exposure = require('../controller/user/exposure');
let interest = require('../controller/user/interest');
let blacklist = require('../controller/user/blacklist');
let mystudy = require('../controller/user/mystudy');
let review = require('../controller/user/review');

// user - general information
router.post('/', user.create);
router.get('/', user.selectAll);
router.get('/:user_id', user.selectSingle);
router.put('/:user_id', user.update);
router.delete('/:user_id', user.delete);

// user - information expousre status
router.get('/:user_id/exposure', exposure.read);
router.put('/:user_id/exposure', exposure.update);

// user - interest fields
router.get('/:user_id/interest', interest.select);
router.put('/:user_id/interest', interest.update);

// user - blacklist information
router.post('/:user_id/blacklist', blacklist.add);
router.get('/:user_id/blacklist', blacklist.read);
router.delete('/:user_id/blacklist/:black_id', blacklist.delete);

// user - mystudy information
router.post('/:user_id/mystudy', mystudy.add);
router.get('/:user_id/mystudy', mystudy.read);
router.put('/:user_id/mystudy/:study_id', mystudy.update);
router.delete('/:user_id/mystudy/:study_id', mystudy.delete);

// user - review information
router.post('/:user_id/review', review.create);
router.get('/:user_id/review', review.read);
router.put('/:user_id/review/:writer_id', review.update);
router.delete('/:user_id/review/:writer_id', review.delete);

module.exports = router;