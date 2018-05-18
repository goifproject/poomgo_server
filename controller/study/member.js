let model = require('../../model/study/memberModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// add
// candidate 상태가 변하면서 상태 변화값이 
function addMemberToStudy(study_id, member_id, callback) {
    logger.debug('[2]controller-addMemberToStudy');
    model.addMemberToStudy(study_id, member_id, callback);
}

// router.get('/:study_id/members', member.select);
function getMemberList(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-getMemberList');
    let study_id = req.params.study_id;
    model.getMemberList(study_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 멤버 조회가 완료되었습니다`, data, res);
    });
}

// router.delete('/:study_id/members/:member_id', member.delete);
function removeMemberFromStudy(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-removeMemberFromStudy');
    let study_id = req.params.study_id;
    let member_id = req.params.member_id;
    model.removeMemberFromStudy(member_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 ${member_id} 멤버 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    getMemberList : getMemberList,
    removeMemberFromStudy : removeMemberFromStudy
}
