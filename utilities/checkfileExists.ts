

export function checkFileExists(name: String){
    const path = require("path");
    const fs = require("fs");
    const foldername = path.join(__dirname,"../assets/thumb/");
    const filename = foldername  + name + "_thumb.jpg";
    console.log("Path is");
    console.log(filename);
    if(fs.existsSync(filename)){
        return true;
    }
    else{
        return false;
    }
}
