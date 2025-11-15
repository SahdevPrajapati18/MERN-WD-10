// import http from 'http';

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Hello from server");
//   } 
//   else if (req.url === "/home") {
//     res.end("This is the home page");
//   } 
//   else if (req.url === "/about") {
//     res.end("This is the about page");
//   } 
//   else {
//     res.statusCode = 404;
//     res.end("Error 404 - Page not found");
//   }
// });

// server.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });


// import express from 'express';

// const app = express();
// const port = 8000;

// // Parse JSON and form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.post('/login', (req, res, next) => {
//   const username = "Sahdev";
//   const password = "1234";
//   const role = "admin";

//   const { username: u, password: p, role: r } = req.body;

//   if (u === username && p === password && r === role) {
//     req.role = r; 
//     next(); 
//   } else {
//     return res.status(401).send("Invalid Credentials");
//   }
// });


// app.use((req, res) => {
//   if (req.role === "admin") {
//     return res.redirect("/admin");
//   } else if (req.role === "user") {
//     return res.redirect("/user");
//   } else {
//     return res.send("Role not recognized");
//   }
// });


// app.get('/admin', (req, res) => {
//   res.send("Welcome Admin!");
// });


// app.get('/user', (req, res) => {
//   res.send("Welcome User!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on PORT ${port}`);
// });

// import express from 'express';
// import fs from 'fs';


// const app = express();
// const port = 8000;



// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/',()=>{
//   res.send("Hello welcome to products");
// })

// app.get('/products',()=>{
//     fs.readFile('products.json','utf-8',(err,data)=>{
//       if(err){
//         res.status(500).send("error reading file")
//       }
// );
// })

// app.listen(port, () => {
//   console.log(`Server is running on PORT ${port}`);
// });