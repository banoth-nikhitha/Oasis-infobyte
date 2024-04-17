let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string="";//for storing result
let arr=Array.from(buttons);//it creates an array which contains all buttons
//it iterates thought the array
arr.forEach(button=>
{
    button.addEventListener('click',(e)=>
{
    if (e.target.innerHTML == 'Enter')
    {
        string=eval(string);
        input.value=string;
    }
    else if(e.target.innerHTML=='clear')
    {
        string="";
        input.value=string;
    }
    else if(e.target.innerHTML=='del')
    {
        string=string.substring(0,string.length-1);
        input.value=string;
    }
    else
    {
       string+=e.target.innerHTML;
       input.value=string; 
    }
})
})