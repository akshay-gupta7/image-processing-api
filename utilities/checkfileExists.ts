

export function checkFileExists(name: String){
    const fs = require("fs");
    const path = "./assets/thumb/" + name +".jpg";
    //console.log(path);
    if(fs.existsSync(path)){
        return true;
    }
    else{
        return false;
    }
}
