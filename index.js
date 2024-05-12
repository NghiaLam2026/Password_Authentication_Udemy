//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const user = express();
const port = 3000;

var authorize = false
user.use(bodyParser.urlencoded({extended: true}))

function password_check(req, res, next){
    const password = req.body["password"]
    if(password == "campingwithme"){
        authorize = true;
    }
    next();
}
user.use(password_check)



user.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

user.listen(port, () => {
    console.log(`The server is hosted at port ${port}`)
})

user.post("/check", (req, res) => {
    if(authorize){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.send(`This is the incorrect password. Please try again!`);
    }
})