let dao = require('../../dao/studyDao/scheduleDao');
let attendaceDao = require('../../dao/studyDao/attendanceDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 스케줄 생성
// router.post('/:study_id/schedule', schedule.create);
function createSchedule(req, res) {
    logger.debug('[2]controller-createSchedule');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    // TODO 클라이언트와 datetime만 협의하면 됨
    dao.create(study_id, dataObj, (err, data)=>{
        // 스케줄이 만들어 지는 것과 동시에 자동으로 출석부가 생성된다
        attendaceDao.create(study_id, data.insertId, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디에 ${data.insertId}번 스케줄 생성이 완료되었습니다`, {}, res);
        });
    });
}

// study_id번 스터디 스케줄 전체 조회
// router.get('/:study_id/schedule', schedule.selectAll);
function selectAllSchedules(req, res) {
    // TODO 스케줄 조회시 반드시 권한 파악을 해서 출석 데이터를 같이 보내줄 것인지 결정해야 한다
    logger.debug('[2]controller-selectAllSchedules');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        // TODO 추가로 attendace 테이블에 가서 출석 데이터까지 함께 보내준다
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 스케줄 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 조회
// router.get('/:study_id/schedule/:schedule_id', schedule.selectSingle);
function selectSingleSchedule(req, res) {
    // TODO 스케줄 조회시 반드시 권한 파악을 해서 출석 데이터를 같이 보내줄 것인지 결정해야 한다
    logger.debug('[2]controller-selectSingleSchedule');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    dao.select(schedule_id, (err, data)=>{
        // TODO 추가로 attendace 테이블에 가서 schedule_id 스케줄에 해당하는 데이터까지 함께 보내준다
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 업데이트
// router.put('/:study_id/schedule/:schedule_id', schedule.update);
function updateSchedule(req, res) {
    logger.debug('[2]controller-updateSchedule');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    let dataObj = req.body;
    dao.update(schedule_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 업데이트가 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 삭제
// router.delete('/:study_id/schedule/:schedule_id', schedule.delete);
function deleteSchedule(req, res) {
    logger.debug('[2]controller-deleteSchedule');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    dao.deleteSchedule(schedule_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    create : createSchedule,
    selectAll : selectAllSchedules,
    selectSingle : selectSingleSchedule,
    update : updateSchedule,
    delete : deleteSchedule
}