import express from "express";
import { upload } from "./upload.middleware.js"; // ✅ Correct relative path

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Correct syntax: upload.fields(...)
app.post("./upload", upload.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
    { name: "file3", maxCount: 1 }
]), (req, res) => {
    try {
        console.log(req.files);
        res.status(200).json({
            message: "Files uploaded successfully",
            files: req.files
        });
    } catch (err) {
        res.status(500).json({
            message: "Error uploading files",
            error: err.message
        });
    }
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
