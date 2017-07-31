var index=0;
var arr=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];
var time =null;

function shownext(){
var img1=document.getElementById("img1");
img1.src=arr[index];
index++;
if(index==5){
index=0;
}
time=window.setTimeout("shownext()", 2000);
}

function showpre(){
var img1=document.getElementById("img1");
img1.src=arr[index];
index--;
if(index==-1){
index=4;
}
time=window.setTimeout("showpre()", 2000);
}
function pre(){
window.setTimeout(time);
showpre();
}
function next(){
window.setTimeout(time);
shownext(); 
}

var x=2,y=5;
$(function(){
    $(".phone").mouseover(function(event) {
    var path=$(this).attr("href");
    
    var $div=$("<div id=\"tip\" ><img src="+path+" alt=\"\"></div>");
    $("body").append($div);
    $("#tip").css("left",x+event.pageX+"px");
    $("#tip").css("top",y+event.pageY+"px");
    $("#tip").show();
    }).mouseout(function(event) {
        $("#tip").remove();
    }).mousemove(function(event) {
        $("#tip").css("left",x+event.pageX+"px");
    $("#tip").css("top",y+event.pageY+"px");
    }).click(function(event) {
        return false;
    });
});
