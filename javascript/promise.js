const p1 = Promise.reject("404 not found");
const p2 = Promise.resolve("success");
const p3 = Promise.resolve("Again Success");

// Promise.any([p1,p2,p3])
// .then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.all([p1,p2,p3])
// .then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.race([p1,p2,p3])
// .then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Promise.allSettled([p1,p2,p3])
// .then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


