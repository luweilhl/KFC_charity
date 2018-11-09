const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/",(req,res)=>{
    // var pid=req.query.pid;
	var sql="SELECT `pid`, `img`, `title`,`gold`, `price`, `num`, `selected` FROM `products`";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		//obj=result;
		res.send(result);
	});
});
module.exports=router;