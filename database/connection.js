const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'listings',
});

connection.connect();

// create function that adds
// small img large img med img img url img description after
const createId = () => {
  for (let i = 1; i < 101; i + 1) {
    // do aquery
    const string = String(i);
    const query = `insert into galleries (url) values (/page/${string})`;

    connection.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  }
};
exports.createId = createId;
