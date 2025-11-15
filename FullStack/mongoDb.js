import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';


dotenv.config();


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const saltRounds = 10;



mongoose.connect(process.env.MONGO_URL).then((data)=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err);
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res)=>{
    try{
        
        const {email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({email: email,password: hashedPassword});
        const savedUser = user.save();
        res.status(200).json({message: "User created successfully"},savedUser);
        console.log(req.body);
    }
    catch(err){
      console.log("error",err);
    }
});

app.get('/allusers',async (req,res)=>{
  try{
    const users = await User.find();
    res.status(200).json(users);
    }
  catch(err){
    res,status(400).json({message: "Error fetching users",err})
  }
})

app.get('/allusers/:id', async (req,res)=>{
  try{
    const user = await User.findById(req.params.id);
    
    if(!user){
      res.status(404).json({message: "User not found"});
    }
    else{
      res.status(200).json(user);
    }
  }
  catch(err){
    res.status(400).json({message: "Error fetching user",err});
  }
})

app.put('/allusers/:id', async (req,res)=>{
   
  try{
    const { email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { email, password },
      { new: true, runValidators: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully", updatedUser });
}
  catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
})

app.delete('/allusers/:id', async (req,res)=>{
  try{
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "User deleted successfully", deletedUser});
    if(!deletedUser)
      res.status(404).json({message: "User not found"} 
    );
    
  }
  catch(err){
    res.status(400).json({message: "Error deleting user",err});
  }
})

app.post('/login', async (req,res)=>{
  try{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(401).json({message: "Invalid password"});
    }
    res.status(200).json({message: "Login successful", user});
  }
  catch(err){
    res.status(400).json({message: "Error logging in",err});
  }
})

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});