// let response ={
//     status: 300,
//     data: {
//         name: "Sahdev",
//         age:"23",
//         isEmployed: false,
//         address:{
//             street: "123 main st",
//             city:"New York",
//             state: "USA"
//         },
//     },
// };

// let { status} = response;
// console.log(status);

// let response = {
//     status: 300,
//     header: {
//         type: "json",
//         version: 1.1,
//     },
//     body:{
//         name: "Sahdev",
//         age: 30,
//         isEmployed:false,
//         address:{
//             street: "123 main st",
//             city: "New York",
//             state: "NY",
//         },
//         footer:{
//             type: "json",
//             version: 1.1,
//         },
//     },
// };

// let {status}= response;
// console.log(status);

// let { header: {type}}=response;
// console.log(type);

// let {body: {address:{street}}}=response;
// console.log(street);

// let {body:{footer:{version}}}=response;
// console.log(version);

// let {body:{isEmployed}}=response;
// console.log(isEmployed);

//Multiple arguments handling using rest parameter or spread operator
// function sum(...args: any[]): number 
function sum(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum = sum+args[i];
    }
    return sum;
}

let res = sum(2,4,5,6,7,8,9);
console.log(res);