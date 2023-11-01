var userAgent = window.navigator.userAgent;
if (userAgent.indexOf("Chrome") > -1) {
    alert("Chrome");
} else if ("Firefox") {
    alert("Firefox");
}
function ValidateEmail(inputText , inputText2)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.text1.focus();
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        event.preventDefault();
    }
}