let darkButton = document.querySelector(".darkButton");
let whiteButton = document.querySelector(".whiteButton");
let selectingBody = document.querySelector("body");
let toggleButton = document.querySelector(".toggler");
let texth1 = document.querySelector("h1");

darkButton.addEventListener("click",function(){
    selectingBody.classList.toggle("dark");
    selectingBody.classList.remove("white");
    texth1.style.color = "white";
})
whiteButton.addEventListener("click",function(){
    selectingBody.classList.add("white");
    selectingBody.classList.remove("dark");
    texth1.style.color = "black";
})

toggleButton.addEventListener("click",function(){
    let isDarkMode;
    let containsDark = selectingBody.classList.contains("dark");
    if(containsDark===true){
        selectingBody.classList.add("white");
        selectingBody.classList.remove("dark");
        texth1.style.color = "black";    
        
    }
    else{
        selectingBody.classList.toggle("dark");
        selectingBody.classList.remove("white");
        texth1.style.color = "white";
        
    }
})
