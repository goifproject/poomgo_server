let model = require('../../model/studyModel/scheduleModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 스케줄 생성
// router.post('/:study_id/schedule', schedule.create);
function addNewSchedule(req, res) {
    logger.debug('[2]controller-addNewSchedule');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    // TODO 클라이언트와 datetime만 협의하면 됨
    model.addNewSchedule(study_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디에 ${data.insertId}번 스케줄 생성이 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 조회
// router.get('/:study_id/schedule/:schedule_id', schedule.selectSingle);
function getScheduleInfo(req, res) {
    // TODO 스케줄 조회시 반드시 권한 파악을 해서 출석 데이터를 같이 보내줄 것인지 결정해야 한다
    logger.debug('[2]controller-getScheduleInfo');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    model.getScheduleInfo(schedule_id, (err, data)=>{
        // TODO 추가로 attendace 테이블에 가서 schedule_id 스케줄에 해당하는 데이터까지 함께 보내준다
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 스케줄 전체 조회
// router.get('/:study_id/schedule', schedule.selectAll);
function getScheduleInfoList(req, res) {
    // TODO 스케줄 조회시 반드시 권한 파악을 해서 출석 데이터를 같이 보내줄 것인지 결정해야 한다
    logger.debug('[2]controller-getScheduleInfoList');
    let study_id = req.params.study_id;
    model.getScheduleInfoList(study_id, (err, data)=>{
        // TODO 추가로 attendace 테이블에 가서 출석 데이터까지 함께 보내준다
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 스케줄 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 업데이트
// router.put('/:study_id/schedule/:schedule_id', schedule.update);
function changeScheduleInfo(req, res) {
    logger.debug('[2]controller-changeScheduleInfo');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    let dataObj = req.body;
    model.changeScheduleInfo(schedule_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 업데이트가 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 삭제
// router.delete('/:study_id/schedule/:schedule_id', schedule.delete);
function removeSchedule(req, res) {
    logger.debug('[2]controller-removeSchedule');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    model.removeSchedule(schedule_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    addNewSchedule : addNewSchedule,
    getScheduleInfo : getScheduleInfo,
    getScheduleInfoList : getScheduleInfoList,
    changeScheduleInfo : changeScheduleInfo,
    removeSchedule : removeSchedule
}