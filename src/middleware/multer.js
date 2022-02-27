const multer =require("multer")
const path =require ("path");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve(__dirname,"../../public/img/users"))
    },
    filename:(req,file,cb)=> {
        const newFilename="user-"+ Date.now()+path.extname(file.originalname);
        cb(null, newFilename);
    }
})

const upload =multer ({storage:storage});

module.exports =upload
