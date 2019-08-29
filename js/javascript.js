/*
* @Author: TD21forever
* @Date:   2019-08-16 16:01:49
* @Last Modified by:   TD21forever
* @Last Modified time: 2019-08-17 18:17:22
*/

function get_object_first_key(data){
    for (var key in data)
        return key;
}

//联动的下拉列表
function fn(obj){
	var mydata = bx;
	var weidu = obj.name;
	var value = obj.value;
	var info = mydata[weidu][value];//结果是一个obj
	html = ""
	for(item in info){

		data = info[item];
		if(data == "无") continue;
		str1 = "<option>";
		value = data;
		str2 = "</option>";

		html += (str1+data+str2);
	}
	idNameGenerate = weidu+"select";
	//为每一个维度 产生一个select标签
	var select_two = document.getElementById(idNameGenerate);
	select_two.innerHTML = html;

}

function fn4(obj)
{
	var knowledge;
	if(obj.value == "m-完成")
	{
		knowledge="了解Python语言的特点，认识在线版的海龟编辑器及其使用，学习Python编程语言的输入(input)和输出(print)语句，学习如何给程序添加注释说明信息，通过本节课的学习，完成了一个简单的人机交互程序";
	}
	else if(obj.value == "m-缺注释")
	{
		knowledge = "了解Python语言的特点，认识在线版的海龟编辑器及其使用，学习Python编程语言的输入(input)和输出(print)语句，通过本节课的学习，完成了一个简单的人机交互程序";
	}
	else if(obj.value == "m-只完成p")
	{
		knowledge = "了解Python语言的特点，认识在线版的海龟编辑器及其使用，学习Python编程语言的输出(print)语句，通过本节课的学习，可以在终端区完成任意内容的输出";
	}
	else if(obj.value == "鸡-完成")
	{
		knowledge = "认识海龟编辑器，学习Python的输出语句(print)，学习通过[head()，face()，hands()，seat()，glasses()，engines()]这些指令的方式，完成大黄鸡的修复和改造工作，创建出一个属于自己的大黄鸡";
	}	
	else if(obj.value == "鸡-缺状态")
	{
		knowledge = "认识海龟编辑器，学习Python的输出语句(print)，学习通过[head()，hands()，seat()，glasses()，engines()]这些指令的方式，完成大黄鸡的修复和改造工作，创建出一个属于自己的大黄鸡";
	}
	var textarea = document.getElementById("textarea");
	var textnode = document.createTextNode(knowledge);
	var child = textarea.childNodes[0]
	textarea.removeChild(child)
	textarea.appendChild(textnode);
}
//重复代码
function fn2(obj){
	var mydata = qw;
	var weidu = obj.name;
	var value = obj.value;
	var info = mydata[weidu][value];//结果是一个obj
	html = ""
	for(item in info){

		data = info[item];
		if(data == "无") continue;
		str1 = "<option>";
		value = data;
		str2 = "</option>";

		html += (str1+data+str2);
	}
	idNameGenerate = weidu+"select";
	var select_two = document.getElementById(idNameGenerate);
	select_two.innerHTML = html;

}
//章节名字 完成情况 和 学生姓名等
function fn3(obj){
	var mydata = temp;
	var value = obj.value;
	var html;
	var courseName;
	var knowledge;
	if(value == "code"){
		html = "<option>m-完成</option><option>m-缺注释</option><option>m-只完成p</option>"
		courseName = "Hello,codemao!";
		knowledge = "了解Python语言的特点，认识在线版的海龟编辑器及其使用，学习Python编程语言的输入(input)和输出(print)语句，学习如何给程序添加注释说明信息，通过本节课的学习，完成了一个简单的人机交互程序"
	}
	else{
		html = "<option>鸡-完成</option><option>鸡-缺状态"
		courseName = "拯救大黄鸡"
		knowledge="认识海龟编辑器，学习Python的输出语句(print)，学习通过[head()，face()，hands()，seat()，glasses()，engines()]这些指令的方式，完成大黄鸡的修复和改造工作，创建出一个属于自己的大黄鸡"
	}
	var inputCourseName = document.getElementById("inputCourseName");
	inputCourseName.setAttribute("value",courseName);
	var textarea = document.getElementById("textarea");
	var child = textarea.childNodes[0]
	textarea.removeChild(child)
	var node = document.createTextNode(knowledge);
	textarea.appendChild(node);
	var area = document.getElementById("area");
	area.innerHTML=html
}

