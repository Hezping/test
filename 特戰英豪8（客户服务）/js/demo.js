//鼠标点击事件，选择语言
var oBtnm = document.getElementById("btn_menu");
var oMenu = document.getElementById("menu");
oBtnm.onclick = function(ev) {
	var oEvent = event || ev
	oMenu.style.display = "block";
	oEvent.cancelBubble = true; //取消事件冒泡
}
document.onclick = function(ev) {
	var oEvent = event || ev
	oMenu.style.display = "none";
}

//logo的动画
// $(function (){
// 	$(".nav1").on("click",function(){
// 		alert(1)
// 	})
// })


//点击箭头，出现更多游戏
var oNav1 = document.getElementById("nav1");
var oBan = document.getElementById("ban");
var oClose = document.getElementById("close");
var oNav = document.getElementsByClassName("nav")[0];
 oNav1.onclick = function (ev){
	 var oEvent = event || ev
	 oBan.style.display = "block";
	 oEvent.cancelBubble = true; //取消事件冒泡
 }
oBan.onclick = function(ev) {
 	var oEvent = event || ev
 	oBan.style.display = "none";
 }
 oClose.onclick = function(){
	 oBan.style.display = "none";
 }
oNav.onclick = function() {
 	oBan.style.display = "none";
 } 
 
 
 //选择你所需要帮助的类型
 // var oLis =document.getElementsByTagName("li");
 // var oTexts =document.getElementsByTagName("span");
 // oLis[0].onmouseover = function(){
	//  oTexts[0].style.color ="#d1363a";
	//  this.style.border = "#d1363a 1px solid";
 // }
 
 
 //选项卡
 $(function (){
             // 给每一个按钮(li元素)添加点击事件
             $(".tab li").on('click',function (){
                 //给当前按钮添加active样式，删除其他兄弟得样式
                 $(this).addClass("active").siblings().removeClass("active");  //addClass添加一个active的类名；siblings是指返回所指元素
                  // 当前按钮的索引下标$(this).index()------index()索引下标
                 $(".content div:eq("+$(this).index()+")").css("display","block").siblings().css("display","none");
             })
         });
 $(function (){
             // 给每一个按钮(li元素)添加点击事件
             $(".tab3 li").on('click',function (){
                 //给当前按钮添加active样式，删除其他兄弟得样式
                 $(this).addClass("active").siblings().removeClass("active");  //addClass添加一个active的类名；siblings是指返回所指元素
                  // 当前按钮的索引下标$(this).index()------index()索引下标
                 $(".content1 div:eq("+$(this).index()+")").css("display","block").siblings().css("display","none");
             })
         });
 
var oSearch = document.getElementById("text");
oSearch.onfocus = function (){
	oSearch.placeholder ="";
}
oSearch.onblur = function (){
	oSearch.placeholder ="我們能怎麼幫你？";
}
// $(".help").on("click",function(){
// 	 $(".help").animate({top:278},1000)
//   })
 //  .mouseleave(function(){
	//  $(".btn1").animate({left:6},1000)
 // })



$(function (){
             var $btn_s =$(".help_txt")
            var $box_s = $(".help");
            // function show(){
            //     $box_s.slideToggle(500).fadeOut(1000).fadeIn(1000);
            // }
            // show()
            $btn_s.on("click",function (){
                $box_s.animate({bottom:-50},1000)
				$(".help_2").animate({bottom:10},1000)
                // setTimeout(function (){
                //     // show()
                // },2000)
             })
        });
		$(".text_2").on("click",function(){
			$(".help_2").animate({bottom:-200},1000)
			$(".help").animate({bottom:10},1000)
		})