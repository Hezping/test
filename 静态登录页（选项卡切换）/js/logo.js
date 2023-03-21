//实现登录提示信息
//获取相关元素
var oCheck = document.getElementById("check");
var oTxt2 = document.getElementById("txt2");

oCheck.onmouseover = function (){
    oTxt2.style.display = "block";
}

oCheck.onmouseout = function (){
    oTxt2.style.display = "none";
}



//实现点击登录现实登录框
//获取元素

var oLoading = document.getElementById("loading");
var oBackground = document.getElementById("background");


oLoading.onclick = function (){
    oBackground.style.display = "block";
    oLoading.style.display = "none";
}



//点击关闭的窗口，现实登录图片
var oClose = document.getElementById("close");
var oBtn2 = document.getElementById("btn2");
oClose.onclick = function (){
    oBackground.style.display = "none";
    oLoading.style.display = "block";
}
oBtn2.onclick = function (){
    oBackground.style.display = "none";
    oLoading.style.display = "block";
}

//选项卡切换
window.onload = function(){
	var myTab = document.getElementById("tab");//整个div
	var myUl = myTab.getElementsByTagName("ul")[0];//一个节点
	var myLi = myUl.getElementsByTagName("li");//数组
	var myDiv = myTab.getElementsByTagName("div");//数组
	
	for(var i = 0; i<myLi.length;i++){
		myLi[i].index = i;
		myLi[i].onclick = function(){
			for(var j = 0; j<myLi.length;j++){
				myLi[j].className = "off";
				myDiv[j].className = "hide";
			}
			this.className = "on";
			myDiv[this.index].className = "show";
		}
	}
}


//实现登录效果，账号：天泽圣司，密码888888，登录成功跳转到吐槽页面
//获取元素
// var oUse = document.getElementById("use");
// var oPwd = document.getElementById("pwd");
// var oBtn1 = document.getElementById("btn1");
// var use = "";//账户
// var pwd = "";//密码
// oBtn1.onclick = function (){
//     //测试
//     //alert(1)
//     use = oUse.value
//     pwd = oPwd.value
//     if(use =="天泽圣司" && pwd == "888888"){
//        //alert("登录成功")
//        //登录成功后，页面跳转到吐槽页
//        oBtn1.href = "tc.html";
//     }else if(use =="" || pwd == ""){
//         alert("账号或密码不为空！")
//     }else{
//         alert("账号或者密码输入有误！")
//     }
    
// }