<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="grocery.js"></script>
    <link rel="stylesheet" href="grocery.css">
    <title>Grocery List</title>

    
</head>
<body>

    <div class="sidenav">
        <a href="index.html">Home</a>
        <a href="#">Grocery List</a>
        <a href="pantry_inventory.php">Pantry Inventory</a>
    </div>

    <h1 align = "center">Grocery List</h1>
    <hr> <br><br>
    
    <br><br>

    <form action="php/insertIntoGrocery.php" method="post">

        <label for="itemName"></label>
        <input type="text" name="name" id="itemName" placeholder="Name">
        <label for="itemQuantity"></label>
        <input type="text" name="qty" id="itemQuantity" placeholder="Quantity">
        <label for="itemPrice"></label>
        <input type="text" name="price" id="itemPrice" placeholder="Price">
        
        <button type="submit" class="button-9">Add</button>
        
    </form>

    <br>
    
    <form action="php/deleteFromGrocery.php" method="post">
        
        <label for="srno"></label>
        <input type="text" name="inputID" id="srno" placeholder="Delete SrNo.:">
        
        <button type="submit" class="button-9">Delete</button>
        
    </form>
    
    <br><br>

    <form action="php/updateInGrocery.php" method="post">
        
        <label for="itemName"></label>
        <input type="text" name="name" id="itemName" placeholder="Name">
        <label for="itemQuantity"></label>
        <input type="text" name="qty" id="itemQuantity" placeholder="Quantity">
        <label for="itemPrice"></label>
        <input type="text" name="price" id="itemPrice" placeholder="Price">
        <label for="srno"></label>
        <input type="text" name="inputID" id="srno" placeholder="Update SrNo.:">
        
        <button type="submit" class="button-9">Update</button>
        
    </form>
    
    <br>

    <table class="center styled-table" id = "groceryTable">
        <tr>
            <th width = "50px"> 
                <button class = "headerButtons" onclick="sortTable_String('groceryTable', 0)">S.No.</button></th>
            <th width = "150px">
                <button class = "headerButtons" onclick="sortTable_String('groceryTable', 1)">Name</button></th>
            <th width = "75px"> 
                <button class = "headerButtons" onclick="sortTable_Numbers('groceryTable', 2)">Quantity</button></th>
            <th width = "100px">
                <button class = "headerButtons" onclick="sortTable_Numbers('groceryTable', 3)">Price</button></th>
        </tr>

        <?php
            // Database connection
            $conn = new mysqli('localhost', 'root', '', 'pantrypal');

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Fetch records from the database
            $sql = "SELECT * FROM GroceryList";
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
                        echo '<td>' . $row['Quantity'] . '</td>';
                        echo '<td>' . $row['Price'] . '</td>';
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