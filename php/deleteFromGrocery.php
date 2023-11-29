<?php
    $id = $_POST['inputID'];

	// Database connection
	$conn = new mysqli('localhost','root','','pantrypal');

    // Check connection
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	}
    else {
        $conn->set_charset("utf8mb4");

        $stmt = $conn->prepare("DELETE FROM GroceryList WHERE SrNo = ?");
		$stmt->bind_param("i", $id);
        echo $stmt->sqlstate . ": " . $stmt->error;
        $execVal = $stmt->execute();
		$stmt->close();
		$conn->close();
        
		echo "Deletion successfull...";
        
        error_reporting(E_ALL);
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit;
        
	}
?>