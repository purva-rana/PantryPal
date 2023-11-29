<?php
$servername = "localhost";
$username = "varun";
$password = "root";
$dbname = "PantryPal";

echo "Here inside";

// Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
$conn = new mysqli('localhost', 'root', '', 'test');

// Check connection
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection failed: " . $conn->connect_error);
} 

echo "Connected successfully";

// Close the connection

// if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Insert Function
    // if (isset($_POST["insert"])) {
        // Retrieve data from the form
        $column1_value = $_POST["itemName"];
        $column2_value = $_POST["itemQuantity"];
        $column2_value = $_POST["itemPrice"];
        
        // SQL query to insert a row
        // $sql = "INSERT INTO GroceryList (Name, Quantity, Price) VALUES ('$column1_value', '$column2_value', '$column3_value)";

        $stmt = $conn->prepare("INSERT INTO GroceryList (Name, Quantity, Price) VALUES ('$column1_value', '$column2_value', '$column3_value'");
        $stmt->bind_param("ssi", $column1_value, $column2_value, $column3_value);
        $execval = $stmt->execute();

        echo $execval;

        echo "done lmao";

        // if ($conn->query($sql) === TRUE) {
        //     echo "Row added successfully";
        // } else {
        //     echo "Error: " . $sql . "<br>" . $conn->error;
        // }
    // }

   // Delete Function
//    if (isset($_POST["delete"])) {
//     // Make sure you sanitize and validate the input to prevent SQL injection
//     $id_to_delete = $_POST["delete"];

//     // SQL query to delete the row with the specified id
//     $sql = "DELETE FROM GroceryList WHERE SrNo = $id_to_delete";

//     if ($conn->query($sql) === TRUE) { 
//         echo "Row with ID $id_to_delete deleted successfully";
//     } else {
//         echo "Error: " . $sql . "<br>" . $conn->error;
//     }
// }

    // Close the connection
    $conn->close();
// }
?>
