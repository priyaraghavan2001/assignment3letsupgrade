function Inputname(){

    var input=document.getElementById("text").value;
    console.log(text);
    document.getElementById("head").innerHTML="Hello "+input;
}
var btn=document.getElementById("btn");
btn.addEventListener("click",Inputname); 