export function checkFileExistsinFull(name: String){
    const fs = require("fs");
    const path = "./assets/full/" + name +".jpg";
    console.log(path);
    if(fs.existsSync(path)){
        return true;
    }
    else{
        return false;
    }
}