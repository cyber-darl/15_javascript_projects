/*const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //get random number between 0-3 
   const randomNumber = getRandomNumber();
   console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}
*/




//clickMeButton.onclick() = soft(); irrelevant?
const colors = ["blue", "green", "purple", "RGBA(100, 210, 5, .3)", "#021AAC"] ;
function getRandomNumber() {
   return Math.floor(Math.random() * colors.length);
}

const clickMe = document.getElementById("btn");
const colorname = document.querySelector(".color");

clickMe.addEventListener("click", function(){
const num = getRandomNumber();
colorname.textContent = colors[num];
document.body.style.backgroundColor = colors[num];
}

)
