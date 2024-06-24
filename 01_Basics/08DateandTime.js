// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate)

// let myCreateDate = new Date(2024, 0, 3)
// let myCreateDate = new Date(2024, 0, 3, 5, 4)
let myCreateDate = new Date("2024-01-2")
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate =new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());

newDate.toLocaleString('defualt', {
    weekday: "long"
})