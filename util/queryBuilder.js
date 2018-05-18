exports.build = function(data, columnId) {
    var queryString;
    for(var i=0; i<blacklist.length; i++){
        quertString += blacklist[i].black_id;
        if(i != blacklist.length-1) {
            quertString += ` or ${columnId}=`
        }
    }
    return queryString;
}