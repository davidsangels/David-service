var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'listings'
});

connection.connect();

// create function that adds
// small img large img med img img url img description after ///s3 api





const createId = () => {

  for (var i = 1 ; i < 101 ; i ++){
    // do aquery
    let string = String(i)
    let query = `insert into galleries (url) values (/page/${string})`

   connection.query(query,(err,result)=>{
     if (err){
       throw err
     }
    console.log(result)
   })
  }
}
exports.createId = createId
