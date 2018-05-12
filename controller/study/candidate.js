let dao = require('../../dao/studyDao/candidateDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');


// router.post('/:study_id/candidate', candidate.add);
function addCandidate(req, res) {
    logger.debug('[2]controller-addCandidate');
    let study_id = req.params.study_id;
    var postData;
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // reg_date 설정해 줘야 함
        dao.create(study_id, postData, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디에 후보 생성이 완료되었습니다`, data, res);
        });
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
    var postData = '';
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // update_date 설정해 줘야 함
        dao.update(candidate_id, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디 ${candidate_id} 상태 업데이트가 완료되었습니다`, data, res);
        });
    });
}

// router.delete('/:study_id/candidate/:candidate_id', candidate.delete);
function deleteCandidate(req, res) {
    logger.debug('[2]controller-deleteCandidate');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    dao.deleteNotice(notice_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    add : addCandidate,
    selectAll : selectAllCandidates,
    update : updateCandidateStatus,
    delete : deleteCandidate
}
