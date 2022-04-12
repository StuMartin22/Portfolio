var phone = $('.phoneBtn');
var email = $('.emailBtn');
var emailTest = $('#emailButtonId');
var emailAddress = "stucodes22@gmail.com";
var phoneNumber = "19188086027";
var dropdownBtn = $('#emailDropdown');
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
    copyPhone;
    copied.show();
});

function copyEmail () {
    navigator.clipboard.writeText(emailAddress);
};

function copyPhone () {
    navigator.clipboard.writeText(phoneNumber);
};

