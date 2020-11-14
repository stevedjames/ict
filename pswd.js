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
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
   
    // Update the password strength meter
    if(strongRegex.test(password.value)){
      text.innerHTML="Strong";
      
      meter.value=4;
      
  }else if(password.value.length<=5){
      text.innerHTML="Weak!!!";
      
      meter.value=1;
      
  }else if(password.value.length==0){
    meter.value=0;
  }
  else if(mediumRegex.test(password.value)){
      text.innerHTML="Medium";
     
      meter.value=2;
     
  }else{
     
    
      meter.value=0;
      
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