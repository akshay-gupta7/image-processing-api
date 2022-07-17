import { checkFileExistsinFull } from "./checkfileExistsinfull";
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");



export function processImage(name: String, wth: Number, hght: Number){
    if(wth==0 || wth ==null || hght ==0 || hght == null){
        console.log("Make sure height and width are numbers greater than 0");
    }
    else{
        if(checkFileExistsinFull(name)==false)
        {
            console.log("File does not exist in folder");
            return "fail";
        }
        else{
            const sourcepath = "./assets/full/" + name +".jpg";
            const destpath = "./assets/thumb/" + name +"_thumb.jpg";
            //console.log(sourcepath);
            const resizedimage= async (sourcepath: String, wth: Number, hght: Number):Promise<string> =>{
                try{
                    console.log("here1");
                    await sharp(sourcepath).resize(wth,hght).toFormat("jpeg", {mozjpeg: true}).toFile(destpath);
                    console.log("successful");
                    return "succcess";
                }catch(error){
                    console.log(error);
                    console.log("fail");
                    return "fail";
                }
            };
            return resizedimage(sourcepath, wth, hght);
        }
    }
}