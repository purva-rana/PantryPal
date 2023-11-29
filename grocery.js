// Sort table by the index of the column provided
// Compares string values to sort, use sortTable_Numbers to sort numerical values
function sortTable_String(table, index) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(table);
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("td")[index];
            y = rows[i + 1].getElementsByTagName("td")[index];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// Sorts tables by the index of the column provided
// Parses numerical values to sort, use sortTable_String to sort text
function sortTable_Numbers(table, index) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(table);
    switching = true;
    
    while (switching) {
        switching = false;
        rows = table.rows;
        
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = parseFloat(rows[i].getElementsByTagName("td")[index].innerHTML);
            y = parseFloat(rows[i + 1].getElementsByTagName("td")[index].innerHTML);
            
            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// Returns the type of item
function determineItemType(itemName) {   
    if(itemName.toLowerCase().includes("bread") || itemName.toLowerCase().includes("buns") || itemName.toLowerCase().includes("bun") || itemName.toLowerCase().includes("milk") || itemName.toLowerCase().includes("cheese") || itemName.toLowerCase().includes("butter") || itemName.toLowerCase().includes("egg") || itemName.toLowerCase().includes("paneer") || itemName.toLowerCase().includes("curd") || itemName.toLowerCase().includes("yoghurt") || itemName.toLowerCase().includes("pav"))
        return "Dairy, Bread and Eggs";

    else if(itemName.toLowerCase().includes("chicken") || itemName.toLowerCase().includes("fish") || itemName.toLowerCase().includes("mutton") || itemName.toLowerCase().includes("prawns") || itemName.toLowerCase().includes("crab") || itemName.toLowerCase().includes("lobster"))
        return "Meat and Seafood";

    else if(itemName.toLowerCase().includes("apple") || itemName.toLowerCase().includes("banana") || itemName.toLowerCase().includes("orange") || itemName.toLowerCase().includes("litchi") || itemName.toLowerCase().includes("pear") || itemName.toLowerCase().includes("cherry") || itemName.toLowerCase().includes("mango") || itemName.toLowerCase().includes("grapes") || itemName.toLowerCase().includes("berry") || itemName.toLowerCase().includes("guava") || itemName.toLowerCase().includes("fruit") || itemName.toLowerCase().includes("cherries"))
        return "Fresh Fruits";

    else
        return "More information needed to classify..."
}

// Add rows to table
function addRow() {
    var itemName = document.getElementById("itemName").value;
    var itemQuantity = document.getElementById("itemQuantity").value;
    var itemPrice = document.getElementById("itemPrice").value;

    // Get the table
    var table = document.getElementById("groceryTable");

    // Create a new row
    var newRow = table.insertRow(-1); // -1 appends the row at the last position

    // Insert cells with input values
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Set cell values
    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = itemName;
    cell3.innerHTML = itemQuantity;
    cell4.innerHTML = itemPrice;

    // Create a delete button and attach a click event
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<img src="images/trashCan.png" alt="Delete" class = "tiny-image">';
    deleteButton.classList.add("transparent-btn");

    deleteButton.onclick = function() {
        deleteRow(newRow);
    };

    // Append the delete button to the Actions column
    cell5.appendChild(deleteButton);

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";

}

function deleteRow(row) {
    var table = document.getElementById("groceryTable");
    var index = row.rowIndex;
    table.deleteRow(index);
}

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'root',
});

connection.connect((error) => {
    if(error){
        console.log('Error connecting to the MySQL Database');
        return;
    }
    console.log('Connection established sucessfully');
});
connection.end((error) => {
});