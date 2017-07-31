 function check1(){
        var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        var div1=document.getElementById("div1");
      if(!reg.test(document.form1.input1.value)){
        div1.innerHTML="用户名必须为4-16个字符，且开头为字母";
      }else{
        div1.innerHTML="";
        return true;
      }
      }
      function check2(){
        var reg=/^[a-zA-Z0-9]{4,10}$/;
        var div2=document.getElementById("div2");
      if(!reg.test(document.form1.input2.value)){
        div2.innerHTML="密码必须4-10位";
      }else{
        div2.innerHTML="";
        return true;
      }
      }
      function check3(){
        var div3=document.getElementById("div3");
      if((document.form1.input2.value)!=(document.form1.input3.value)){
        div3.innerHTML="密码不一致";
      }else{
        div3.innerHTML="";
        return true;
      }
      }
      function check4(){
        var reg=/^\w+@\w+\.\w+[(com)|(cn)]$/;
        var div4=document.getElementById("div4");
      if(!reg.test(document.form1.input4.value)){
        div4.innerHTML="email地址必须由字母开始并且***@***.com或***@***.cn";
      }else{
            div4.innerHTML="";
            return true;
      }
      }
      function check5(){
        var reg=/^\d{1,11}$/;
        var div5=document.getElementById("div5");
      if(!reg.test(document.form1.input5.value)){
        div5.innerHTML="手机号码必须为1-11位数字";
      }else{
        div5.innerHTML="";
        return true;
      }
      }
      function check6(){
        var reg=/^(\d{4})-(\d{1,2})-(\d{1,2})$/;
        var div6=document.getElementById("div6");
      if(!reg.test(document.form1.input6.value)){
        div6.innerHTML="年份格式必须为1980-05-12或者1980-05-04";
      }else {
        div6.innerHTML="";
        return true;
      }
      }
      function check7(){
        if(check1()==true&&check2()==true&&check3()==true&&check4()==true&&check5()==true&&check6()==true&&document.getElementById("checkbox").checked==true){
          alert("注册成功");
        return true;
        }else{
          alert("注册失败");
          return false;
        }
      }