document.getElementById("submit").onclick = function()
{
    let a = document.getElementById("rows").value;
    a = Number(a);
    let b = document.getElementById("collumns").value;
    b = Number(b);
    
    for( let i=1 ; i<=a ; i++)
    {
        document.getElementById("answer").innerHTML += "<br>"  //jyare += user karie tyare je value already HTML ma che te remove thati nathi.......
        for(let j=1 ; j<=b ; j++)
        {
            document.getElementById("answer").innerHTML += "@"  // jo khali j mukis to j ma je last ma  value hasse te print m aavse ane 5 ahia string che etle jo += mukis to je elemnt aavse te add thata jase ....
        }
        
    }
}