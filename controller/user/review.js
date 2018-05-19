let model = require('../../model/user/reviewModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/review', review.create);
function writeReview(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-writeReview');
        let user_id = req.params.user_id;
        var dataObj = req.body;
        model.writeReview(user_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, "리뷰 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// user_id에 관한 모든 리뷰가 리턴된다. 여기에 writer_id가 같으면 클라이언트에서 수정 가능하도록 하는 것
// router.get('/:user_id/review', review.read);
function readReview(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-readReview');
        let user_id = req.params.user_id;
        model.readReview(user_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id}회원의 전체 리뷰 조회가 완료되었습니다`, data, res);
        // result.send(200, `회원의 전체 리뷰 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// // router.get('/:user_id/review', review.read);
// function readReview(req, res) {
//     logger.debug('[2]controller-readReview');
//     let writer_id = req.params.user_id;
//     let review_id = req.params.review_id;
//     model.select(user_id, review_id, (err, data)=>{
//         if(err) return error.send(500, err, res);
//         result.send(200, `${user_id}회원 리뷰 조회가 완료되었습니다`, data, res);
//     });
// }

// user_id와 writer_id를 전달받아 해당 리뷰를 수정한다
// router.put('/:user_id/review/:writer_id', review.update);
function updateReview(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-updateReview');
        let user_id = req.params.user_id;
        let writer_id = req.params.writer_id;
        var dataObj = req.body;
        model.updateReview(user_id, writer_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.writer_id}회원이 작성한 ${req.params.user_id}의 리뷰 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// router.delete('/:user_id/review/:writer_id', review.delete);
function removeReview(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-removeReview');
        let user_id = req.params.user_id;
        let writer_id = req.params.writer_id;
        model.removeReview(user_id, writer_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.writer_id}회원이 작성한 ${req.params.user_id}의 리뷰 삭제가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

module.exports = {
    writeReview : writeReview,
    readReview : readReview,
    updateReview : updateReview,
    removeReview : removeReview
}
