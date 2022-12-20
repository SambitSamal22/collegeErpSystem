
 
 function getData(){
    var fname=document.getElementById("name").value;
    var dob=document.getElementById("date1").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("mobile").value;
    var password=document.getElementById("psw").value;
    var address=document.getElementById("add").value;
    var country=document.getElementById("country_select").value;
    console.log(fname);
    console.log(dob);
    console.log(email);
    console.log(phone);
    console.log(password);
 

    let record=new Array();
    record = JSON.parse(localStorage.getItem("admin")) ? JSON.parse(localStorage.getItem("admin")) : []
   
        record.push({
            "name": fname,
            "date1": dob,
            "email": email,
            "mobile": phone,
            "psw": password,
            "add":address,
            "country_select":country

        })
        localStorage.setItem("admin", JSON.stringify(record));
    }

    function Display(){
        let record=new Array();
        record = JSON.parse(localStorage.getItem("admin")) ? JSON.parse(localStorage.getItem("admin")) : []
        for(i=0;i<record.length;i++){
            document.getElementById("x1").innerHTML = record[i].name
            document.getElementById("x2").innerHTML = record[i].date1
            document.getElementById("x3").innerHTML = record[i].email
            document.getElementById("x4").innerHTML = record[i].mobile
            document.getElementById("x5").innerHTML = record[i].psw
            document.getElementById("x6").innerHTML = record[i].add
            document.getElementById("x7").innerHTML = record[i].country_select

        }
    }
    //console.log(fname);
    //console.log(dob);
    //console.log(email);
    //console.log(phone);
    //console.log(password);
    //console.log(ConformPass);

   /* function showData(){
        var fname=document.getElementById("name").value;
        localStorage.setItem("textValue",fname);
        return false;
      
    }
    function showData1(){
        var date=document.getElementById("date1").value;
        localStorage.setItem("textValue1",date);
        return false;
    }
    function showData2(){
        var email=document.getElementById("mail").value;
        localStorage.setItem("textValue2",email);
        return false;
    }
    function showData3(){
        var number=document.getElementById("mobile").value;
        localStorage.setItem("textValue3",number);
        return false;
    }
    function showData4(){
        var password=document.getElementById("pass").value;
        localStorage.setItem("textValue4",password);
        return false;
    }
    function showData5(){
        var address=document.getElementById("add").value;
        localStorage.setItem("textValue5",address);
        return false;
    }
    function showData6(){
        var country=document.getElementById("country_select").value;
            localStorage.setItem("textValue6",country);
        return false;
    }*/
    



