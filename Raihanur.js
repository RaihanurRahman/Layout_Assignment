
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
console.log(max2);
console.log(min2);
var frqarray = [2,3,4,2,4,3,5,2,1,2];

var freq = {};
for(var i=0;i<10;i++)
{
	if(!freq[frqarray[i]] ){
		freq[frqarray[i]]  = 0;
	}
	
		freq[frqarray[i]]++;
	
}
console.log(freq);
