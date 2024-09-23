const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2023, 4, 23, 14, 29, 25);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const day = futureDate.getDate();
const month = months[futureDate.getMonth()];
const wday = futureDate.getDay();
let weekday = weekdays[wday];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes()

giveaway.textContent = `giveaway ends on ${hour}:${minute} ${weekday} ${day},${month} ${year}`; 

console.log(futureDate);
function getRemainingTime(){
  const today = new Date().getTime();
  const futureTime = futureDate.getTime();
  const t = futureTime - today;
//1s = 1000ms
//1min = 60s
//1hr = 60 mins
//1day = 24 hours
const oneDay = 24*60*60*1000 ;
const oneHour = 60*60*1000 ;
const oneMinute = 60*1000 ;

let days = Math.floor(t / oneDay) ;
let hours = Math.floor((t % oneDay) / oneHour );
let minutes = Math.floor(t % oneHour / oneMinute) ;
let seconds = Math.floor(t % oneMinute / 1000 );
console.log(t);
//set values array
const values = [days, hours, minutes, seconds];
//format function
function format(value){
  if (value < 10){
    return `0${value}`;
  }
  return value;
}

items.forEach(function(item, index){//index in parameter is for nodelist
item.innerHTML = format(values[index]);//index here is for the values array
});
if (t < 0){
  clearInterval(countdown);
  deadline.innerHTML = "<h4 class = 'expired'>Sorry oo, this giveaway don expire</h4>";
}
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
