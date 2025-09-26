import fs from  "fs";

// fs.writeFileSync("sahdev.txt", "Hi how are you");

// fs.writeFile("sahd.txt", "hello hi", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created");
//     }
// });

fs.readFile("./sahd.txt","utf-8", (err,data)=>{
    if(err){
        console.log("chup ho ja")
    }
    else{
        console.log(data)
    }
});
