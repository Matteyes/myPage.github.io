// //CSS里使用rem代替px，JS里根据屏幕大小修改rem的值
// window.setFontSize = function() {
//     var size = document.documentElement.clientWidth / 750 * 100;
// //  size = size > 50 ? size : 50
// //  console.log(size);
//     document.documentElement.style.fontSize = size.toString()  + "px";
// };
// setFontSize();
// //在屏幕大小变化时重新设置大小
// $(window).resize(function() {
//     setFontSize()
// });

$(document).ready(function(){
	$(".startButton").click(function(){
		$(location).attr("href","questions_E.html")
	})
	$(".languageButton").click(function(){
		$(location).attr("href","index.html")
	})
})