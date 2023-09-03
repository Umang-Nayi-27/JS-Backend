let array1 = [10,20,30,40,50,60,70,80,90,100]

        //bijo array ahia create nai kervo try to do everything in sequence, etle ahia pela function create kervanu tyare bad fucntionn call ...

function voterage(value)
{
    return value >50 ;
}

        //have function ne filter ma upyog kervo
        //array2 creation

array2 = array1.filter(voterage);    // 50 uper ni badhi value array2 ma aavi gai

function print(value)
{
    console.log(value);
}

array1.forEach(print);      //array1 ni value print kerse !!!!!
array2.forEach(print);    // array2 ma je value hase te prinit kerse !!!!!