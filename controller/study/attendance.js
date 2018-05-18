let model = require('../../model/studyModel/attendanceModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// 스케줄이 없는 출석 여부는 의미가 없기 때문에 출석여부를 검색하려면 스케줄로 검색하려고 했으나, 일단은 따로 검색하게 하고 추후 내부에 배열로 추가시켜 응답할지 생각해 보자
// router.get('/:study_id/attendance/:schedule_id', attendance.check);
function getAtendanceInfo(req, res) {
    logger.debug('[2]controller-getAtendanceInfo');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    model.getAtendanceInfo(schedule_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}출석조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:study_id/attendance/:attendance_id', attendance.check);
function checkAtendance(req, res) {
    logger.debug('[2]controller-checkAtendance');
    let study_id = req.params.study_id;
    let attendance_id = req.params.attendance_id;
    var dataObj = req.body;
    model.checkAtendance(attendance_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${attendance_id} 출석 상태 변경이 완료되었습니다`, {}, res);
    });
}

// TODO 언제 생성해야 하는거니 -> 스터디 생성 - 스케줄 생성 - 출석 생성
// 스터디 시작 할 때 스케줄이랑 스터디 타임 계산해서 출석 만든다.
// function createAttendance(study_id, schedule_id) {
//     logger.debug('[2]controller-checkAtendance');
//     model.create(study_id, schedule_id, (err, data)=>{
//         if(err) return error.send(500, err, res);
//         result.send(200, `${study_id}번 스터디 출석표 생성이 완료되었습니다`, {}, res);
//     });
// }

module.exports = {
    getAtendanceInfo : getAtendanceInfo,
    checkAtendance : checkAtendance
}