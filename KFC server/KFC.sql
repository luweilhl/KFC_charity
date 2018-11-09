DROP DATABASE IF EXISTS mini;
#创建数据库 mini
CREATE DATABASE mini CHARSET=UTF8;
USE mini;
-- #创建用户名 mini_user(针对登录)  后四项为冗余列
-- CREATE TABLE mini_user(
--     uid INT PRIMARY KEY AUTO_INCREMENT,
--     uname VARCHAR(25),
--     upwd VARCHAR(32),
--     i1 INT,
--     i2 INT,
--     v1 VARCHAR(255),
--     v2 VARCHAR(255)
-- );
-- INSERT INTO mini_user VALUES(null,'Tom',md5('123'),'','','','');
-- INSERT INTO mini_user VALUES(null,'Jerry',md5('123'),'','','','');
-- INSERT INTO mini_user VALUES(null,'Lucy',md5('123'),'','','','');
#商品信息
CREATE TABLE products(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255),
    title VARCHAR(255),
    gold INT,
    price DECIMAL,
    num INT,
    selected BOOLEAN
);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/1.jpg','来自捐一元受助地的爱心土豆','1000','27',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/2.jpg','云南直供贡山品质羊肚菌','3000','199',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/3.jpg','云南直供福贡草果','2500','89',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/4.jpg','云南直供红河胭脂红米','1000','29',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/5.jpg','小候鸟原创绘画印花环保帆布袋','2000','49',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/6.jpg','红心女孩酷趣形象手机壳','1000','39',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/7.jpg','红心女孩印花休闲帆布袋','1000','49',1,false);
INSERT INTO products VALUES(null,'http://127.0.0.1:3009/img/products/8.jpg','红心女孩印花收纳抽绳包','1000','49',1,false);

#商品详情
CREATE TABLE details(
    did INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    img VARCHAR(255),
    title VARCHAR(255),
    gold INT,
    price DECIMAL,
    detail VARCHAR(255),
    num INT,
    selected BOOLEAN
);
INSERT INTO details VALUES(null,1,'http://127.0.0.1:3009/img/product-details/1/banner1.jpg','来自捐一元受助地的爱心土豆','1000','27','http://127.0.0.1:3009/img/product-details/1/detail.jpg',1,false);
INSERT INTO details VALUES(null,1,'http://127.0.0.1:3009/img/product-details/1/banner2.jpg','来自捐一元受助地的爱心土豆','1000','27','http://127.0.0.1:3009/img/product-details/1/detail.jpg',1,false);
INSERT INTO details VALUES(null,1,'http://127.0.0.1:3009/img/product-details/1/banner3.jpg','来自捐一元受助地的爱心土豆','1000','27','http://127.0.0.1:3009/img/product-details/1/detail.jpg',1,false);

INSERT INTO details VALUES(null,2,'http://127.0.0.1:3009/img/product-details/2/banner1.jpg','云南直供贡山品质羊肚菌','3000','199','http://127.0.0.1:3009/img/product-details/2/detail.jpg',1,false);
INSERT INTO details VALUES(null,2,'http://127.0.0.1:3009/img/product-details/2/banner2.jpg','云南直供贡山品质羊肚菌','3000','199','http://127.0.0.1:3009/img/product-details/2/detail.jpg',1,false);
INSERT INTO details VALUES(null,2,'http://127.0.0.1:3009/img/product-details/2/banner3.jpg','云南直供贡山品质羊肚菌','3000','199','http://127.0.0.1:3009/img/product-details/2/detail.jpg',1,false);

INSERT INTO details VALUES(null,3,'http://127.0.0.1:3009/img/product-details/3/banner1.jpg','云南直供福贡草果','2500','89','http://127.0.0.1:3009/img/product-details/3/detail.jpg',1,false);
INSERT INTO details VALUES(null,3,'http://127.0.0.1:3009/img/product-details/3/banner2.jpg','云南直供福贡草果','2500','89','http://127.0.0.1:3009/img/product-details/3/detail.jpg',1,false);
INSERT INTO details VALUES(null,3,'http://127.0.0.1:3009/img/product-details/3/banner3.jpg','云南直供福贡草果','2500','89','http://127.0.0.1:3009/img/product-details/3/detail.jpg',1,false);

