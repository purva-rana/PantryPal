<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pantry Inventory</title>
    <div class="sidenav">
        <a href="index.html">Home</a>
        <a href="groceryList.php">Grocery List</a>
        <a href="#">Pantry Inventory</a>
    </div>
    <link rel="stylesheet" href="sideNav.css">
    <link rel="stylesheet" href="grocery.css">
    <script src="pantryInvJS.js"></script>
    </head>
<body>

  <h1 align="center">Pantry Inventory</h1>
  <hr> <br><br>
  <br><br>

  
<form id="myForm" autocomplete="off" action="php/insertIntoInventory.php" method="post">

    <label for="itemName"></label>
    <input type="text" id="itemName" name="name" placeholder="Name">
    
    <label for="type"></label>
    <input type="text" id="foodType" name="type" placeholder="Type">
    
    <label for="quantity"></label>
    <input type="text" id="quantity" name="qty" placeholder="Quantity">
    
    <label for="expiryDate"></label>
    <input type="text" id="expiryDate" name="date" placeholder="Expiry Date">
    
    <button type="submit" class="button-9" onclick="addItem()">Add Item</button>

</form>

<br><br><br>

<form action="php/deleteFromInventory.php" method="post">
    
    <label for="srno"></label>
    <input type="text" name="inputID" id="srno" placeholder="Delete SrNo.:">
    
    <button type="submit" class="button-9">Delete</button>
    
</form>

<br><br><br>

<form action="php/updateInInventory.php" method="post">
    
    <label for="itemName"></label>
    <input type="text" name="name" id="itemName" placeholder="Name">

    <label for="itemType"></label>
    <input type="text" name="type" id="itemType" placeholder="Type">
    
    <label for="expiryDate"></label>
    <input type="text" name="qty" id="itemQuantity" placeholder="Quantity">
    
    <label for="itemQuantity"></label>
    <input type="text" name="Date" id="expiryDate" placeholder="Expiry Date">

    <label for="srno"></label>
    <input type="text" name="inputID" id="srno" placeholder="Update SrNo.:">

    <button type="submit" class="button-9">Update</button>
  
</form>
  
  
  
  
  
  

  <br><br><br><br><br>
  
  <table border="1" id="pantryTable" class="center">
    <tr>
        <th>Sr No.</th>
        <th>Item name</th>
        <th>Item type</th>
        <th>Quantity</th>
        <th>Expiry Date</th>
    </tr>

    <?php
        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'pantrypal');

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch records from the database
        $sql = "SELECT * FROM PantryInventory";
        $result = $conn->query($sql);

        // Close the connection
        $conn->close();

        // Check if there are records
        if ($result->num_rows > 0) {
                
                // Output data of each row
                while ($row = $result->fetch_assoc()) {
                    
                    echo '<tr>';
                        echo '<td>' . $row['SrNo'] . '</td>';
                        echo '<td>' . $row['Name'] . '</td>';
                        echo '<td>' . $row['Type'] . '</td>';
                        echo '<td>' . $row['Quantity'] . '</td>';
                        echo '<td>' . $row['Expiry_Date'] . '</td>';
                        echo '</tr>';
                    }
                    
                    echo '</table>';
                } else {
                    echo "No records found";
                }
        
        ?>
    
    
    
    
  </table>

</body>
</html>