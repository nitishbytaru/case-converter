let inpt = document.getElementById("textInput");
let upbtn=document.getElementById("upcs");
let lwbtn=document.getElementById("lwcs");
let dsply=document.getElementById("textOutput");

upbtn.addEventListener("click",function(){
    dsply.value=(inpt.value).toUpperCase();
});

lwbtn.addEventListener("click",function(){
    dsply.value=(inpt.value).toLowerCase();
});