// 表现信息和期望信息的初始化
function load(){
	//表现信息
var mydata = bx;
var tbody = document.getElementById("tableContent");
   //mydata是个obj one是keys 维度
for (one in mydata) {
	var node_tr = document.createElement("tr");
	node_tr.setAttribute("class","table-danger");
	tbody.appendChild(node_tr);
	var node_td_one = document.createElement("td");
	//维度
	var textNodeOne = document.createTextNode(one);
	node_td_one.appendChild(textNodeOne);
	node_tr.appendChild(node_td_one);
	var node_td_two = document.createElement("td");
	node_tr.appendChild(node_td_two);
	//选择程度 对应一个函数
	var select_one = document.createElement("select");
	select_one.setAttribute("name",one);
	select_one.setAttribute("onchange","fn(this)");
	select_one.setAttribute("class","custom-select-md");
	select_one.setAttribute("style","width:250px");
	//处理选择程度
	for(two in mydata[one]){
		var option = document.createElement("option");
		var textNodeTwo = document.createTextNode(two);
		option.appendChild(textNodeTwo);
		select_one.appendChild(option);
	}

	//处理具体评论点
	var node_td_three = document.createElement("td");
	node_tr.appendChild(node_td_three);
	var select_two = document.createElement("select");
	var idNameGenerate = one+"select";
	select_two.setAttribute("id",idNameGenerate);
	select_two.setAttribute("name","bx");
	select_two.setAttribute("class","custom-select-md");
	select_two.setAttribute("style","width:250px");
	//赋初值
	key = get_object_first_key(mydata[one])
	//每一个选择程度的第一个值 对应的评论点
	for(item in mydata[one][key]){
		var option_two = document.createElement("option");
		if(mydata[one][key][item] == '无') continue;
		var textNodeThree = document.createTextNode(mydata[one][key][item]);
		option_two.appendChild(textNodeThree);
		select_two.appendChild(option_two);
		
	}
	node_td_two.appendChild(select_one);
	node_td_three.appendChild(select_two);


}
	


//重复代码
var mydata = qw;
var tbody = document.getElementById("tableContent");
for (one in mydata) {
	var node_tr = document.createElement("tr");
	node_tr.setAttribute("class","table-primary");
	tbody.appendChild(node_tr);
	var node_td_one = document.createElement("td");
	var textNodeOne = document.createTextNode(one);
	node_td_one.appendChild(textNodeOne);
	node_tr.appendChild(node_td_one);
	var node_td_two = document.createElement("td");
	node_tr.appendChild(node_td_two);
	var select_one = document.createElement("select");
	select_one.setAttribute("name",one);
	select_one.setAttribute("onchange","fn2(this)");
	select_one.setAttribute("class","custom-select-md");
	select_one.setAttribute("style","width:250px");



	var node_td_three = document.createElement("td");
	node_tr.appendChild(node_td_three);
	var select_two = document.createElement("select");
	var idNameGenerate = one+"select";
	select_two.setAttribute("id",idNameGenerate);
	select_two.setAttribute("name","qw");
	select_two.setAttribute("class","custom-select-md");
	select_two.setAttribute("style","width:250px");


	for(two in mydata[one]){
		var option = document.createElement("option");
		var textNodeTwo = document.createTextNode(two);
		option.appendChild(textNodeTwo);
		select_one.appendChild(option);
	}
	key = get_object_first_key(mydata[one])
	for(item in mydata[one][key]){
		var option_two = document.createElement("option");
		if(mydata[one][key][item] == '无') continue;
		var textNodeThree = document.createTextNode(mydata[one][key][item]);
		option_two.appendChild(textNodeThree);
		select_two.appendChild(option_two);
		
	}
	node_td_two.appendChild(select_one);
	node_td_three.appendChild(select_two);
}

}

//生成
$(function(){
	$("#genButton").click(
	function(){
		//课程名称
		var courseName = $("#inputCourseName").attr("value");
		//课堂知识
		var knowledge = $("#textarea").text();
		//学生姓名 年龄 学号
		var studentName = $("#studentName").val();
		var studentAge = $("#studentAge").val();
		var studentID = $("#studentID").val();

		//自定义内容
		var diyConetent = $("#diyContent").val();
		//表现信息
		var bxinfo = document.getElementsByName("bx");
		var bxarr = new Array();
		for(var i = 0 ;i<bxinfo.length;i++)
		{
			bxarr.push(bxinfo[i].value);
		}
		//期望信息
		var qwinfo = document.getElementsByName("qw");
		var qwarr = new Array();

		for(var i = 0 ;i<qwinfo.length;i++)
		{
			qwarr.push(qwinfo[i].value);
		}
		str0 = "【学生信息】"+studentName+studentID+",年龄: "+studentAge;
		str1 = "【课堂名称】"+courseName;
		str2 = "【整体表现】 ⭐⭐⭐⭐⭐";
		str3 = "【课堂知识】" + knowledge;
		str4 = "【课堂表现】" + bxarr[0] +";"+studentName+bxarr[1]+";"+ bxarr[2]+";"+bxarr[3]+";"+ bxarr[4]+";"+ bxarr[5]+";"+ bxarr[6]+";"+ bxarr[7]+"!";  
		str5 = "【老师建议】" + studentName+qwarr[0]+";"+qwarr[1]+","+"老师建议"+studentName+"可以继续学下去"+","+qwarr[2]+studentName+"的最大印象"+",最后"+studentName+diyConetent+","+qwarr[3]+"!";
		var comment = str0+str1+str2+str3+str4+str5;
		var textarea = $("#showarea");
		textarea.empty();
		textarea.append(comment);

	})
})



// 【课堂名称】 Hello,codemao!

// 【整体表现】 ⭐⭐⭐⭐⭐

// 【课堂知识】 了解Python语言的特点，认识在线版的海龟编辑器及其使用，学习Python编程语言的输入(input)和输出(print)语句，学习如何给程序添加注释说明信息，通过本节课的学习，完成了一个简单的人机交互程序

// 【课堂表现】 没有编程基础；意味着可以在课堂上和老师进行简单的交流；能够正确理解课程代码；在本节课中，孩子独立完成了作品的大部分效果，说明有认真观看教学视频，值得鼓励哦；可以在规定的时间内，完成我们的全部课堂任务，看来我们的学习能力还是很不错；在今天的学习过程中，非常细心，代码的编写很规范，没有出现错误；在学习过程中，表现的非常有耐心；可以对今天学习的知识，进行简单的总结！

// 【老师建议】 意味着喜欢我们的上课方式；有兴趣继续学习，老师建议意味着可以继续学下去，耐心、礼貌、细心是老师对意味着的最大印象，最后意味着对开发游戏比较感兴趣，所以你在前期需要多打基础,提高数学和英语的水平。加油~！



//复制文本框
function copy(){
  var textarea = document.getElementById("showarea");
  textarea.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令
  alert("复制成功");
}