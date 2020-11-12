let email = document.getElementById("inputEmail4");
let error = document.getElementById("error");


function validate(){
    // let regval=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z0-9]{2,3})(.[a-z]{2,3})?$/;
    let regval=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(regval.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }else if(email.value==""){
        error.innerHTML="Cannot be empty!!!";
        error.style.color="red";
        return false;
    }
    else{
        error.innerHTML="Email format should be 'abc@gmail.com'";
        error.style.color="red";
        return false;
    }
}
function func()
{
   
}

