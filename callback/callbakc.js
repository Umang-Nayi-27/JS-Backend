// sytax of CALLBACK

// function functionA(callback) {
//     // Do some work
//     callback(); // Execute the provided callback function
// }

// function callbackFunction() {
//     // This is a callback function
//     console.log("Callback executed");
// }

// functionA(callbackFunction); // Pass callbackFunction as a callback to functionA



//eg:1

function name(value1)
{
    console.log(`My name is ${value}.`);
}

function age(value2 , callback)
{
    console.log(`my age is ${value2}.`)
    callback(value);
}

age(22,name);


//--> in this you ca get age only when u gave the username..

//eg:2

function performOperationOnArray(numbers, operation) {
    const result = [];
    for (let number of numbers) {
        result.push(operation(number));
    }
    return result;
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = performOperationOnArray(numbers, double);
const squaredNumbers = performOperationOnArray(numbers, square);

console.log("Doubled Numbers:", doubledNumbers);
console.log("Squared Numbers:", squaredNumbers);
