//Global Scope
//Block Scope
//Function Scope
//Lexical Scope //Lexical mean Scope chaining is a process when child 
//Closure child and parent are bind together Every function that are 
//Two button problem

// function outer(){
//     let value=10;
//     function inner(){
//         console.log(value);
//     }
//     inner();
// }
// outer();
function outer(){
    let value =10;

    function inner(){
        console.log(value);
    }
    return inner;
}

let res = outer();
// console.log(res);