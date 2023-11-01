
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Dirección de correo electrónico válida!");
        inputText.focus();
    } else {
        alert("Has ingresado una dirección de correo electrónico no válida.");
        inputText.focus();
    }
}