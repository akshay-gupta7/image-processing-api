import express from 'express';
import { checkFileExists } from './checkfileExists';
import { processImage } from './imageprocess';
//import { runInNewContext } from 'vm';
const app = express();
const port = 3022;
const path = require("path");

app.get('/api', (req,res)=>{
    res.send("Hello World 4");
});

app.get('/api/images', (req,res)=>{
    let img_name= new String();
    let width =  new Number();
    let height = new Number();
    if(req.query.filename){
        img_name = String(req.query.filename);
    }
    else{
        img_name= "empty";
        res.send("Filename is empty, please enter a filename");
    }
    width = Number(req.query.width);
    height  = Number(req.query.height);
    const check = checkFileExists(img_name);
    //res.send(check);
    if (check == false){
        const responsefromprocessor = async() : Promise<void>=>{
            await processImage(img_name, width, height);
            return;
        }
        responsefromprocessor().then(result=>{
            const foldername = path.join(__dirname,"../assets/thumb/");
            console.log(__dirname);
            console.log(foldername);
            var options = {
                root: path.join(__dirname,"../assets/thumb/")
            };
            const filesname = img_name + "_thumb.jpg";
            res.sendFile(filesname, options);
        });
    }
})

app.listen(port, ()=>{
    console.log(`server started at localhost:${port}`);
});

export default app;