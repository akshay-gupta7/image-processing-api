import express from 'express';
import { checkFileExists } from '../utilities/checkfileExists';
import { processImage } from '../utilities/imageprocess';

const routes = express.Router();
//const port = 3028;
import path = require('path');

routes.get('/', (req, res): void => {
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

  export default routes;