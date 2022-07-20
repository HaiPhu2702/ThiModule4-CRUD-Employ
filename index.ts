import express from 'express';
import bodyParser from "body-parser";
import  mongoose from "mongoose";
import employRouter from "./src/router/employ.router"
const port=8080;

mongoose.connect('mongodb://localhost:27017/ThiModule4').then(()=>{
    console.log("success")
}).catch((err)=>{throw err})



const app = express();

app.set('view engine', 'ejs');
app.set('views','./src/views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}))

app.use('/employ',employRouter);


app.listen(port,()=>{
    console.log("http://localhost:"+port)
})