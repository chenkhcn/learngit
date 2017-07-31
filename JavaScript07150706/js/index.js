 function check() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var action1=document.form1;
         if(username!="陈坤洪") {
          alert("姓名输入有误");
         }else if(password!="07150706"){
           alert("学号输入有误");
         }else{
            // alert("登陆成功");
            action1.action="main.html";
      }
    }