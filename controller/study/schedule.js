let model = require('../../model/study/scheduleModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 스케줄 생성
// router.post('/:study_id/schedule', schedule.create);
/**
 * 보수작업 할 떄 꽤나 복잡한 과정을 거칠 수 있다.
 * [2]controller-addNewSchedule
 * [3]scheduleModel-addNewSchedule : 스케줄 추가
 * [4]database-executeByValuesResolveResult
 * [3]attendanceModel-getMemberListP : 참여 멤버 조회
 * [4]database-executeByRawResolveObject
 * [3]attendanceModel-makeAtendanceBookP : 스케줄 아이디, 스터디 아이디, 참여 멤버를 통해 출석부 생성
 * [4]database-executeByRawResolveResult
*/
function addNewSchedule(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-addNewSchedule');
        let study_id = req.params.study_id;
        var dataObj = req.body;
        // TODO 클라이언트와 datetime만 협의하면 됨
        model.addNewSchedule(study_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디에 번 스케줄 생성이 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// study_id번 스터디 schedule_id 스케줄 조회
// router.get('/:study_id/schedule/:schedule_id', schedule.selectSingle);
function getScheduleInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        let study_id = req.params.study_id;
        let schedule_id = req.params.schedule_id;
        model.getScheduleInfo(schedule_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 ${req.params.schedule_id}스케줄 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// study_id번 스터디 스케줄 전체 조회
// router.get('/:study_id/schedule', schedule.selectAll);
function getScheduleInfoList(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getScheduleInfoList');
        let study_id = req.params.study_id;
        model.getScheduleInfoList(study_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 스케줄 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// study_id번 스터디 schedule_id 스케줄 업데이트
// router.put('/:study_id/schedule/:schedule_id', schedule.update);
function changeScheduleInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        let study_id = req.params.study_id;
        let schedule_id = req.params.schedule_id;
        let dataObj = req.body;
        model.changeScheduleInfo(schedule_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 ${req.params.schedule_id}스케줄 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// study_id번 스터디 schedule_id 스케줄 삭제
// router.delete('/:study_id/schedule/:schedule_id', schedule.delete);
function removeSchedule(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-removeSchedule');
        let study_id = req.params.study_id;
        let schedule_id = req.params.schedule_id;
        model.removeSchedule(schedule_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.study_id}번 스터디 ${req.params.schedule_id}스케줄 삭제가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

module.exports = {
    addNewSchedule : addNewSchedule,
    getScheduleInfo : getScheduleInfo,
    getScheduleInfoList : getScheduleInfoList,
    changeScheduleInfo : changeScheduleInfo,
    removeSchedule : removeSchedule
}