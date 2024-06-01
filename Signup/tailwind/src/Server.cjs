/* eslint-disable no-undef */
const express = require("express")
const http = require("http")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const mongoURI = "mongodb://localhost:27017/React"
const port = 5000
const code = 200
const codel = "OK"
const app = express()

app.use(express.json())
app.use(bodyParser.json({urlencoded:"true"}))
app.use(cors())

const signUpSchema = new mongoose.Schema({
     firstname:{
       type:String
     },
     lastname:{
      type:String
     },
     email:{
        type:String,
        unique:true
     }, 

     password:{
        type:String
    }

})
const signUp = mongoose.model("Reactut",signUpSchema)

mongoose.connect(`${mongoURI}`).then (()=>{
console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log({error:" ERROR",err})
})

app.post('/sign', async(req,res)=>{

const {fname,lname,email,password} = req.body
const encryptPassword =  bcrypt.hash(password,10)

try{

const oldSignee = await signUp.findOne({email})
if (oldSignee){
    res.send({message:"User exists Log in Instead"})
}else{
    
        await signUp.create({
            fname,
            lname,
            email,
            password : encryptPassword
        })
        res.send({status:`${code} ${codel}`})
    
   

    }
} catch(err){
    console.warn("error")
}


})

app.post('/login',async(req,res)=>{
    try{

        const check = await signUp.findOne({ email:req.body.email})
        if(!check){
       res.send("Email not Registered")
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password,check.password)
        if(!isPasswordMatch){
            res.send({message:"wrong password"})
        }
        else{
            res.redirect("/")
        }
    }catch(err){
      res.send({message:"Wrong Details"})
    }
    
})
http.createServer(app).listen(()=>{
console.log(`Listening on ${port}`);
})