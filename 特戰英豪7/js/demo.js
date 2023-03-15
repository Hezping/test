var btn1 = $(".a-2-1")
btn1.on("mouseenter", function() {
	$(".top-2-1").css("display", "block")
})
$(".top-2-1").on("mouseenter", function() {
	$(".top-2-1").css("display", "block")
})
btn1.on("mouseleave", function() {
	$(".top-2-1").css("display", "none")
})
$(".top-2-1").on("mouseleave", function() {
	$(".top-2-1").css("display", "none")
})


var btn2 = $(".a-2-2")
btn2.on("mouseenter", function() {
	$(".top-2-2").css("display", "block")
})
$(".top-2-2").on("mouseenter", function() {
	$(".top-2-2").css("display", "block")
})
btn2.on("mouseleave", function() {
	$(".top-2-2").css("display", "none")
})
$(".top-2-2").on("mouseleave", function() {
	$(".top-2-2").css("display", "none")
})
//立刻玩
// var btn3 = $(".top-3-1 a")
// btn3.on("click", function(){
// 	$(".ban2").css("display","block")
// })
// var close1 = $(".box2")
// close1.on("click",function(){
// 	$(".ban2").css("display","none")
// })
// $("#ban2").on("close",function(){
// 	$(".ban2").css("display","none")
// })
var oBtn3 = document.getElementsByClassName("btn3")[0];
var oNav = document.getElementsByClassName("top-all")[0];
var oBan2 = document.getElementsByClassName("ban2")[0];
var oClose1 = document.getElementsByClassName("miss")[0];
 oBtn3.onclick = function (ev){
	 var oEvent = event || ev
	 oBan2.style.display = "block";
	 oEvent.cancelBubble = true; //取消事件冒泡
 }
oBan2.onclick = function(ev) {
 	var oEvent = event || ev
 	oBan2.style.display = "none";
 }
 oClose1.onclick = function(){
	 oBan2.style.display = "none";
 }
oNav.onclick = function() {
 	oBan2.style.display = "none";
 } 


//点击箭头，出现更多游戏
var oA1 = document.getElementById("a1");
var oBan = document.getElementById("ban");
var oClose = document.getElementById("close");
// var oNav = document.getElementsByClassName("top-all")[0];
oA1.onclick = function() {
	// var oEvent = event || ev
	oBan.style.display = "block";
	// oEvent.cancelBubble = true; //取消事件冒泡
}
// document.onclick = function(ev) {
// 	var oEvent = event || ev
// 	oBan.style.display = "none";
// }
oClose.onclick = function() {
	oBan.style.display = "none";
}
oBan.onclick = function() {
	oBan.style.display = "none";
}
// oNav.onclick = function() {
// 	oBan.style.display = "none";
// }
// 字体滑动
$(function(){
	var sbox1 =  $(".bg-word1");
	var sbox2 = $(".left");
	var sbox3 = $(".center_word1");
	var sbox4 = $(".center_word2");
	var sbox5 = $(".right");
	var sbox6 = $(".center_left");
	var sbox7 = $(".center_right");
	var oImg = $(".img2");
	var oTxt =$(".text1");
	$(window).scroll(function(){                         
	     var q = $(window).scrollTop()              
	     var t1=q*0.25-50+"px"
	     var t2=-q*0.2+100+"px"  
	     var t3 =q*0.25-50+"px"  
		 var t4 =q*0.25-50+"px"  
	     var t5=-q*0.2+50+"px"  
	     var t6 =-q*0.2+100+"px"
		 var t7=-q*0.2+50+"px"
		 var t8 =-q*0.05+0+"px"
		 var t9 =q*0.1+200+"px"
	               
	   sbox1.animate({top:t1},1);
	   sbox2.animate({top:t2},1);
	   sbox3.animate({top:t3},1);  
	   sbox4.animate({top:t4},1); 
	   sbox5.animate({top:t5},1); 
	   sbox6.animate({top:t6},1);
	   sbox7.animate({top:t7},1); 
	   oImg. animate({top:t8},1); 
	   oTxt. animate({top:t9},1);
	            })
})


//头部第三部分的隐藏部分
// $(".top-3 a").on("click",function(){
// 	$(".language").css("display","block")
// })
var oImg1 = document.getElementsByClassName("a3")[0];
var oSpl = document.getElementsByClassName("language")[0];
oImg1.onclick = function (ev){
	 var oEvent = event || ev
	 oSpl.style.display = "block";
	 oEvent.cancelBubble = true; //取消事件冒泡
 }
document.onclick = function(ev) {
 	var oEvent = event || ev
 	oSpl.style.display = "none";
 }
 //创一个
 $(".box3").on("mouseenter",function(){
	 $(".btn1").animate({left:278},100)
  }).mouseleave(function(){
	 $(".btn1").animate({left:-50},1000)
 })
 $(".box4").on("mouseenter",function(){
 	 $(".btn2").animate({left:278},100)
  }).mouseleave(function(){
 	 $(".btn2").animate({left:-50},1000)
 })









