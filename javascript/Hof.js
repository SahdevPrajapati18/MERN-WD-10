// let arr = [1,2,3,4,5];
// arr.map((Element)=>{
//     console.log(Element*2);
// })

// arr.filter((Element)=>
// {
//     if(Element%2==0){
//         console.log(Element);
//     }
// })

salary = [100,200,300,400,500]

function calculateTwentyPercent(num){
    return num = num*0.2;
}

Array.prototype.calculateTax = function(calculateFn){
    let res = [];
    for(let i=0;i<this.length;i++){
        res.push(calculateFn(this[i]));
    }
    return res;
}
let finalOutput = salary.calculateTax(calculateTwentyPercent);
console.log(finalOutput)