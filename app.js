const express= require('express');
const app=express();
app.use(express.static('public'))
const userRouter=require('./routers/router');


app.set("view engine","ejs")    

app.use(userRouter)



app.listen(3000,()=>{
    console.log('3000 portunda ayaga kalktım')
})