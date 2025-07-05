// 2-Get Current Date in Various Formats

let Current = new Date();

let currentDate = Current.getDate();
let currentMonth = Current.getMonth();
let currntYear = Current.getFullYear();

if(currentDate<=31) {
    currentDate = "0" + currentDate;
}
if(currentMonth<=31) {
    currentMonth = "0" + currentMonth
}
console.log("mm/dd/yyyy", currentMonth + "/", currentDate + "/", currntYear);
console.log("dd/yyy/mm", currentDate + "/", currentMonth + "/", currntYear);
console.log("yyyy/mm/dd", currntYear + ":", currentMonth + "/", currentDate);
console.log("yyyy/dd/mm", currntYear + "/", currentDate + "/", currentMonth);














