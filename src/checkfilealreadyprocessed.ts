export function checkFileExistsinFull(name: String){
    const fs = require("fs");
    const path = "./assets/thumb/" + name +"_thumb.pg";
    console.log(path);
    if(fs.existsSync(path)){
        return true;
    }
    else{
        return false;
    }
}