var Color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var elements = document.getElementById('btndiv').childNodes;

console.log(elements);
var temp = 0;
for(var ele of elements){
	if(ele.nodeName == 'BUTTON'){
		ele.style.backgroundColor = Color[temp%7];
		temp++;
	}
}
function CNT(){
	var temp = 0;
	for(var ele of elements){
		if(ele.nodeName == 'BUTTON'){
			temp++;
		}
	}
	return temp;
}

var freq = {};
var btn_cnt = 0;
let value = 0;
document.querySelector("#btndiv").addEventListener('click', (e) => {
  var button_id = e.target.id.substring(3,4);
  // console.log(e);
  if(!freq[button_id]){
  	btn_cnt ++;
  	value += parseInt(e.target.innerHTML);
  	// console.log(value);
  	freq[button_id]++;
  }
  if(btn_cnt==2){
  	var bttn = document.createElement("BUTTON");
  	bttn.innerText = value;
  	// console.log(value);
  	var cur_cnt = CNT();
  	bttn.style.backgroundColor = Color[cur_cnt%7];
  	bttn.classList.add('btn');
  	bttn.classList.add('space');
  	document.getElementById("btndiv").appendChild(bttn);
  	btn_cnt = 0;
  	value = 0;
  }
});