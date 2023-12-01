const express = require('express')
const app = express()
const port = 3000
const path =require('path')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'news'
});
connection.connect();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/index.html'))

})
app.get('/addnews', function(req, res) {
  var untitre=req.query.letitre;
  var unedescription=req.query.ladescription;
  var sql="insert into actualite(titre,description) values(?,?)";
  connection.query(sql,[untitre,unedescription], function (error, results, fields) {
   res.send(results)
  
})});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname,'views/add.html'))

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})