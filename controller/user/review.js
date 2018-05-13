let dao = require('../../dao/userDao/reviewDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/review', review.create);
function createReview(req, res) {
    logger.debug('[2]controller-createReview');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    dao.create(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    });
}

// user_id에 관한 모든 리뷰가 리턴된다. 여기에 writer_id가 같으면 클라이언트에서 수정 가능하도록 하는 것
// router.get('/:user_id/review', review.read);
function readReview(req, res) {
    logger.debug('[2]controller-readAllReview');
    let user_id = req.params.user_id;
    dao.select(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id}회원의 전체 리뷰 조회가 완료되었습니다`, data, res);
    });
}

// // router.get('/:user_id/review', review.read);
// function readReview(req, res) {
//     logger.debug('[2]controller-readReview');
//     let writer_id = req.params.user_id;
//     let review_id = req.params.review_id;
//     dao.select(user_id, review_id, (err, data)=>{
//         if(err) return error.send(500, err, res);
//         result.send(200, `${user_id}회원 리뷰 조회가 완료되었습니다`, data, res);
//     });
// }

// user_id와 writer_id를 전달받아 해당 리뷰를 수정한다
// router.put('/:user_id/review/:writer_id', review.update);
function updateReview(req, res) {
    logger.debug('[2]controller-updateReview');
    let user_id = req.params.user_id;
    let writer_id = req.params.writer_id;
    var dataObj = req.body;
    dao.update(user_id, writer_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${writer_id}회원이 작성한 ${user_id}의 리뷰 업데이트가 완료되었습니다`, {}, res);
    });
}

// router.delete('/:user_id/review/:writer_id', review.delete);
function deleteReview(req, res) {
    logger.debug('[2]controller-deleteReview');
    let user_id = req.params.user_id;
    let writer_id = req.params.writer_id;
    dao.delete(user_id, writer_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${writer_id}회원이 작성한 ${user_id}의 리뷰 삭제가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    create : createReview,
    read : readReview,
    update : updateReview,
    delete : deleteReview
}
