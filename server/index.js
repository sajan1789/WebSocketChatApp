


import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import connection from "./db/connection.js";


const app=express()
app.use(cookieParser());
dotenv.config()

 const PORT=process.env.PORT || 5050

 app.use(express.json()); 
 app.use("/api/auth", authRoutes);



 app.listen(PORT,()=>{
    connection()
     console.log(`App is  Running on port ${PORT}`)
 })