let dao = require('../../dao/studyDao/scheduleDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 스케줄 생성
// router.post('/:study_id/schedule', schedule.create);
function createSchedule(req, res) {
    logger.debug('[2]controller-createSchedule');
    let study_id = req.params.study_id;
    var postData;
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // reg_date 설정해 줘야 함
        dao.create(study_id, postData, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디에 스케줄 생성이 완료되었습니다`, data, res);
        });
    });
}

// study_id번 스터디 스케줄 전체 조회
// router.get('/:study_id/schedule', schedule.selectAll);
function selectAllSchedules(req, res) {
    logger.debug('[2]controller-selectAllSchedules');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 스케줄 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 schedule_id 스케줄 조회
// router.get('/:study_id/schedule/:schedule_id', schedule.selectSingle);
function selectSingleSchedule(req, res) {
    logger.debug('[2]controller-selectSingleSchedule');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    dao.select(study_id, schedule_id, (err, data)=>{
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
    var postData = '';
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // update_date 설정해 줘야 함
        dao.update(study_id, schedule_id, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디 ${schedule_id}스케줄 업데이트가 완료되었습니다`, data, res);
        });
    });
}

// study_id번 스터디 schedule_id 스케줄 삭제
// router.delete('/:study_id/schedule/:schedule_id', schedule.delete);
function deleteSchedule(req, res) {
    logger.debug('[2]controller-deleteSchedule');
    let study_id = req.params.study_id;
    let schedule_id = req.params.schedule_id;
    dao.deleteSchedule(study_id, schedule_id, (err, data)=>{
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