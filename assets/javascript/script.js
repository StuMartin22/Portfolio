var phone = $('.phoneBtn');
var email = $('.emailBtn');
var emailAddress = "stucodes22@gmail.com";
var phoneNumber = "19188086027";
var copied = $('#copied');
var copiedPhone =$('#copiedPhone')


copied.hide();

email.on('click', function(){
    console.log(copyEmail);
    copyEmail();
    console.log(copyEmail);
    copied.show();
    setTimeout(() => {
        copied.hide();
    },1000);
});

copiedPhone.hide()

phone.on('click', function(){
    console.log(copyPhone);
    copyPhone();
    console.log(copyPhone);
    copiedPhone.show();
    setTimeout(() => {
        copiedPhone.hide();
    },1000);
});

function copyEmail () {
    navigator.clipboard.writeText(emailAddress);
};

function copyPhone () {
    navigator.clipboard.writeText(phoneNumber);
};
