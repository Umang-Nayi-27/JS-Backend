let number = [10,20,30,40];

console.log(a);  
// this will return NaN .because 10203040 is works as string ...

console.log(...number);   // this will return alll value which array has
//this upper works like rest .... this represent as 10 20 30 40s

let a = Math.max(number);

console.log(a);
console.log(...a);  //this will not work --- > max only will be one ..
