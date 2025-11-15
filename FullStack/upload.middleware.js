import path from 'path';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req,file, cb)=>{
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb)=>{
    const allowed = ["image/png", "image/jpeg", "image/jpg"];
    if(allowed.includes(file.mimetype))
       cb(null, true);
    else cb(new Error("Invalid file type!"), false);
};

export const upload = multer({
    storage,
    fileFilter,
})