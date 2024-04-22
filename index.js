// 1.import the express
const express =require('express')
const Food=require('./models')
const cors =require('cors')


// 2

const app=new express()

// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


// api to add data to db
app.post('/add',async(req,res)=>{
    const result=await new Food(req.body);
    result.save();
    res.send("data added")
})
// delete




// 4.create a localhost port
app.listen(8080,()=>{
    console.log("port is running at 8080")
})