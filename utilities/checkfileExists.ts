export function checkFileExists(
  name: string,
  wth: number,
  hght: number
): boolean {
  const path = require('path');
  const fs = require('fs');
  const foldername = path.join(__dirname, '../assets/thumb/');
  const filename = foldername + name + '_thumb_' + wth + '*' + hght + '.jpg';
  console.log('Path is');
  console.log(filename);
  if (fs.existsSync(filename)) {
    return true;
  } else {
    return false;
  }
}
