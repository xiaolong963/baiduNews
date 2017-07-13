var express = require('express');
var router = express.Router();

/* GET home page. */
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	database :'baidu'
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addNews', function(req, res, next) {
	var newsTitle = req.body.newsTitle;
	var newsContent = req.body.newsContent;
	var imgSrc = req.body.imgSrc;
	var newsFrom = req.body.newsFrom;
	var newsDate = req.body.newsDate;
	var newsTag = req.body.newsTag;
	//添加一条数据
	var sql = `insert into news (newsTitle,newsContent,imgSrc,newsFrom,newsDate,newsTag) 
		values ('${newsTitle}','${newsContent}','${imgSrc}','${newsFrom}','${newsDate}','${newsTag}')`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		res.send(req.body);
	});
});
router.get('/selectNews',function(req,res,next){
	var page = req.query.page;
	var pageNow = page-1;
	//每页显示8条数据
	var sql = `select * from news order by id desc limit ${pageNow*8},8`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		res.send(result);
	});
});
router.get('/selectCount',function(req,res,next){
	//查询总条数
	var sql = 'select * from news';
	con.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		res.send(result);
	});
});
router.get('/delNews',function(req,res,next){
	//删除一条数据
	var idNews = req.query.idNews;
	var sql = `delete from news where id=${idNews}`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		res.send('删除成功');
	});
});
//根据ID查询一条数据
router.get('/selectOneNews',function(req,res,next){
	var idNews = req.query.idNews;
	var sql = `select * from news where id=${idNews}`;
	con.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		res.send(result);
	});
});
//更新一条数据
router.post('/updateNews',function(req,res,next){
	var idNews = req.body.id;
	var newsTitle = req.body.newsTitle;
	var newsContent = req.body.newsContent;
	var imgSrc = req.body.imgSrc;
	var newsFrom = req.body.newsFrom;
	var newsDate = req.body.newsDate;
	var newsTag = req.body.newsTag;
	var sql = `update news set newsTitle='${newsTitle}',newsContent='${newsContent}',imgSrc='${imgSrc}',
	newsDate = '${newsDate}',newsTag='${newsTag}' where id='${idNews}'`;
	console.log(sql);
	con.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		res.send('修改成功');
	});
});
//con.end();
module.exports = router;
