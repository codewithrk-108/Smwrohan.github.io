function changecolor(color) {
	document.getElementById('divn').style.backgroundColor = color;
}
function changefontsize(fontsize) {
	document.getElementById('test').style.fontSize = fontsize;
}
function myfunc1() {
	// console.log("hello");
	// document.write("hello");
	changecolor('pink');
}
function myfunc2() {
	// console.log("hello");
	// document.write("hello");
	changecolor('yellow');
}
function myfunc3() {
	// console.log("hello");
	// document.write("hello");
	changecolor('brown');
}
function myfunc4() {
	// console.log("hello");
	// document.write("hello");
	changecolor('orange');
}
function myfunc5() {
	// console.log("hello");
	// document.write("hello");
	changecolor('green');
}

function myfunc6() {
	// console.log("hello");
	// document.write("hello");
	changefontsize('20px');
}
function myfunc7() {
	// console.log("hello");
	// document.write("hello");
	changefontsize('50px');
}
function myfunc8() {
	// console.log("hello");
	// document.write("hello");
	changefontsize('80px');
}

function save() {
	//get data from textbox
	// var datast = ' ' + document.getElementById("saveServer").value;
	// if (localStorage.getItem('data') == null) {
	// 	localStorage.setItem('data', '{}');
	// }
	// var num = parseInt('data');
	// var key = "NEWS" + i;

	// var olddata = JSON.parse(localStorage.getItem('data'));
	// olddata.push(datast);

	// localStorage.setItem('data', JSON.stringify(olddata));
	let text = document.getElementById("saveServer").value;
	let data = text;
	if (localStorage.getItem("nn") == null) {
		localStorage.setItem("nn", "0");
	}
	let ind = parseInt(localStorage.getItem("nn")) + 1;
	localStorage.setItem("nn", ind);

	let key_val = "NEWS_ID_" + ind;
	// localStorage.setItem("NUM_NEWS", ind);
	localStorage.setItem(key_val, data);

	let keyva = localStorage.getItem("NEWS_ID_" + ind);
	const node = document.createElement("li");
	const textnode = document.createTextNode(keyva);
	node.appendChild(textnode);
	document.getElementById("myList").appendChild(node);

	document.getElementById("saveServer").value = "";
	// alert("News Added Successfully at " + d);
	// window.open((window.location.href) + "#j", "_self");

	// if (localStorage.getItem('data') != null) {
	// 	document.getElementById("j").innerHTML = JSON.parse(localStorage.getItem('data'));
	// }
}


// local storage
// function Update() {
// 	let text = document.getElementById("saveServer").value;
// 	{
// 		let temp2 = "something" + text;
// 		let tom = parseInt(localStorage.getItem("NEWS_AND_UPDATES")) + 1;
// 		let temp = "NEWS_ID_" + tom;
// 		localStorage.setItem("NEWS_AND_UPDATES", tom);
// 		localStorage.setItem(temp, temp2);
// 	}
// }

// if (localStorage.getItem("NEWS_AND_UPDATES") == null)
// 	localStorage.setItem("NEWS_AND_UPDATES", 0);

// let num = parseInt(localStorage.getItem("NEWS_AND_UPDATES"))
// for (i = 1; i <= num; i++) {
// 	let temp = "NEWS_ID_" + i;
// 	let temp2 = localStorage.getItem(temp).split('something');
// 	document.writeln("<br><br>")
// 	document.writeln(temp2[1]);
// }
// let techStack = localStorage.getItem("saveServer");