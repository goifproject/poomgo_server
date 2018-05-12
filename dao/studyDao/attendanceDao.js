let database = require('../../database/database');
let tablename = 'schedule'
let logger = require('../../util/logger');

const id = "id", 
      schedule_id = "schedule_id",
      member_id = "member_id",
      attendance_type = "attendance_type";

// 원래는 스케줄에 담아서 보내주려고 했으나 일단은 분리해서 요청할 수 있도록 한다.
// 클라이언트에서 편하게 하려면 담아서 보내주는 게 편하고, 리소스 중심으로 가면 리소스별로 API를 나눠서 요청하게 한다.
    
// 상세 스터디 요청을 할 때 서버에서 시간을 체크해서 해당 스터디 시간이면 출석목록을 만들고, 출석체크 시간임을 알려줘야 한다.
// 자동으로 해준다기 보다 해당 시간에 서버로 요청을 하면 출섹체크를 한 것이고, db에 '추가' 해 주는 형식으로 가자려고 할 려고 했으나
// 가만히 생각해보니 아무것도 안 한 사람은 출석 데이터가 없다. 그들은 '결석' 이어야 하기 때문에 역시 서버에서 시간이 되면 자동으로 만들어주거나
// 스터디를 만들 때 미리 모든 스케줄에 대해 각 회원별 출석 여부 데이터를 넣어둔다.
function create(param_study_id, dataObj, callback) {
    logger.debug('[3]attendanceDao-create');
}

function select(param_schedule_id, callback) {
    logger.debug('[3]attendanceDao-select');
    // TODO 권한에 따라 쿼리하는 내용이 달라짐
    let query = `SELECt * FROM ${tablename} WHERE ${schedule_id}=${param_schedule_id}`;
    // 토큰을 통해 사용자 구분값인 아이디를 받아와야 함

    // 내거만 보내주는 경우

    // 전체 보내주는 경우

    database.executeByRaw(query, callback);
}

// 명시적으로 '출석체크'를 누를 경우
function update(param_attendance_id, callback) {
    logger.debug('[3]attendanceDao-update');
    // TODO 원래는 토큰을 통해서 아이디를 받아와야 함
    let values = [dataObj.attendance_type]; 
    let query = `UPDATE ${tablename} SET
                        ${attendance_type} = ? 
                WHERE ${id}=${param_attendance_id}`;
    database.executeByValues(query, callback);
}


module.exports = {
    create : create,
    select : select,
    update : update,
}