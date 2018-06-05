// const jwt = require('jsonwebtoken')
// const crypto = require('crypto');
// const request = require('request');

/**
 * 소셜가입
 * 1. social auth
 * 2. signup
 * 3. generate token
 */

 /**
  * 일반가입
  * 1. signup
  * 2. generate token
  */

 /**
  * 로그인
  * 1. signin
  * 2. auth
  * 3. generate token
  */

  /**
   * API 요청
   * 1. verify token
   */

function authSocial(token, socialType, resolve, reject) {
    if(socialType == 'facebook') {
        authFacebook(token, resolve, reject);
    } else if(socialType == 'kakao') {
        authKakao(token, resolve, reject);
    }
}

// authenticate user by facebook OAuth2
function authFacebook(token, resolve, reject) {
    request(`https://graph.facebook.com/me?access_token=${token}`, (err, res, body)=>{
        // 인증 성공 - generate token

        // 인증 실패 - reject
    }); 
}

// authenticate user by kakao OAuth2
function authKakao(token, resolve, reject) {
    request(`https://graph.facebook.com/me?access_token=${token}`, (err, res, body)=>{
        // 인증 성공 - generate token

        // 인증 실패 - reject
    }); 
}

// authenticate user by password
function authPassword(password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64')
    console.log(this.password === encrypted)
    return this.password === encrypted
}



// generate jsonwebtoken
function generateToken(res, pwd, rows) {
    var user = rows[0];
    var payload = {
        id:user.member,
        password:user.password
    }
    var secret = config.secret;
    var token = jwt.sign(
        payload, 
        secret, 
        { 
            algorithm: 'HS256',
            expiresIn: '30 days',
            issuer: '',
            subject: ''
        }
    );
    return token;
}

function verifyPassword(password) {

    return true;
}

// verify jsonwebtoken
function verifyToken(request, resolveC, rejectC, next){
    // read the token from header or url 
    const token = request.headers['x-access-token'] || request.query.token;

    // token does not exist
    if(!token) {
        // client redirect to login
        return error.send(response, 404, new Error("no token"));
    }
 
    // create a promise that decodes the token
    const verifyP = new Promise(
        (resolve, reject) => {
            jwt.verify(token, config.secret, (err, decoded) => {
                if(err) reject(err);
                resolve(decoded);
            });
        }
    )

    verifyP.then((decoded)=>{
        req.decoded = decoded;
        next();
    }).catch(rejectC);
}

module.exports = {
    authSocial : authSocial,
    generateToken : generateToken,
    verifyPassword : verifyPassword,
    verifyToken : verifyToken
}