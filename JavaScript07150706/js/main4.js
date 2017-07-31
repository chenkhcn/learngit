var index=0;
var arr=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];
var arr2=["images/women1.jpg","images/women2.jpg","images/women3.jpg","images/women4.jpg","images/women5.jpg"];
var time =null;
function showpre(){
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
img1.src=arr[index];
img2.src=arr2[index];
index--;
if(index==-1){
index=4;
}
time=window.setTimeout("showpre()", 2000);
}

