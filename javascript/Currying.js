function mailSender(to){
    return function (sub){
        return function(body){
            console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
        };
    };
}
mailSender()