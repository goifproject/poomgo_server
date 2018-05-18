let model = require('../../model/study/noticeModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// study_id번 스터디에 공지 생성
// router.post('/:study_id/notice', notice.create);
function makeNewNotice(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-makeNewNotice');
    let study_id = req.params.study_id;
    var dataObj = req.body;
    dataObj.reg_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    dataObj.start_date = new Date();
    model.makeNewNotice(study_id, dataObj, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디에 공지 생성이 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 notice_id 공지 조회
// router.get('/:study_id/notice/:notice_id', notice.selectSingle);
function getNoticeInfo(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-getNoticeInfo');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    model.getNoticeInfo(notice_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 공지 전체 조회
// router.get('/:study_id/notice', notice.selectAll);
function getNoticeInfoList(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-getNoticeInfoList');
    let study_id = req.params.study_id;
    model.getNoticeInfoList(study_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 공지 전체 조회가 완료되었습니다`, data, res);
    });
}

// study_id번 스터디 notice_id 공지 업데이트
// router.put('/:study_id/notice/:notice_id', notice.update);
function changeNoticeInfo(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-changeNoticeInfo');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    var dataObj = req.body;
    dataObj.update_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    model.changeNoticeInfo(notice_id, dataObj, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 ${notice_id} 공지 업데이트가 완료되었습니다`, {}, res);
    });
}

// study_id번 스터디 notice_id 공지 삭제
// router.delete('/:study_id/:notice/:notice_id', notice.delete);
function removeNotice(req, res, next) {
    new Promise((resolve, reject)=>{
    
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });

    logger.debug('[2]controller-removeNotice');
    let study_id = req.params.study_id;
    let notice_id = req.params.notice_id;
    model.removeNotice(notice_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${study_id}번 스터디 ${notice_id}공지 삭제가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    makeNewNotice : makeNewNotice,
    getNoticeInfo : getNoticeInfo,
    getNoticeInfoList : getNoticeInfoList,
    changeNoticeInfo : changeNoticeInfo,
    removeNotice : removeNotice
}
