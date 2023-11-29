const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'TheVictus',
    user: 'varun',
    password: 'root',
    database: 'PantryPal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.query('SELECT * FROM GroceryList', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});
