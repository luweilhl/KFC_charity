const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/",(req,res)=>{
	var sql="SELECT `pid`, `img`, `title`,`gold`, `price`, `num`, `selected` FROM `products`";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
module.exports=router;