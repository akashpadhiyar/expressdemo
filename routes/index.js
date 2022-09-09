var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
connection.connect(function(err){
  if(!err){
    console.log('Connected to database');
  }else{
    console.log('Failed to connect to database');
  }
});


router.get('/form', function(req, res, next) {
  res.render('form');
});

router.post('/processing', function(req, res, next){
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = "Record Added";
  //console.log(a + b)
  //Query
  connection.query("insert into tbl_student (st_name,st_gender) values (?,?) ",[a,b],function(err,result,field){
    res.render('ans',{mya:a,myb:b,myc:c});
  });
 
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
module.exports = router;
