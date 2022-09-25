// var moment = require('moment');


exports.responseError = (message, result) => {
        //RESPONSE DATA
        let response = {
            error: true,
            message: message,
            result: []
        }
        console.log(response.message);
        return response
}

exports.responseSuccess = (message, result) => {
    //RESPONSE DATA
    let response = {
        error: false,
        message: message,
        result: result
    }
    console.log(result);
    return response
}

// exports.UTCtolocal = (datetime) => {
    
//     //Convert UTC fotmat to local time format
//     var local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
//     return local
// }