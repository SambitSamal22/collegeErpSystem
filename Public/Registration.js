function getData(){
    var fname=document.getElementById("username").value;
    var name_reg=/^[A-Za-z]+$/;


    if (fname=='')
    {
        document.getElementById("faname").innerHTML="Required*"
        
        return false;
    }
    if(!name_reg.test(fname))
    {
    // alert("input alphabets only");
        document.getElementById("faname").innerHTML="input Alphabets only";
    return false;
    }
    else {
        document.getElementById("faname").innerHTML="";
    }
    //EMAIL_VALIDATION
    var inputEmail = document.getElementById("email").value;
    var email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//REGULAR EXPRESSION
    if (inputEmail=== '')
    {
        //alert("Cannot Be Blank");
        document.getElementById("mail").innerHTML="Required*"
    }
    else if(!email_reg.test(inputEmail))
        {
            //alert("input alphabets only");
            document.getElementById("mail").innerHTML="input valid Email";
        }
    else {
        document.getElementById("mail").innerHTML="";
        let x = document.getElementById("email").value;
        var atPosition=x.indexOf("@");
        var dotPosition=x.lastIndexOf(".");
        if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=x.length){
        //alert("Please enter a valid e-mail address \n atPostion:"+atPosition+"\n dotPosition:"+dotPosition);
        document.getElementById("mail").innerHTML="input valid Email";
        return false;
        }
  }
//PH_NUMBER VALIDATION
 var inputNumber = document.getElementById("mobile").value;
 var phone_reg= /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (inputNumber === '')
    {
        //alert("Cannot Be Blank");
        document.getElementById("alert_phone").innerHTML="Required*"
    }
        else if(!phone_reg.test(inputNumber))
        {
            document.getElementById("alert_phone").innerHTML="input a valid Numbers";
        }
    else {
        document.getElementById("alert_phone").innerHTML="";
    }

//PASSWORD VALIDATION
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }
     
   //minimum password length validation  
    if(pw.length < 6) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
        document.getElementById("message").innerHTML = "";
    }
//CONFORM PASSWORD VALIDATION
    var cpw = document.getElementById("samepass").value;  
    //check empty password field  
    if(cpw == "") {  
        document.getElementById("alert_message").innerHTML = "**Fill the password please!";  
        return false;  
     }
     if(cpw !==pw){
        document.getElementById("alert_message").innerHTML = "**Password Mismatch";  
        return false;  
     }
     if(cpw !==pw){
        document.getElementById("alert_message").innerHTML = "";  
       
     }
//ADDRESS VALIDATION--
     var address=document.getElementById("add").value;
     if(address == "") {  
        document.getElementById("alert_add").innerHTML = "**Fill the address please!";  
        return false;  
     }else{
        document.getElementById("alert_add").innerHTML = "";
     }


     
}
