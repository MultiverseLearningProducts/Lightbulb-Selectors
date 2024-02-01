// Write your code here
console.log("script.js successfully loaded.")

const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const lightbulbALL = document.querySelectorAll(".lightbulb");
const subtitle = document.querySelector(".subtitle");
let count = 0;

for(let i =0; i < lightbulbALL.length; i++)
{
    lightbulbALL[i].addEventListener("mouseenter", function(){
        count++;
        lightCounter(count);
        this.classList.toggle("active");
    })
}
/*
lightbulb1.addEventListener("click", function(){
    count++;
    lightCounter(count);
    this.classList.toggle("active");
})

lightbulb2.addEventListener("mouseenter", function(){
    count++;
    lightCounter(count);
    this.classList.toggle("active");
})

lightbulb3.addEventListener("click", function(){
    count++;
    lightCounter(count);
    this.classList.toggle("active");
}) */

function lightCounter(counter){
    if (count === 1)
      subtitle.innerHTML = `You've changed the lights once`;
    else
     subtitle.innerHTML = `You've changed the lights ${count} times`;
}

console.log(lightbulb1);
console.log(lightbulb2);
console.log(lightbulb3);
console.log(subtitle);