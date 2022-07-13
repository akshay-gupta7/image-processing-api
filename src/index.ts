import express from 'express';
import { runInNewContext } from 'vm';
const app = express();
const port = 3004;

app.get('/api', (req,res)=>{
    res.send("Hello World 4");
});

app.listen(port, ()=>{
    console.log(`server started at localhost:${port}`);
});