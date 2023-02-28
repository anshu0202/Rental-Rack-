import express from "express"

const app=express();
const PORT=5000

app.get("/",(req,res)=>{
    res.send("Hi from backend")
})

app.listen(PORT, ()=>{
    console.log(`Server has been running on the port ${PORT}`)
})

