let dao = require('../../dao/studyDao/attendanceDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// 스케줄이 없는 출석 여부는 의미가 없기 때문에 출석여부를 검색하려면 스케줄로 검색하려고 했으나, 일단은 따로 검색하게 하고 추후 내부에 배열로 추가시켜 응답할지 생각해 보자
// router.get('/:study_id/attendance/:schedule_id', attendance.check);
function selectAtendance(req, res) {
    dao.select(schedule_id, (err, data)=>{
        logger.debug('[2]controller-selectAtendance');
    let study_id = req.params.study_id;
    let attendance_id = req.params.attendance_id;

    });
}

// 
// router.post('/:study_id/attendance/:attendance_id', attendance.check);
function checkAtendance(req, res) {

}

module.exports = {
    select : selectAtendance,
    check : checkAtendance
}