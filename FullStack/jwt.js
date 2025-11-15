import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.JWT_SECRET) {
  console.warn("⚠️  Warning: JWT_SECRET is not set. Set it in your .env for production.");
}

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ DB Connect Error:", err));


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized: No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized: Malformed token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret_fallback");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token", error: err.message });
  }
};


app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });

    const savedUser = await user.save(); 
    const userSafe = { _id: savedUser._id, email: savedUser.email };

    return res.status(201).json({ message: "User created successfully", user: userSafe });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Error creating user", error: err.message });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "dev_secret_fallback",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Error logging in", error: err.message });
  }
});


app.get("/allusers", verifyToken, async (req, res) => {
  try {
    const users = await User.find().select("-password"); 
    res.status(200).json(users);
  } catch (err) {
    console.error("Fetch users error:", err);
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server connected to port ${port}`);
});
