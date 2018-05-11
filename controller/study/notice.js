let dao = require('../../dao/studyDao/noticeDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 공지 생성
// router.post('/:study_id/notice', notice.create);
function createNotice(req, res) {
    logger.info('[2]controller-createNotice');
    let study_id = req.params.study_id;
    var postData;
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // reg_date 설정해 줘야 함
        dao.create(study_id, postData, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, "공지 생성이 완료되었습니다", data, res);
        });
    });
}

// study_id번 스터디 공지 전체 조회
// router.get('/:study_id/notice', notice.selectAll);
function selectAllNotices(req, res) {
    logger.info('[2]controller-selectAllNotices');
    let study_id = req.params.study_id;
    dao.selectAll(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "공지 전체 조회가 완료되었습니다", data, res);
    });
}

// study_id번 스터디 notice_id 공지 조회
// router.get('/:study_id/notice/:notice_id', notice.selectSingle);
function selectSingleNotice(req, res) {
    logger.info('[2]controller-selectSingleNotice');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    dao.select(study_id, notice_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 notice_id 공지 업데이트
// router.put('/:study_id/notice/:notice_id', notice.update);
function updateNotice(req, res) {
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    var postData = '';
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // update_date 설정해 줘야 함
        dao.update(study_id, notice_id, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디 ${notice_id}공지 업데이트가 완료되었습니다`, data, res);
        });
    });
}

// study_id번 스터디 notice_id 공지 삭제
// router.delete('/:study_id/:notice/:notice_id', notice.delete);
function deleteNotice(req, res) {
    let study_id = req.params.study_id;
    dao.deleteNotice(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    create : createNotice,
    selectAll : selectAllNotices,
    selectSingle : selectSingleNotice,
    update : updateNotice,
    delete : deleteNotice
}
