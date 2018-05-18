let express = require('express');
let router = express.Router();
let study = require('../controller/study/study');
let notice = require('../controller/study/notice');
let schedule = require('../controller/study/schedule');
let attendance = require('../controller/study/attendance');
let candidate = require('../controller/study/candidate');
let member = require('../controller/study/member');

// study - general information
router.post('/', study.createNewStudy);
router.get('/:study_id', study.getStudyInfo);
router.get('/', study.getStudyInfoList);
router.put('/:study_id', study.changeStudyInfo);
router.delete('/:study_id', study.closeStudy);

// study - study notice information
router.post('/:study_id/notice', notice.makeNewNotice);
router.get('/:study_id/notice/:notice_id', notice.getNoticeInfo);
router.get('/:study_id/notice', notice.getNoticeInfoList);
router.put('/:study_id/notice/:notice_id', notice.changeNoticeInfo);
router.delete('/:study_id/:notice/:notice_id', notice.removeNotice);

// study - study schedule information
router.post('/:study_id/schedule', schedule.addNewSchedule);
router.get('/:study_id/schedule/:schedule_id', schedule.getScheduleInfo);
router.get('/:study_id/schedule', schedule.getScheduleInfoList);
router.put('/:study_id/schedule/:schedule_id', schedule.changeScheduleInfo);
router.delete('/:study_id/schedule/:schedule_id', schedule.removeSchedule);

// study - attendacne information
router.get('/:study_id/attendance/:schedule_id', attendance.getAtendanceInfo);
router.put('/:study_id/attendance/:attendance_id', attendance.checkAtendance);

// study - member candidate information
router.post('/:study_id/candidate', candidate.addCandidateToStudy);
router.get('/:study_id/candidate', candidate.getCandidateList);
router.put('/:study_id/candidate/:candidate_id', candidate.changeCandidateStatus);
router.delete('/:study_id/candidate/:candidate_id', candidate.removeCandidateFromStudy);

// study - member list
router.get('/:study_id/member', member.getMemberList);
router.delete('/:study_id/members/:member_id', member.removeMemberFromStudy);

module.exports = router;