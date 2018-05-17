let dao = require('../../model/studyModel/candidateModel');
let memberDao = require('../../model/studyModel/memberModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');


// router.post('/:study_id/candidate', candidate.add);
function addCandidate(req, res) {
    logger.debug('[2]controller-addCandidate');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    dao.create(study_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디에 후보 생성이 완료되었습니다`, {}, res);
    });
}

// router.get('/:study_id/candidate', candidate.selectAll);
function selectAllCandidates(req, res) {
    logger.debug('[2]controller-selectAllCandidates');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 후보 전체 조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:study_id/candidate/:candidate_id', candidate.update);
function updateCandidateStatus(req, res) {
    logger.debug('[2]controller-updateCandidateStatus');
    let study_id = req.params.study_id;
    let candidate_id = req.params.candidate_id;
    var dataObj = req.body;
    dataObj.update_date = new Date();
    dao.update(candidate_id, dataObj, (err, data)=>{
        // 후보 상태가 수락 바뀔 경우 memeber 생성
        if(dataObj.status == 2) {
            memberDao.create(candidate_id, study_id, (err, data)=>{
                if(err) return error.send(500, err, res);
                return result.send(200, `${study_id}번 스터디 ${candidate_id} 후보 상태 업데이트가 완료되었습니다 | ${candidate_id} 멤버가 생성되었습니다`, {}, res);
            });
        } else {
            if(err) return error.send(500, err, res);
            return result.send(200, `${study_id}번 스터디 ${candidate_id} 후보 상태 업데이트가 완료되었습니다`, {}, res);
        }
        
    });
}

// router.delete('/:study_id/candidate/:candidate_id', candidate.delete);
function deleteCandidate(req, res) {
    logger.debug('[2]controller-deleteCandidate');
    let study_id = req.params.study_id;
    let candidate_id = req.params.candidate_id;
    dao.deleteCandidate(candidate_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${candidate_id}후보 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    add : addCandidate,
    selectAll : selectAllCandidates,
    update : updateCandidateStatus,
    delete : deleteCandidate
}
