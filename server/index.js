import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Connection } from "./database/db.js";


const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
// app.use('/', Router);



// app.get("/",(req,res)=>{
//     res.send("Hi from backend after deployment")
// })




const PORT=5000
dotenv.config();

const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);

app.listen(PORT, ()=>{
    console.log(`Server has been running on the port ${PORT}`)
    
})

