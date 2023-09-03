let array = [1,2,3,4,5,6,7,8,9];

function suffle(array_values)     //array nu name ane function parameter alag hova jooie bhale banne same j vastu show kertta hoy.
{
    current_index = array_values.length;

    while( current_index != 0)
    {
        let random_index = Math.floor(Math.random() * current_index);
     
        current_index-=1;
     
        // 3 variables are use>d to exchange the value beetwen 2 variable.
        // 3-->1  , 1-->2 , 2-->3
        let temp = array_values[current_index];
        array_values[current_index] =  array_values[random_index];
        array_values[random_index] = temp;
    }
    return array_values
}

suffle(array);  //function calling
