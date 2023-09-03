/*let number=0;
let value = window.prompt("Enter the number");
value = Number(value);
const setInterval_ID = setInterval(timer,1000);

function timer()
{
number+=1;   //if i decalre variale number here and set its starting value as 0, then evry time the function called for intervation then again value of number will be 0 adn ... this loop is going to infinite 
console.log(number);
    if (number >=value)
    {
       clearInterval(setInterval_ID);
    }
}
*/

const timer_id = setInterval(update,1000);

function update()
{
    let xyz = new Date();
    let hour = xyz.getHours();
    let minute = xyz.getMinutes();
    let second = xyz.getSeconds();
    
    hour = zeros(hour);
    minute = zeros(minute);
    second = zeros(second);

    let output = `${hour}:${second}:${minute}`;

    document.getElementById("timerrr").innerHTML = output;    
}



