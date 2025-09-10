// let arr1 = [1,2,3,4,5];

// // for(let i=0; i<arr1.length;i++){
// //     console.log(arr1[i]);
// // }

// // for(let i of arr1){
// //     console.log(i);
// // }


// for(let i in arr1){
//     // console.log(i);
//     console.log(arr1[i]);
// }

// let num =5;

// // for(let i=1; i<=10;i++){
// //     console.log(num*i);
// // }
// let fact = 1;

// for(let i=num; i>=1;i--){
//     fact = fact*i;
// }
// console.log(fact);

// let sum=0;
// //Sum of natural numbers
// for(let i=1;i<=20;i+
// }
// console.log(sum);

let number = 123;
let rev =0;
while(number >0){
    let digit  = number%10;
    rev = (rev *10 )+digit;
    number = Math.floor(number /10);

}
console.log(rev);
