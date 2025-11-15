import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "sahdevprajapati27@gmail.com",
    pass: "lbhm ssom zshx htan",
  },
});


const mailOptions = {
  from: "sahdevprajapati27@gmail.com",
  to: "sahdev18102002@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Email Sent", info.response);
    }
})