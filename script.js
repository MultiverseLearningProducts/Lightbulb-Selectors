// Write your code here
let lightbulb1 = document.querySelector("#lightbulb1");
let lightbulb2 = document.querySelector("#lightbulb2");
let lightbulb3 = document.querySelector("#lightbulb3");
let subtitle = document.querySelector(".subtitle");
count = 0;

lightbulb1.addEventListener("click", function(event) {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle('active');
    return count;
})

lightbulb2.addEventListener("click", function(event) {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle('active');
    return count;
})

lightbulb3.addEventListener("click", function(event) {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle('active');
    return count;
})