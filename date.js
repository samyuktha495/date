let a= new Date();
console.log(a);
console.log(a.getFullYear());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log(a.getDate());

//setting date information

let b=new Date();
console.log(b.setFullYear(2024));
console.log(b.setMonth(0));
console.log(b.setDate(12));
console.log(b.setHours(3));
console.log(b.setMinutes(55));
console.log(b.setSeconds(57));

//additional methods
let c=new Date();
console.log(c.toDateString());
console.log(c.toTimeString());
console.log(c.toLocaleTimeString());
console.log(c.toLocaleDateString());


// setting alarm
let alarmsong=document.getElementById("song")
function alarmRing(){
    let presentTime=new Date();
    let alarmTime=new Date();
    console.log(alarmTime.setHours(24));
    console.log(alarmTime.setMinutes(0));
    console.log(alarmTime.setSeconds(0));
    let TimeDiff=alarmTime-presentTime
    console.log(TimeDiff);
    setTimeout(()=> {
        
        alert("Happy New Year")
    },TimeDiff )
    console.log("your alarm will ring at 24:00");

}
alarmRing()


//Examples of math functions
let d=13.456;
console.log(d);
//math.round
console.log(Math.round(d));
//math.ceil
console.log(Math.ceil(d));
//math.floor
console.log(Math.floor(d));
//math.trunc
console.log(Math.trunc(d));
//math.sqrt
console.log(Math.sqrt(d));
//math/pow
console.log(Math.pow(2,3));
//math.abs
console.log(Math.abs(-5));
//math.min and math.max
console.log(Math.min(1,2,3,0,-1));
console.log(Math.max(1,2,3,0,-1));
//math.random
console.log(Math.random()*5);

//Es6  features
//1)let and const
let e=5;
e=6;
console.log(e);
const f=24;

console.log(f);
//2)Arrow functions
const g=()=>
    console.log("samyu")
g()
//3)default parameters
function k(x,y,z=300){
    console.log(x+y+z);

}
k(20,30)
//4)Template literals
let m="sam"
function n(){
    // console.log("hi" +" "+ m + " " +"how are you");
    console.log(`hi ${m} how are you`)
    

}
n()



