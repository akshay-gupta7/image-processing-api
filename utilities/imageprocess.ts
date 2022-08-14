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
    hght < 0
  ) {
    console.log('Make sure height and width are numbers greater than 0');
    return Promise.resolve('fail');
  } else {
    if (checkFileExistsinFull(name) == false) {
      console.log('File does not exist in folder');
      return Promise.resolve('fail');
    } else {
      const sourcepath = './assets/full/' + name + '.jpg';
      const destpath = './assets/thumb/' + name + '_thumb_' + wth + "*" + hght + ".jpg" ;
      //console.log(sourcepath);
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
            .toFile(destpath);
          console.log('successful');
          return 'succcess';
        } catch (error) {
          console.log(error);
          console.log('fail');
          return 'fail';
        }
      };

      return Promise.resolve(resizedimage(sourcepath, wth, hght));
      //return values;
    }
  }
}
