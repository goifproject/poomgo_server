let express = require('express');
let router = express.Router();
let study = require('../controller/study/study');
let notice = require('../controller/study/notice');
let schedule = require('../controller/study/schedule');
let attendance = require('../controller/study/attendance');
let candidate = require('../controller/study/candidate');
let member = require('../controller/study/member');

// study - general information
router.post('/', study.openNewStudy);
router.get('/', study.getStudyInfo);
router.get('/:study_id', study.getStudyInfos);
router.put('/:study_id', study.changeStudyInfo);
router.delete('/:study_id', study.closeStudy);

// study - study notice information
router.post('/:study_id/notice', notice.create);
router.get('/:study_id/notice', notice.selectAll);
router.get('/:study_id/notice/:notice_id', notice.selectSingle);
router.put('/:study_id/notice/:notice_id', notice.update);
router.delete('/:study_id/:notice/:notice_id', notice.delete);

// study - study schedule information
router.post('/:study_id/schedule', schedule.create);
router.get('/:study_id/schedule', schedule.selectAll);
router.get('/:study_id/schedule/:schedule_id', schedule.selectSingle);
router.put('/:study_id/schedule/:schedule_id', schedule.update);
router.delete('/:study_id/schedule/:schedule_id', schedule.delete);

// study - attendacne information
router.get('/:study_id/attendance/:schedule_id', attendance.select);
router.put('/:study_id/attendance/:attendance_id', attendance.check);

// study - member candidate information
router.post('/:study_id/candidate', candidate.add);
router.get('/:study_id/candidate', candidate.selectAll);
router.put('/:study_id/candidate/:candidate_id', candidate.update);
router.delete('/:study_id/candidate/:candidate_id', candidate.delete);

// study - member list
router.get('/:study_id/members', member.select);
router.delete('/:study_id/members/:member_id', member.delete);


module.exports = router;