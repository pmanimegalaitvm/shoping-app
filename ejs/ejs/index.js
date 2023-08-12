const express = require('express');
const app = express();
let a ='mani'
app.set('view engine','ejs')
app.get('/basic',(req,res)=>{
    res.render('basic',{b:a});
})

app.listen(500,()=>console.log('running'))