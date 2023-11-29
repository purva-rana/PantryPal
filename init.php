<?php
$servername = "TheVictus";
$username = "varun";
$password = "root";
$dbname = "PantryPal";

echo "Here inside";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "Connected successfully";

// Close the connection
$conn->close();
?>
