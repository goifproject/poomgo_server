let dao = require('../../dao/studyDao/noticeDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 공지 생성
// router.post('/:study_id/notice', notice.create);
function createNotice(req, res) {
    logger.debug('[2]controller-createNotice');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    dataObj.reg_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    dataObj.start_date = new Date();
    dao.create(study_id, req.body, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디에 공지 생성이 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 공지 전체 조회
// router.get('/:study_id/notice', notice.selectAll);
function selectAllNotices(req, res) {
    logger.debug('[2]controller-selectAllNotices');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 공지 전체 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 notice_id 공지 조회
// router.get('/:study_id/notice/:notice_id', notice.selectSingle);
function selectSingleNotice(req, res) {
    logger.debug('[2]controller-selectSingleNotice');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    dao.select(notice_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 notice_id 공지 업데이트
// router.put('/:study_id/notice/:notice_id', notice.update);
function updateNotice(req, res) {
    logger.debug('[2]controller-updateNotice');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    var dataObj = req.body;
    dataObj.update_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    dao.update(notice_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${notice_id} 공지 업데이트가 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 notice_id 공지 삭제
// router.delete('/:study_id/:notice/:notice_id', notice.delete);
function deleteNotice(req, res) {
    logger.debug('[2]controller-deleteNotice');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    dao.deleteNotice(notice_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 삭제가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    create : createNotice,
    selectAll : selectAllNotices,
    selectSingle : selectSingleNotice,
    update : updateNotice,
    delete : deleteNotice
}
