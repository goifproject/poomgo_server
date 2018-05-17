let model = require('../../model/studyModel/studyModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// 스터디 생성
// router.post('/:study_id', study.create);
function openNewStudy(req, res) {
    logger.debug('[2]controller-openStudy');
    var dataObj = req.body;
    dataObj.reg_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    dataObj.start_date = new Date();
    model.create(dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "스터디 생성이 완료되었습니다", {}, res);
    });
}

// 스터디 1개 조회
// router.get('/:study_id', study.selectSingle);
function getStudyInfo(req, res) {
    logger.debug('[2]controller-getStudyInfo');
    let study_id = req.params.study_id;
    model.select(study_id, (err, data)=>{
        // TODO study_time 추가해줘야 함
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 조회가 완료되었습니다`, data, res);
    });
}

// 스터디 전체 조회
// router.get('/', study.selectAll);
function getStudyInfos(req, res) {
    logger.debug('[2]controller-geStudyInfos');
    model.selectAll((err, data)=>{
        // TODO study_time 추가해줘야 함
        if(err) return error.send(500, err, res);
        result.send(200, "스터디 전체 조회가 완료되었습니다", data, res);
    });
}

// 스터디 업데이트
// router.put('/:study_id', study.update);
function changeStudyInfo(req, res) {
    logger.debug('[2]controller-changeStudyInfo');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    dataObj.update_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    model.update(study_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 업데이트가 완료되었습니다`, {}, res);
    });
}

// 스터디 삭제
// router.delete('/:study_id', study.delete);
function closeStudy(req, res) {
    logger.debug('[2]controller-closeStudy');
    let study_id = req.params.study_id;
    model.deleteStudy(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 삭제가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    openNewStudy : openNewStudy,
    getStudyInfo : getStudyInfo,
    getStudyInfos : getStudyInfos,
    changeStudyInfo : changeStudyInfo,
    closeStudy : closeStudy
}