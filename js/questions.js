var q1 = new Vue({
	el: '#questions',
	data: {
		items: [
			{
			  num:'1',
			  name: 'question1',
			  ques: '年龄是否小于6个月',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'2',
			  name: 'question2',
			  ques: '是否有以下伴随疾病：先天性心脏病，先天性气道发育异常，败血症，脓毒症，中毒性脑病，颅内感染，缺氧缺血性脑病',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'3',
			  name: 'question3',
			  ques: '经皮血氧饱和度（SpO₂）< 90% ？',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'4',
			  name: 'question4',
			  ques: '毛细血管再充盈时间延长（> 3s）？',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'5',
			  name: 'question5',
			  ques: '降钙素升高（＞ 0.5ng/ml ）?',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'6',
			  name: 'question6',
			  ques: 'CT报告是否显示多个肺叶受损（多叶肺炎）',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'7',
			  name: 'question7',
			  ques: '是否有以下任一表现：气胸，肺大疱，胸腔积液（复杂肺炎）',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'8',
			  name: 'question8',
			  ques: '是否有肾功能障碍（血肌酐 >60 μmol/L 或者血尿素氮>7.14 mmol/L）',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'9',
			  name: 'question9',
			  ques: '是否有肝功能障碍（谷丙转氨酶 >40 U/L 或者谷草转氨酶>45 U/L）',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			},
			{
			  num:'10',
			  name: 'question10',
			  ques: '是否有呼吸衰竭现象',
			  ans1: '是',
			  ans2: '否',
			  ans3: '不清楚'
			}
		]
	}
})




$(document).ready(function(){
	var score = 0;
	var unkown = 0;
	var ans = 0;
	$(".submit_button").click(function(){
		var s;
		var noteText;
		var level;
		for (var i = 1; i < 11; i++) {
			s = $("input[name='question"+i+"']:checked").val();
			if(s == "A"){
			    score++;
			    console.log(score);
			}else if(s == "C"){
			    unkown++;
			    console.log(unkown);
			}
		}
		ans = getAns(score, unkown);
		if (ans == 1){
			level = "低风险";
		    noteText="<div style='text-align: left;padding: 2rem 1rem'>风险评级：<span style='color:green;'>"+level+"</span> <br>所得分数："+score+" <br>缺失项目数："+unkown+"</div>"
		}else if (ans == 2){
			level = "中等风险";
		    noteText="<div style='text-align: left;padding: 2rem 1rem'>风险评级：<span style='color: rgb(196, 196, 25);'>"+level+"</span> <br>所得分数："+score+" <br>缺失项目数："+unkown+"</div>"
		}else if (ans == 3){
			level = "高风险";
			noteText="<div style='text-align: left;padding: 2rem 1rem'>风险评级：<span style='color:darkorange;'>"+level+"</span> <br>所得分数："+score+" <br>缺失项目数："+unkown+"</div>"
		}else if (ans == 4){
			level = "极高风险";
			noteText="<div style='text-align: left;padding: 2rem 1rem'>风险评级：<span style='color:red;'>"+level+"</span> <br>所得分数："+score+" <br>缺失项目数："+unkown+"</div>"
		}
		if(unkown != 0){
		    noteText = noteText+"<br>（缺失项目较多，建议症状清楚后再重新测评 ）"
		}
		noteText = noteText+"<br><a href='./questions.html'><button style='padding: 0.7rem 3rem;background-color: white;border: 0.0625rem solid gray;border-radius: 0.3125rem;margin: 2rem 0;font-size: large;'>←返回</button></a>"
		document.write(noteText);
		score = 0;
		unkown = 0;
		ans = 0;
	})

	

	

	$(".feedback_button").click(function(){
		var address = "dengysure186@aliyun.com";
		copyToClipboard(address);
		// var feedbackText = prompt("如果您在使用过程种有任何意见或者建议，欢迎给我们反馈，谢谢！","请输入您的建议以及联系方式");
		// // 设置邮件内容
		// var mail = {
		//     // 发件人
		//     from: ' <1309582431@qq.com>',
		//     // 主题
		//     subject: '来自Modified PIRO量表的反馈',
		//     // 收件人
		// 	to: 'hyh_matteyes@163.com',
		//     // to: 'nk_xu@hotmail.com',
		//     // 邮件内容，text或者html格式
		//     text: feedbackText //可以是链接，也可以是验证码
		// };
		// // 发送邮件
		// smtpTransport.sendMail(mail, function(error, response){
		//   if(error){
		//     console.log(error);
		//   }else{
		//     console.log("Message sent: " + response.message);
		//   }
		//   smtpTransport.close(); // 如果没用，关闭连接池
		// });
	})
})

function copyToClipboard(maintext){
    if (window.clipboardData){
        window.clipboardData.setData("Text", maintext);
    }else if (window.netscape){
        try{
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }catch(e){
            alert("该浏览器不支持一键复制！请手工复制文本框链接地址～");
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip) return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans) return;
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext=maintext;
        str.data=copytext;
        trans.setTransferData("text/unicode",str,copytext.length*2);
        var clipid=Components.interfaces.nsIClipboard;
        if (!clip) return false;
            clip.setData(trans,null,clipid.kGlobalClipboard);
    }
    alert("以下内容已经复制到剪贴板\n" + maintext);
}


function getAns(s, u){
	var a;
	switch(u){
	    case 0:
			switch(s){
				case 0:
				case 1:
				case 2:
					a = 1;
					break;
				case 3:
				case 4:
					a = 2;
					break;
				case 5:
				case 6:
					a = 3;
					break;
				default:
					a = 4;
					break;
			}
			break;
	    case 1:
			switch(s){
				case 0:
				case 1:
					a = 1;
					break;
				case 2:
				case 3:
					a = 2;
					break;
				case 4:
				case 5:
					a = 3;
					break;
				default:
					a = 4;
					break;
			}
			break;
	    case 2:
			switch(s){
				case 0:
					a = 1;
					break;
				case 1:
				case 2:
					a = 2;
					break;
				case 3:
				case 4:
					a = 3;
					break;
				default:
					a = 4;
					break;
	        }
	        break;
	    case 3:
	        switch(s){
				case 0:
				case 1:
					a = 2;
					break;
				case 2:
				case 3:
					a = 3;
					break;
				default:
					a = 4;
					break;
	        }
	        break;
	    case 4:
	        switch(s){
				case 0:
					a = 2;
					break;
				case 1:
				case 2:
					a = 3;
					break;
				default:
					a = 4;
					break;
	        }
	        break;
	    case 5:
	        switch(s){
				case 0:
				case 1:
					a = 3;
					break;
				default:
					a = 4;
					break;
	        }
	        break;
	    default:
	        switch(s){
				case 0:
					a = 3;
					break;
				default:
					a = 4;
					break;
	        }
	        break;
	};
	return a;
}