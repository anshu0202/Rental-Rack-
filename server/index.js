import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Route from './routes/route.js'
import { Connection } from "./database/db.js";


const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Route);



const PORT=8000
dotenv.config();

const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);

app.listen(PORT, ()=>{
    console.log(`Server has been running on the port ${PORT}`)
    
})

