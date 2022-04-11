var phone = $('.phoneBtn')
var email = $('.emailBtn')
var emailTest = $('#emailButtonId')
var emailAddress = "stucodes22@gmail.com"
var phoneNumber = "19188086027"
var emailModal = $('#email')
var titleLine = $('#emailModalLabel')
var dropdownBtn = $('#emailDropdown')

// email.click(testeroonie());
// console.log(emailTest);
// console.log(copyTest());
// console.log(emailAddress);

// emailTest.click(testeroonie());

dropdownBtn.on("click", function (runTest) {
    runTest();
});


function runTest () {
    emailTest.click();
console.log('emailbuttonID');

email.click();
console.log('email button class')

emailModal.click();
console.log('email Modal ID')

titleLine.click();
console.log('email title line');
};
// console.log(emailTest);
// console.log(copyTest());
// console.log(emailAddress);

// phone.click(function(phoneCopy));

// function copyTest(){
//     navigator.clipboard.writeText('testing').then(function () {
//         alert('It worked! Do a CTRL - V to paste')
//     }, function () {
//         alert('Failure to copy. Check permissions for clipboard')
//     })
// };
// function testeroonie(){
// navigator.clipboard.writeText(emailAddress)
//         .then(() => {
//         console.log("Text copied to clipboard...")
//     })
// };

// email.click(testeroonie());
// console.log(testeroonie());
// console.log(email);