INSERT INTO details VALUES(null,4,'http://127.0.0.1:3009/img/product-details/4/banner1.jpg','云南直供红河胭脂红米','1000','29','http://127.0.0.1:3009/img/product-details/4/detail.jpg',1,false);
INSERT INTO details VALUES(null,4,'http://127.0.0.1:3009/img/product-details/4/banner2.jpg','云南直供红河胭脂红米','1000','29','http://127.0.0.1:3009/img/product-details/4/detail.jpg',1,false);
INSERT INTO details VALUES(null,4,'http://127.0.0.1:3009/img/product-details/4/banner3.jpg','云南直供红河胭脂红米','1000','29','http://127.0.0.1:3009/img/product-details/4/detail.jpg',1,false);

INSERT INTO details VALUES(null,5,'http://127.0.0.1:3009/img/product-details/5/banner1.jpg','小候鸟原创绘画印花环保帆布袋','2000','49','http://127.0.0.1:3009/img/product-details/5/detail.jpg',1,false);
INSERT INTO details VALUES(null,5,'http://127.0.0.1:3009/img/product-details/5/banner2.jpg','小候鸟原创绘画印花环保帆布袋','2000','49','http://127.0.0.1:3009/img/product-details/5/detail.jpg',1,false);
INSERT INTO details VALUES(null,5,'http://127.0.0.1:3009/img/product-details/5/banner3.jpg','小候鸟原创绘画印花环保帆布袋','2000','49','http://127.0.0.1:3009/img/product-details/5/detail.jpg',1,false);

INSERT INTO details VALUES(null,6,'http://127.0.0.1:3009/img/product-details/6/banner1.jpg','红心女孩酷趣形象手机壳','1000','39','http://127.0.0.1:3009/img/product-details/6/detail.jpg',1,false);
INSERT INTO details VALUES(null,6,'http://127.0.0.1:3009/img/product-details/6/banner2.jpg','红心女孩酷趣形象手机壳','1000','39','http://127.0.0.1:3009/img/product-details/6/detail.jpg',1,false);
INSERT INTO details VALUES(null,6,'http://127.0.0.1:3009/img/product-details/6/banner3.jpg','红心女孩酷趣形象手机壳','1000','39','http://127.0.0.1:3009/img/product-details/6/detail.jpg',1,false);

INSERT INTO details VALUES(null,7,'http://127.0.0.1:3009/img/product-details/7/banner1.jpg','红心女孩印花休闲帆布袋','1000','49','http://127.0.0.1:3009/img/product-details/7/detail.jpg',1,false);
INSERT INTO details VALUES(null,7,'http://127.0.0.1:3009/img/product-details/7/banner2.jpg','红心女孩印花休闲帆布袋','1000','49','http://127.0.0.1:3009/img/product-details/7/detail.jpg',1,false);
INSERT INTO details VALUES(null,7,'http://127.0.0.1:3009/img/product-details/7/banner3.jpg','红心女孩印花休闲帆布袋','1000','49','http://127.0.0.1:3009/img/product-details/7/detail.jpg',1,false);

INSERT INTO details VALUES(null,8,'http://127.0.0.1:3009/img/product-details/8/banner1.jpg','红心女孩印花收纳抽绳包','1000','49','http://127.0.0.1:3009/img/product-details/8/detail.jpg',1,false);
INSERT INTO details VALUES(null,8,'http://127.0.0.1:3009/img/product-details/8/banner2.jpg','红心女孩印花收纳抽绳包','1000','49','http://127.0.0.1:3009/img/product-details/8/detail.jpg',1,false);
INSERT INTO details VALUES(null,8,'http://127.0.0.1:3009/img/product-details/8/banner3.jpg','红心女孩印花收纳抽绳包','1000','49','http://127.0.0.1:3009/img/product-details/8/detail.jpg',1,false);