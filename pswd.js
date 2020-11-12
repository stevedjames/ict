var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }
var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');
var tex = document.getElementById('text');
password.addEventListener('input', function() {
    var val = password.value;
    var result = zxcvbn(val);
  
    // Update the password strength meter
    meter.value = result.score;
  
    // Update the text indicator
    if (val !== "") {
      text.innerHTML = "Strength: " + strength[result.score]; 
    } else {
      text.innerHTML = "";
    }
  });
function pswd(){
   
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    // var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if(strongRegex.test(password.value)){
        tex.innerHTML=""
        // text.innerHTML = "Strength: " + strength[3]; 
        // text.style.color="green";
        // meter.value=3;
        return true;
    }else if(password.value==""){
        tex.innerHTML="";
        return false;
    }
    // else if((password.value.length<=5)&&(password.value.length>0)){
    //     text.innerHTML = "Strength: " + strength[1]; 
    //     text.style.color="Red";
    //     meter.value=1;
    //     return false;
    // }else if(mediumRegex.test(password.value)){
    //     ttext.innerHTML = "Strength: " + strength[2]; 
    //     text.style.color="orange";
    //     meter.value=2;
    //     return false;
    // }else if(password.value==""){
    //     text.innerHTML="Empty";
    //     text.style.color="Red";
    //     meter.value=0;
    //     return false;
    // }
    else{
        tex.innerHTML="Password should meet requirements"
        return false;
    }
}
