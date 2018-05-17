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
router.post('/:study_id/notice', notice.makeNotice);
router.get('/:study_id/notice/:notice_id', notice.getNoticeInfo);
router.get('/:study_id/notice', notice.getNoticeInfos);
router.put('/:study_id/notice/:notice_id', notice.changeNoticeInfo);
router.delete('/:study_id/:notice/:notice_id', notice.deleteNotice);

// study - study schedule information
router.post('/:study_id/schedule', schedule.addNewSchedule);
router.get('/:study_id/schedule/:schedule_id', schedule.getScheduleInfo);
router.get('/:study_id/schedule', schedule.getScheduleInfos);
router.put('/:study_id/schedule/:schedule_id', schedule.changeScheduleInfo);
router.delete('/:study_id/schedule/:schedule_id', schedule.deleteSchedule);

// study - attendacne information
router.get('/:study_id/attendance/:schedule_id', attendance.select);
router.put('/:study_id/attendance/:attendance_id', attendance.check);

// study - member candidate information
router.post('/:study_id/candidate', candidate.add);
router.get('/:study_id/candidate', candidate.selectAll);
router.put('/:study_id/candidate/:candidate_id', candidate.update);
router.delete('/:study_id/candidate/:candidate_id', candidate.delete);

// study - member list
router.get('/:study_id/members', member.getMemberList);
router.delete('/:study_id/members/:member_id', member.deleteMemberFromStudy);


module.exports = router;