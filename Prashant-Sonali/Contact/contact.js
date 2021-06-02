function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();


    var name = document.forms['myForm']["name"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if (email.length > 35) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["phone"].value;
    if (phone.length !== 10) {


        seterror("phone", "*phone number should be of 10 digits!");
        returnval = false;
    }

    var message = document.forms['myForm']["text"].value;
    if (message.length < 20) {
        seterror("mess", "*message is too short!");
        returnval = false;
    }

    return returnval;
}
