/*
------------------------ASCENDING ORDER-------------------------------------------------------------------------

let array1 = [13,15,1,16,25]

function asc(x,y)               //first create function
{
    return x - y ;              // fro ascendinng order
}

let array2 = array1.sort(asc)   // then call the function



function print(value)           //first create function
{
    console.log(value);
}

array1.forEach(print);
array2.forEach(print);          // then call the function

// NOTE :: remenmber that sort() method does not create the new method ..
// here the answer of the both array will be same.
//becasue the new array has a ascending ordered element but old array also sort its element.

---------------------------DESCENDING ORDER ---------------------------------------------------------------------


let array1 = [13,15,1,16,25]

function asc(x,y)               //first create function
{
    return y - x ;              // fro descending order
}

let array2 = array1.sort(asc)   // then call the function



function print(value)           //first create function
{
    console.log(value);
}

array1.forEach(print);
array2.forEach(print);          // then call the function

-------------------------MAX NUMBER FORM THE ARRAY------------------------------------------------------------------

let array1 = [13,15,1,16,25];

let x = Math.max(...array1);

console.log(x);


-------------------------MIN NUMBER FORM THE ARRAY------------------------------------------------------------------

let array1 = [13,15,1,16,25];

let x = Math.min(...array1);

console.log(x);




let array1 = [10,30,20,34,55]

array1.sort((x,y)=>x-y);

array1.forEach((value)=>console.log(value));

*/



