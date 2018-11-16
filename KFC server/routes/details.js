const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/",(req,res)=>{
	var pid=req.query.pid;
	var sql="SELECT `did`, `pid`, `img`, `title`, `gold`,`price`, `detail`, `num`, `selected` FROM `details` WHERE pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
module.exports=router;