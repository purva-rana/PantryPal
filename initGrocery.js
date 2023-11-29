const mysql = require('mysql2');
const express = require('express');

const app = express();

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




// Define a route to handle the query and render the HTML
app.get('/', async (req, res) => {
    try {
        // Perform your SELECT query
        const results = await pool.promise().query('SELECT * FROM your_table');

        // Render the HTML with the query results
        res.send(`
            <html>
                <head>
                    <title>MySQL Query Results</title>
                </head>
                <body>
                    <h1>MySQL Query Results</h1>
                    <table border="1">
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <!-- Add more columns as needed -->
                        </tr>
                        ${results[0].map(row => `<tr><td>${row.column1}</td><td>${row.column2}</td></tr>`).join('')}
                    </table>
                </body>
            </html>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
