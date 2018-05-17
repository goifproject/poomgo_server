let dao = require('../../model/studyModel/memberModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// add
// candidate 상태가 변하면서 상태 변화값이 
function addMemberToStudy(study_id, member_id, callback) {
    logger.debug('[2]controller-addMemberToStudy');
    dao.create(study_id, member_id, callback);
}

// router.get('/:study_id/members', member.select);
function getMemberList(req, res) {
    logger.debug('[2]controller-getMemberList');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 멤버 조회가 완료되었습니다`, data, res);
    });
}

// router.delete('/:study_id/members/:member_id', member.delete);
function removeMemberFromStudy(req, res) {
    logger.debug('[2]controller-removeMemberFromStudy');
    let study_id = req.params.study_id;
    let member_id = req.params.member_id;
    dao.delete(member_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${member_id} 멤버 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    getMemberList : getMemberList,
    removeMemberFromStudy : removeMemberFromStudy
}
