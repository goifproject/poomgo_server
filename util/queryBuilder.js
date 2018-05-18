exports.build = function(data, key, columnId) {
    var queryString;
    for(var i=0; i<data.length; i++){
        queryString += data[i].key;
        if(i != data.length-1) {
            queryString += ` or ${columnId}=`
        }
    }
    return queryString;
}