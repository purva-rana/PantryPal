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