let model = require('../../model/studyModel/candidateModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');


// router.post('/:study_id/candidate', candidate.add);
function addCandidateToStudy(req, res, next) {
    logger.debug('[2]controller-addCandidateToStudy');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    model.addCandidateToStudy(study_id, dataObj, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디에 후보 생성이 완료되었습니다`, {}, res);
    });
}

// router.get('/:study_id/candidate', candidate.selectAll);
function getCandidateList(req, res, next) {
    logger.debug('[2]controller-getCandidateList');
    let study_id = req.params.study_id;
    model.getCandidateList(study_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 후보 전체 조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:study_id/candidate/:candidate_id', candidate.update);
function changeCandidateStatus(req, res, next) {
    logger.debug('[2]controller-changeCandidateStatus');
    let study_id = req.params.study_id;
    let candidate_id = req.params.candidate_id;
    var dataObj = req.body;
    dataObj.update_date = new Date();
    model.changeCandidateStatus(candidate_id, study_id, dataObj, (err, data)=>{
        // 후보 상태가 수락 바뀔 경우 memeber 생성
        if(dataObj.status == 2) {
            if(err) return next(err);
            return result.send(200, `${study_id}번 스터디 ${candidate_id} 후보 상태 업데이트가 완료되었습니다 | ${candidate_id} 멤버가 생성되었습니다`, {}, res);
        } else {
            if(err) return next(err);
            return result.send(200, `${study_id}번 스터디 ${candidate_id} 후보 상태 업데이트가 완료되었습니다`, {}, res);
        }
        
    });
}

// router.delete('/:study_id/candidate/:candidate_id', candidate.delete);
function removeCandidateFromStudy(req, res, next) {
    logger.debug('[2]controller-removeCandidateFromStudy');
    let study_id = req.params.study_id;
    let candidate_id = req.params.candidate_id;
    model.removeCandidateFromStudy(candidate_id, study_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 ${candidate_id}후보 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    addCandidateToStudy : addCandidateToStudy,
    getCandidateList : getCandidateList,
    changeCandidateStatus : changeCandidateStatus,
    removeCandidateFromStudy : removeCandidateFromStudy
}
