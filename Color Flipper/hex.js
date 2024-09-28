
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0;i<6;i++){
        let num = getRandomNumber() //if this line was outside the for loop it would return colors like #EEE #AAA
        hexColor += hex[num]; // you can remove the line of code above and simply replace num with getRandomNumber()
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}) 







