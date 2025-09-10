// let a = 21;

// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

//Grade Calculator
// let marks=65;

// if(marks>=90 && marks <=100){
//     console.log("A");
// }
// else if(marks>=80 && marks <=89){
//     console.log("B");
// }
// else if(marks>=70 && marks <=79){
//     console.log("C");
// }
// else if(marks >=60 && marks <=69 ){
//     console.log("D");
// }
// else{
//     console.log("F");
// }

//Leap year check
// let year = 2020;

// if(year%4==0 || year%400== 0 && year%100 == 0){
//     console.log("leap year");
// }
// else{
//     console.log("not a leap year");
// }

//Maximum of three numbers

// let a=6, b=4, c=7;

// if(a>b){
//     if(a>c){
//         console.log("a is biggest")
//     }
//     else{
//         console.log("c is biggest");
//     }
// }
// else if(b>a){
//     if(b>c){
//         console.log("b is biggest");
//     }
//     else{
//         console.log("c is biggest");
//     }
// }

//Check Vowel or Contsant
// let Day = 1;

// switch(Day){
//     case 1: 
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         break;
// }

//Positive, negative or zero

// let a= -10;

// if(a>0){
//     console.log("positive");
// }
// else if(a<0){
//     console.log("negative");
// }
// else{
//     console.log("zero");
// }

//Calculator Program
const prompt = require('prompt-sync')({ sigint: true }); // Enables Ctrl+C to exit
const name = prompt('Please type values');
console.log(`Hello, ${name}!`);