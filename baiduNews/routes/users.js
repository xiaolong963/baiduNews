var express = require('express');
var router = express.Router();
var url = require('url');
var md5 = require('md5');

/* GET users listing. */
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	database :'baidu'
});
router.get('/', function(req, res, next) {
	var usersName = req.query.usersName;
	var sql = `update users set state = "离线" where usersName = '${usersName}'`;
	con.query(sql,function(err,result){
		res.render('users',{});
	});
});
router.post('/', function(req, res, next) {
	var sql = `update users set state = "在线" where usersName = '${req.body.usersName}'`;
	console.log(sql);
	con.query(sql,function(err,result){
		res.render('users',{usersName:req.body.usersName});
	});
});
router.get('/selectNews', function(req, res, next) {
	var sql = 'select * from news ';
	con.query(sql,function(err,result){
		res.send(result);
	});
});
router.get('/selectTag', function(req, res, next) {
	var newsTag = req.query.newsTag;
	var sql = `select * from news where newsTag='${newsTag}'`;
	con.query(sql,function(err,result){
		res.send(result);
	});
});
/*router.get('/:newsTag', function(req, res, next) {
	var sql = `select * from news where newsTag='推荐'`;
	console.log(req.params.newsTag);
	con.query(sql,function(err,result){
		res.render('users',{});
	});
});*/
router.get('/login', function(req, res, next) {
	res.render('login',{});
});
router.post('/logins', function(req, res, next) {
	var usersName = req.body.usersName;
	var sql = `select * from users where usersName='${usersName}'`;
	con.query(sql,function(err,result){
		if(!err){
			if(result.length==0){
				res.send({rlt:0,msg:'用户名不存在，请先注册'});
			}else{
				res.send({rlt:1,result:result});
			}
			
		}else{
			console.log(err)
		}
		
	});
});
router.get('/register',function(req,res,next){
	res.render('register',{result:0});
});
router.get('/registerName',function(req,res,next){
	var registerName = req.query.registerName;
	var sql = `select * from users where usersName = '${registerName}'`;
	con.query(sql,function(err,result){
		res.send(result);
	});
});
router.post('/register',function(req,res,next){
	var usersName = req.body.usersName;
	var pwd = md5(req.body.pwd);
	console.log(pwd);
	var sql = `insert into users (usersName,password,state) values ('${usersName}','${pwd}','离线')`;
	con.query(sql,function(err,result){
		if(!err){
			res.render('register',{result:1});
		}
	});
});
module.exports = router;
