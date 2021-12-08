var q1 = new Vue({
	el: '#questions',
	data: {
		items: [
			{
			  num:'1',
			  name: 'question1',
			  ques: 'Age < 6 months ?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'2',
			  name: 'question2',
			  ques: 'Any one of these: congenital heart disease, congenital abnormal airway development, sepsis, pyemia, intracranial infection, hypoxic ischemic encephalopathy.',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'3',
			  name: 'question3',
			  ques: 'SpO₂ < 90% ?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'4',
			  name: 'question4',
			  ques: 'Delayed capillary refilling time(> 3s)?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'5',
			  name: 'question5',
			  ques: 'Elevated procalcitonin (PCT) value(＞ 0.5ng/ml)?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'6',
			  name: 'question6',
			  ques: 'Consolidation or impaired area present in more than 1 pulmonary lobe on the radiographic detection',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'7',
			  name: 'question7',
			  ques: 'Whether there are any of the following such as pleural effusion, pneumatocele or pneumothorax depending on the radiographic detection?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'8',
			  name: 'question8',
			  ques: 'Whether there is renal dysfunction(serum creatinine >60 μmol/L or urea >7.14 mmol/L)?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'9',
			  name: 'question9',
			  ques: 'Whether there is liver dysfunction(alanine transaminase >40 U/L or glutamic oxalacetic transaminase>45 U/L)?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
			},
			{
			  num:'10',
			  name: 'question10',
			  ques: 'Whether there is respiratory failure?',
			  ans1: 'Yes',
			  ans2: 'No',
			  ans3: 'Unknown'
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
			level = "low risk";
		    noteText="<div style='text-align: left;padding: 2rem 1rem'>Risk rating:<span style='color:green;'>"+level+"</span> <br>Score:"+score+" <br>Number of missing symptoms:"+unkown+"</div>"
		}else if (ans == 2){
			level = "moderate risk";
		    noteText="<div style='text-align: left;padding: 2rem 1rem'>Risk rating:<span style='color: rgb(196, 196, 25);'>"+level+"</span> <br>Score:"+score+" <br>Number of missing symptoms:"+unkown+"</div>"
		}else if (ans == 3){
			level = "high risk";
			noteText="<div style='text-align: left;padding: 2rem 1rem'>Risk rating:<span style='color:darkorange;'>"+level+"</span> <br>Score:"+score+" <br>Number of missing symptoms:"+unkown+"</div>"
		}else if (ans == 4){
			level = "very high risk";
			noteText="<div style='text-align: left;padding: 2rem 1rem'>Risk rating:<span style='color:red;'>"+level+"</span> <br>Score:"+score+" <br>Number of missing symptoms:"+unkown+"</div>"
		}
		if(unkown != 0){
		    noteText = noteText+"<br>（Re-evaluation is recommended when symptoms are clear.）"
		}
		noteText = noteText+"<br><a href='./questions_E.html'><button style='padding: 0.7rem 3rem;background-color: white;border: 0.0625rem solid gray;border-radius: 0.3125rem;margin: 2rem 0;font-size: large;'>←BACK</button></a>"
		document.write(noteText);
		score = 0;
		unkown = 0;
		ans = 0;
	})
	// var nodemailer = require("nodemailer");
	// // 开启一个 SMTP 连接池
	// var smtpTransport = nodemailer.createTransport("SMTP",{
	//   host: "smtp.qq.com", // 主机
	//   secureConnection: true, // 使用 SSL
	//   port: 465, // SMTP 端口
	//   auth: {
	//     user: '1309582431@qq.com', //邮箱账号
	//     pass: 'rmtrokxlwgjxghhj' //邮箱的授权码
	//   }
	// });
	

	

	$(".feedback_button").click(function(){
		var address = "nk_xu@hotmail.com";
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
            alert("This browser does not support one-click copy! Please manually copy the link address of the text box~");
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
    alert("The following content has been copied to the clipboard:\n" + maintext);
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