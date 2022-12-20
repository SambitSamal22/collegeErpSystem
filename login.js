
function signup(e){
    event.preventDefault();


    var email=document.getElementById('email').value;
    var name=document.getElementById('username').value;
    var pass=document.getElementById('password').value;


    var user={
        email:email,
        username:name,
        password:pass,
    };

    var json=JSON.stringify(user);
    localStorage.setItem(email,json);
    console.log(user);
}

function loginFunc(e){
    event.preventDefault();
  
   var email =document.getElementById('email').value;
   var pass =document.getElementById('password').value;
   var result =document.getElementById('result');


   var user=localStorage.getItem(email);
   var data= JSON.parse(user);
   console.log(data);

   if (user==null){
       result.innerHTML='Wrong user';
   }else if(email==data.email && pass==data.password){
       result.innerHTML='loggin';
       window.location.href = "http://www.w3schools.com";

   }else{
       result.innerHTML='Wrong password'

   }

}
 

