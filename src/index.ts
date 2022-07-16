import express from 'express';
import {checkFileExists} from './checkfileExists';
import { runInNewContext } from 'vm';
const app = express();
const port = 3016;

app.get('/api', (req,res)=>{
    res.send("Hello World 4");
});

app.get('/api/images', (req,res)=>{
    let empty:string = "empty";
    let img_name= new String();
    if(req.query.filename){
        img_name = String(req.query.filename);
    }
    else{
        img_name= empty;
    }
    const width = req.query.width;
    const height = req.query.height;
    const check = checkFileExists(img_name);
    console.log(check);
    res.send("Hi");
})

app.listen(port, ()=>{
    console.log(`server started at localhost:${port}`);
});

export default app;