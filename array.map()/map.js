//map :: transform array into new type of array

let array1 = ["abc","xyz","pqr"];

function capitalize(_value_var)      //automated loop
{
    console.log(_value_var[0].toUpperCase() + _value_var.substring(1))
}

let array2 = array1.map(capitalize) ;
array2.forEach(print);

function print(value)                   //automated loop
{
    console.log(value);
}
