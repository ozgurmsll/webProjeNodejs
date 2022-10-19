const express= require('express');
const router = require('./routers/router');
const app=express();
app.use(express.static('public'))
const userRouter=require('./routers/router');


app.set("view engine","ejs")    

app.use(router)



app.listen(3000,()=>{
    console.log('3000 portunda ayaga kalktım')
})