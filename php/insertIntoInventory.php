<?php
    $name = $_POST['name'];
    $quantity = $_POST['qty'];
    $date = $_POST['date'];
    $type = $_POST['type'];
	// Database connection
	$conn = new mysqli('localhost','root','','pantrypal');

    // Check connection
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	}
    else {
        $conn->set_charset("utf8mb4");

        $stmt = $conn->prepare("INSERT INTO PantryInventory (Name, Type, Quantity, Expiry_Date) VALUES (?, ?, ?, ?);");
		$stmt->bind_param("sssi", $name, $type, $quantity, $date);
        echo $stmt->sqlstate . ": " . $stmt->error;
        $execVal = $stmt->execute();
		$stmt->close();
		$conn->close();
        
		echo "Entering successfull...";
        
        error_reporting(E_ALL);
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit;
        
	}
?>