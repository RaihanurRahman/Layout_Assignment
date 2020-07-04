// Find 2nd Largest and smallest Number from a array
var numbers = [2,3,41,5,12,8,7,122,10,11];
var max2 = 0,max1=0;
var min2 = 1000,min1=1000;
for(var i = 0;i<10;i++){
	if(numbers[i] > max1){
		max2 = max1;
		max1 = numbers[i];
	}
	else if(numbers[i] >max2 && numbers[i] <max1){
		max2=numbers[i];
	}

	if(numbers[i] < min1){
		min2 = min1;
		min1 = numbers[i];
	}
	else if(numbers[i] < min2 && numbers[i] !=min1){
		min2=numbers[i];
	}
}
console.log("Second Largest Number: ",max2);
console.log("Second Smallest Number: ",min2);

// Find the Frequency of Numbers in a array
var frqarray = [2,3,4,2,4,3,5,2,1,2];

var freq = {};
for(var i=0;i<10;i++)
{
	if(!freq[frqarray[i]] ){
		freq[frqarray[i]]  = 0;
	}
	
	freq[frqarray[i]]++;
	
}
console.log("Frequency of Numbers in a array: ")
console.log(freq);

// function to calculate the word Count consist one or more space between them
function wordCount(exampleString){

	return exampleString.trim().split(" ").filter( x => x!="").length;
}
var exampleString = " This is  a example  String ";
console.log(exampleString);
console.log(wordCount(exampleString));


// Create Two dimensional array and fill it using For loops
var numbersArray = new Array(4); 
  
console.log("Creating 2D Array: "); 
  
for(var i = 0; i < numbersArray.length; i++) { 
    numbersArray[i] = new Array(4); 
} 
  
var x = 1; 
  
for(var i = 0; i < 4; i++) { 
    for(var j = 0; j < 4; j++) { 
        numbersArray[i][j] = x++; 
    } 
} 

console.log(numbersArray);

// Draw Daimond Shape 3 Step
var x = 3;
var shape;
x = x*2 -1;
for(var i = 0; i < x; i++){
	for(var j = 0; j< x; j++){
		if(  Math.abs(i - Math.floor(x/2)) + Math.abs(j - Math.floor(x/2)) <= Math.floor(x/2) ){
			if(shape == null) shape = '*';
			else shape += '*';
		}
		else{
			if(shape == null) shape = ' ';
			else shape += ' ';
		}
	}
	shape += '\n';
}
console.log("Draw Daimond Shape!!")
console.log(shape);

// Time Convertion 24 to 12 and vice versa

function TimeConvertor(currentTime){
	var len = currentTime.length;
	var last = currentTime.substring(len-2,len);
	
	// console.log(first);
	last = last.toUpperCase();
	if(last == 'AM' || last == 'PM'){ ///then time current time is a 12hour formate
		var first = currentTime.substring(0,len-2);
		var hour = Number(first.split(":")[0]);
		var minute = Number(first.split(":")[1]);
		if(last=='PM' && hour < 12) hour+=12;
		if(last=='AM' && hour == 12) hour-=12;
		return hour+ ":" +minute;
	}
	else { ///then time current time is a 24hour formate
		var first = currentTime.substring(0,len);
		var hour = first.split(":")[0];
		var minute = first.split(":")[1];
		var AMorPM = hour > 12? "PM" : "AM";
		hour = hour % 12 || 12;
		return hour+ ":" +minute+" "+AMorPM;
	}
}

console.log(TimeConvertor("16:25"));
console.log(TimeConvertor("4:25 PM"));

// Convert Number to Word
var thousands = ['','thousand','million', 'billion'];
var twentys = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var digit = ['zero','one','two','three','four','five','six','seven','eight','nine'];

function NumbertoWords(s){
	s = s.toString(); 
	if (s != parseInt(s)) return 'Not a Number';
	var x = s.length; 
	if (x > 10) return 'More than a Billion'; 
	var n = s.split('');
	// console.log(n);
	var ans = '';
	var flag = 0; 
	for (var i=0; i < x; i++) {
		if((x-i)%3==2) {
			if (n[i] == '1') {
				ans += tens[Number(n[i+1])] + ' '; 
				i++; 
				flag=1;
			}
			else if (n[i]!=0) {
				ans += twentys[n[i]-2] + ' ';
				flag=1;
			}
		} 
		else if (n[i]!=0) {
			ans += digit[n[i]] +' '; 
			if ((x-i)%3==0) ans += 'hundred ';
			flag=1;
		} 
		if ((x-i)%3==1) {
			if (flag) ans += thousands[(x-i-1)/3] + ' ';
			flag=0;
		}
	} 
	return ans;
}
x = 21343;
console.log(x);
console.log(NumbertoWords(x));
















