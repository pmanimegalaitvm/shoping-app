const mani=require('express');
const megalai=mani();

let a=['mani','megalai','manimegalai']
megalai.set('view engine','ejs')
megalai.get('/',(req,res)=>{
    res.render('htpage',{b:a})
})
megalai.listen(400,()=>console.log('html page is run'))