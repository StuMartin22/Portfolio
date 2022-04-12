var phone = $('.phoneBtn')
var email = $('.emailBtn')
var emailTest = $('#emailButtonId')
var emailAddress = "stucodes22@gmail.com"
var phoneNumber = "19188086027"
var dropdownBtn = $('#emailDropdown')
var popup = $('.popup')

email.on('click', copyEmail)

function loggers () {
    console.log('clickityClackity')
}
function copyEmail () {
    navigator.clipboard.writeText(emailAddress);
}

// function popupEmail() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }

