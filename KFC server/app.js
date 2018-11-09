const express=require("express");
const products=require("./routes/products");
const details=require("./routes/details");

var app=express();
app.listen(3009);
app.use(express.static(__dirname+"/public"));
app.use("/products",products);
app.use("/details",details);
