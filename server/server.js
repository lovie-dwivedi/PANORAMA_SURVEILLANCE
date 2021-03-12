//import webpack from 'webpack';
//import webpackMiddleware from 'webpack-dev-middleware';
//import webpackConfig from '../webpack.config.js';
const express = require('express');
const mysql = require('mysql');
//import bodyParser from 'body-parser';

const OlympicWinnersService = require('./olympicWinnersService');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'lucky1@',
    database : 'sample_data'
  });

const app = express();
//app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get("/api",function(req,res){
    //connection.connect();

    connection.query('SELECT * FROM olympic_winners', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
      //console.log(results)
    });

    //connection.end();
})
    
app.get("/apifilter",function(req,res){
  //connection.connect();
  //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
  //console.log(">>>"+req.params.country)
  //console.log(req.query.country)
  const val = req.query.country
  connection.query(`SELECT * FROM olympic_winners where country="${val}"`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    //console.log(results)
    });
    //console.log(">>>")
    //connection.end();
})

app.get("/getCountry",function(req,res){
  //connection.connect();
  
  connection.query('SELECT COUNT(Country) as count, Country FROM olympic_winners GROUP BY Country ORDER BY COUNT(Country) DESC', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    //console.log(results)
    });

    //connection.end();
})

app.get("/getName",function(req,res){
  //connection.connect();
  
  connection.query('SELECT COUNT(athlete) as count, athlete FROM olympic_winners GROUP BY athlete ORDER BY COUNT(athlete) DESC', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    //console.log(results)
    });

    //connection.end();
})

app.post('/olympicWinners', function (req, res) {
    OlympicWinnersService.getData(req.body, (rows, lastRow) => {
        res.json({rows: rows, lastRow: lastRow});
    });
});

app.listen(4007, () => {
    console.log('Started on localhost:4007');
});