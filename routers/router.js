const express=require('express');
const router=express.Router();
const db =require('../data/db');




router.use("/products/:id",async(req,res)=>{
    try {
        const [product,] =await db.execute("select * from products where id=?",[req.params.id])
        res.render("urunDetails",{
            urun:product[0]
        })
        } catch (error) {
            console.log(error);
        }
});
router.use("/products",async(req,res)=>{

    try {
    const [products,] =await db.execute("select * from products")
    res.render("urunler",{
        urunler:products
    })
    } catch (error) {
        console.log(err);
    }



});
router.use("/",(req,res)=>{
    
    res.render("index")

});
module.exports = router;