// 1- Display current data and time

let Days = new Date();
let currentDate = Days.getDay();

let totalDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", 'saturday']

console.log("Current Days Is:", totalDays[currentDate]); // Print current days

let hours = Days.getHours();
let minutes = Days.getMinutes();
let second = Days.getSeconds();

console.log("Current Time Is:", hours + ":", minutes + ":", second + ":"); // print current time







