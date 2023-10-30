let textInput = document.getElementById("textInput");
let uppercaseButton=document.getElementById("upperCase");
let lowercaseButton=document.getElementById("lowerCase");
let display=document.getElementById("textOutput");

uppercaseButton.addEventListener("click",function(){
    display.value=(textInput.value).toUpperCase();
});

lowercaseButton.addEventListener("click",function(){
    display.value=(textInput.value).toLowerCase();
});
