let display=document.querySelector("#resultP");
let buttons=document.querySelectorAll("button");
let btnArray=Array.from(buttons);

let str="";
btnArray.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        

        if(e.target.innerHTML==="DEL"){
            str=str.substring(0,str.length-1);   
        }else if(e.target.innerHTML=="AC"){
            str="";         
        }else if(e.target.innerHTML=="="){
            str=eval(str);
        }
        else{
            str+=e.target.innerHTML;  
        }
        display.value=str;
    });
});
