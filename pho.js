let phone = document.getElementById("phno");
let ph = document.getElementById("ph");

function pho() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneno.test(phone.value)) {
        ph.innerHTML = "Valid";
        ph.style.color = "green";
        return true;
    }
    else {
        ph.innerHTML = "Accept only'XXXXXXXXXX, XXX-XXX-XXXX, XXX XXX XXXX'";
        ph.style.color = "red";
        return false;
    }
}
