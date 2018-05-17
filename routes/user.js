let express = require('express');
let router = express.Router();
let user = require('../controller/user/user');
let exposure = require('../controller/user/exposure_status');
let interest = require('../controller/user/interest');
let blacklist = require('../controller/user/blacklist');
let mystudy = require('../controller/user/mystudy');
let review = require('../controller/user/review');

// user - general information
router.post('/', user.signup);
router.get('/:user_id', user.getUserInfo);
router.get('/', user.getUserInfoList);
router.put('/:user_id', user.changeUserInfo);
router.delete('/:user_id', user.leave);

// user - information expousre status
router.get('/:user_id/exposure', exposure.getUserESInfo);
router.put('/:user_id/exposure', exposure.changeUserESInfo);

// user - interest fields
router.get('/:user_id/interest', interest.getInterestInfo);
router.put('/:user_id/interest', interest.changeInterestInfo);

// user - blacklist information
router.post('/:user_id/blacklist', blacklist.addUserToBlackList);
router.get('/:user_id/blacklist', blacklist.getMyBlackList);
router.delete('/:user_id/blacklist/:black_id', blacklist.removeUserFromBlackList);

// user - mystudy information
router.post('/:user_id/mystudy', mystudy.addStudyToMyStudy);
router.get('/:user_id/mystudy', mystudy.getMyStudyList);
router.put('/:user_id/mystudy/:study_id', mystudy.changeMyStudyInfo);
router.delete('/:user_id/mystudy/:study_id', mystudy.removeStudyFromMyStudy);

// user - review information
router.post('/:user_id/review', review.writeReview);
router.get('/:user_id/review', review.readReview);
router.put('/:user_id/review/:writer_id', review.updateReview);
router.delete('/:user_id/review/:writer_id', review.removeReview);

module.exports = router;