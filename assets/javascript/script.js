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
    copyEmail;
    copied.show();
});

phone.on('click', function(){
    copyPhone;
    copied.show();
});

function copyEmail () {
    navigator.clipboard.writeText(emailAddress);
};

function copyPhone () {
    navigator.clipboard.writeText(phoneNumber);
};


// function loggers () {
//     console.log('clickityClackity')
// }