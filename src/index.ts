import express from 'express';
import routes from './routes';
import { checkFileExists } from '../utilities/checkfileExists';
import { processImage } from '../utilities/imageprocess';

//import { runInNewContext } from 'vm';
const app = express();
const port = 3048;
import path = require('path');

app.get('/api', (req, res) => {
  res.send('Hello World 4');
});

app.use('/api/images', routes);

/*
app.get('/api/images', (req, res) => {
  let img_name = new String();
  let width = new Number();
  let height = new Number();
  if (req.query.filename) {
    img_name = String(req.query.filename);
  } else {
    img_name = 'empty';
    res.send('Filename is empty, please enter a filename');
  }
  width = Number(req.query.width);
  height = Number(req.query.height);
  const check = checkFileExists(img_name);
  //res.send(check);
  if (check == false) {
    const responsefromprocessor = async (): Promise<void> => {
      await processImage(img_name, width, height);
      return;
    };
    responsefromprocessor().then((result) => {
      const foldername = path.join(__dirname, '../assets/thumb/');
      console.log(__dirname);
      console.log(foldername);
      const options = {
        root: path.join(__dirname, '../assets/thumb/')
      };
      const filesname = img_name + '_thumb.jpg';
      res.sendFile(filesname, options);
    });
  } else {
    console.log('File already exists in thumb folder');
    const foldername = path.join(__dirname, '../assets/thumb/');
    const options = {
      root: path.join(__dirname, '../assets/thumb/')
    };
    const filesname = img_name + '_thumb.jpg';
    res.sendFile(filesname, options);
    //res.send("File does already exist");
  }
});

*/

app.listen(port, () => {
  console.log(`server started at localhost - ${port}`);
});

export default app;
