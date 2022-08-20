function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}
var body = document.getElementById("background");
var n=1;
document.addEventListener("click", function(){
    n++;
    body.style.backgroundImage = 'url(source/back_ground_0'+(n%2+1)+'.jpg)';
}); 
function change(){
    var x=generateRandomInt(1,111);
    setTimeout('$("h1").hide("normal")',150);
    setTimeout('$("h3").hide("normal")',150);
    setTimeout('$(".imagesite").hide("normal")',150);
    $.getJSON("https://raw.githubusercontent.com/IrisLiu-coder/chihuahua_words/main/source/chi-words.json", function(data){
        document.getElementById("transform").innerText=data?.[x]?.["transform"];
        document.getElementById("spell").innerText=data?.[x]?.["Spell"];
        document.getElementById("word").innerText=data?.[x]?.["Words"];
        document.getElementById("link").innerHTML='<a id="link" href="'+data?.[x]?.["link"]+'"><h4 style="color:black;">點此見釋義和典故</h4></a>';
    });  
}