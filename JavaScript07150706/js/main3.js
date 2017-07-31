var index=0;
var arr=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];
var arr2=["images/sport1.jpg","images/sport2.jpg","images/sport3.jpg","images/sport4.jpg","images/sport5.jpg"];
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

var x=2,y=5;
$(function(){
    $(".phone").mouseover(function(event) {
        /* Act on the event */
    var path=$(this).attr("href");
    
    var $div=$("<div id=\"tip\" ><img src="+path+" alt=\"\"></div>");
    $("body").append($div);
    $("#tip").css("left",x+event.pageX+"px");
    $("#tip").css("top",y+event.pageY+"px");
    $("#tip").show();
    }).mouseout(function(event) {
        /* Act on the event */
        $("#tip").remove();
    }).mousemove(function(event) {
        /* Act on the event */
        $("#tip").css("left",x+event.pageX+"px");
    $("#tip").css("top",y+event.pageY+"px");
    }).click(function(event) {
        /* Act on the event */
        return false;
    });
});