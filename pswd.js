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
tex.innerHTML="";
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
    if(strongRegex.test(password.value)){
        tex.innerHTML="";
        
        return true;
    }else if(password.value==""){
        tex.innerHTML="";
        return false;
    }
    else{
        tex.innerHTML="Password should meet requirements";
        return false;
    }
}