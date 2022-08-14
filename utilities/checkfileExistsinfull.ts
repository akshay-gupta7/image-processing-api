export function checkFileExistsinFull(name: String) {
  const path = require('path');
  const foldername = path.join(__dirname, '../assets/full/');
  const fs = require('fs');
  const filename = foldername + name + '.jpg';
  //console.log(path);
  if (fs.existsSync(filename)) {
    return true;
  } else {
    return false;
  }
}
