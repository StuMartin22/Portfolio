var phone = $('.phoneBtn');
var email = $('.emailBtn');
var emailAddress = "stucodes22@gmail.com";
var phoneNumber = "19188086027";
var copied = $('#copied');


copied.hide();

email.on('click', function(){
    // loggers;
    copyEmail();
    // console.log(copyEmail)
    copied.show();
    setTimeout(() => {
        copied.hide();
    },1000);
});

phone.on('click', function(){
    //loggers;
    copyPhone();
    // console.log(copyPhone)
    copied.show();
    setTimeout(() => {
        copied.hide();
    },1000);
});

function copyEmail () {
    navigator.clipboard.writeText(emailAddress);
};

function copyPhone () {
    navigator.clipboard.writeText(phoneNumber);
};
