let dao = require('../../dao/studyDao/studyDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// 스터디 생성
// router.post('/:study_id', study.create);
function createStudy(req, res) {
    var postData = '';
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // reg_date 설정해 줘야 함
        dao.create(postData, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, "스터디 생성이 완료되었습니다", data, res);
        });
    });
}

// 스터디 전체 조회
// router.get('/', study.selectAll);
function selectAllStudies(req, res) {
    logger.info('[2]controller-study')
    dao.selectAll((err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "스터디 전체 조회가 완료되었습니다", data, res);
    });
}

// 스터디 1개 조회
// router.get('/:study_id', study.selectSingle);
function selectSingleStudy(req, res) {
    let study_id = req.params.study_id;
    dao.select(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 조회가 완료되었습니다`, data, res);
    });
}

// 스터디 업데이트
// router.put('/:study_id', study.update);
function updateStudy(req, res) {
    let study_id = req.params.study_id;
    var postData = '';
    req.on('data', (data)=>{
        postData += data;
    });
    req.on('end', ()=>{
        // update_date 설정해 줘야 함
        dao.update(study_id, (err, data)=>{
            if(err) return error.send(500, err, res);
            result.send(200, `${study_id}번 스터디 업데이트가 완료되었습니다`, data, res);
        });
    });
}

// 스터디 삭제
// router.delete('/:study_id', study.delete);
function deleteStudy(req, res) {
    let study_id = req.params.study_id;
    dao.deleteStudy(study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${study_id}번 스터디 삭제가 완료되었습니다`, data, res);
    });
}

module.exports = {
    create : createStudy,
    selectAll : selectAllStudies,
    selectSingle : selectSingleStudy,
    update : updateStudy,
    delete : deleteStudy
}