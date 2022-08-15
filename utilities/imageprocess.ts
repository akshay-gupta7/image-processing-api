import { checkFileExistsinFull } from './checkfileExistsinfull';
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

export function processImage(
  name: string,
  wth: number,
  hght: number
): Promise<string> {
  if (
    wth == 0 ||
    wth == null ||
    hght == 0 ||
    hght == null ||
    wth < 0 ||
    hght < 0 ||
    isNaN(wth) ||
    isNaN(hght)
  ) {
    console.log('Make sure height and width are numbers greater than 0');
    return Promise.resolve('fail');
  } else {
    if (checkFileExistsinFull(name) == false) {
      console.log('File does not exist in folder');
      return Promise.resolve('filenotexist');
    } else {
      const path =require('path');
      const sourcepathfolder =  path.join(__dirname, '../assets/full/');
      const destpathfolder = path.join(__dirname, '../assets/thumb/');
      const sourcepathfile = sourcepathfolder + name + '.jpg';
      const destpathfile = destpathfolder + name + '_thumb_' + wth + '*' + hght + '.jpg';
      console.log('Source & Destination paths are');
      console.log(sourcepathfile);
      console.log(destpathfile);
      const resizedimage = async (
        sourcepath: string,
        wth: number,
        hght: number
      ): Promise<string> => {
        try {
          console.log('here1');
          await sharp(sourcepath)
            .resize(wth, hght)
            .toFormat('jpeg', { mozjpeg: true })
            .toFile(destpathfile);
          console.log('successful');
          return 'succcess';
        } catch (error) {
          console.log(error);
          console.log('fail');
          return 'fail';
        }
      };

      return Promise.resolve(resizedimage(sourcepathfile, wth, hght));
      //return values;
    }
  }
}
