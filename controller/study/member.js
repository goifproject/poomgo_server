let dao = require('../../model/studyModel/memberModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// add
// candidate 상태가 변하면서 상태 변화값이 
function addMember(study_id, member_id, callback) {
    logger.debug('[2]controller-addMember');
    dao.create(study_id, member_id, callback);
}

// router.get('/:study_id/members', member.select);
function selectMembers(req, res) {
    logger.debug('[2]controller-selectMembers');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 멤버 조회가 완료되었습니다`, data, res);
    });
}

// router.delete('/:study_id/members/:member_id', member.delete);
function deleteMember(req, res) {
    logger.debug('[2]controller-deleteMember');
    let study_id = req.params.study_id;
    let member_id = req.params.member_id;
    dao.delete(member_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${member_id} 멤버 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    select : selectMembers,
    delete : deleteMember
}
