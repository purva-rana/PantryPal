function determineItemType(itemName)
{   
    if(itemName.toLowerCase().includes("bread") || itemName.toLowerCase().includes("buns") || itemName.toLowerCase().includes("bun") || itemName.toLowerCase().includes("milk") || itemName.toLowerCase().includes("cheese") || itemName.toLowerCase().includes("butter") || itemName.toLowerCase().includes("egg") || itemName.toLowerCase().includes("paneer") || itemName.toLowerCase().includes("curd") || itemName.toLowerCase().includes("yoghurt") || itemName.toLowerCase().includes("pav"))
        return "Dairy, Bread and Eggs";

    else if(itemName.toLowerCase().includes("chicken") || itemName.toLowerCase().includes("fish") || itemName.toLowerCase().includes("mutton") || itemName.toLowerCase().includes("prawns") || itemName.toLowerCase().includes("crab") || itemName.toLowerCase().includes("lobster"))
        return "Meat and Seafood";

    else if(itemName.toLowerCase().includes("apple") || itemName.toLowerCase().includes("banana") || itemName.toLowerCase().includes("orange") || itemName.toLowerCase().includes("litchi") || itemName.toLowerCase().includes("pear") || itemName.toLowerCase().includes("cherry") || itemName.toLowerCase().includes("mango") || itemName.toLowerCase().includes("grapes") || itemName.toLowerCase().includes("berry") || itemName.toLowerCase().includes("guava") || itemName.toLowerCase().includes("fruit") || itemName.toLowerCase().includes("cherries"))
        return "Fresh Fruits";

    else if(itemName.toLowerCase().includes("vegetable") || itemName.toLowerCase().includes("carrot") || itemName.toLowerCase().includes("lady finger") || itemName.toLowerCase().includes("potato") || itemName.toLowerCase().includes("tomato") || itemName.toLowerCase().includes("onion") || itemName.toLowerCase().includes("lemon") || itemName.toLowerCase().includes("lime") || itemName.toLowerCase().includes("gourd") || itemName.toLowerCase().includes("pumpkin") || itemName.toLowerCase().includes("chili") || itemName.toLowerCase().includes("capsicum") || itemName.toLowerCase().includes("eggplant") || itemName.toLowerCase().includes("cauliflower") || itemName.toLowerCase().includes("cabbage") || itemName.toLowerCase().includes("lettuce") || itemName.toLowerCase().includes("corn") || itemName.toLowerCase().includes("spinach") || itemName.toLowerCase().includes("coconut") || itemName.toLowerCase().includes("beans") || itemName.toLowerCase().includes("broccoli") || itemName.toLowerCase().includes("mushroom") || itemName.toLowerCase().includes("cucumber") || itemName.toLowerCase().includes("radish") || itemName.toLowerCase().includes("drumstick") || itemName.toLowerCase().includes("coccinia") || itemName.toLowerCase().includes("beetroot") || itemName.toLowerCase().includes(" bell pepper") || itemName.toLowerCase().includes("zucchini") || itemName.toLowerCase().includes("colocasia"))
        return "Fresh Vegetables";

    else
        return "More information needed to classify..."
}

function toTitleCase(str) 
{
    return str.replace(/\w\S*/g, function (txt) 
    {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function addItem() 
{
    var itemNameInput = document.getElementById("itemName");
    var quantityInput = document.getElementById("quantity");
    var expiryDateInput = document.getElementById("expiryDate");

    if (!itemNameInput.value || !quantityInput.value || !expiryDateInput.value) 
    {
        alert("Please fill in all required fields.");
        return;
    }

    var table = document.getElementById("pantryTable");
    var row = table.insertRow(-1); // -1 appends the row at the end

    var itemName = itemNameInput.value;
    var quantity = quantityInput.value;
    var expiryDate = expiryDateInput.value;

    var itemNameTitleCase = toTitleCase(itemName);

    var itemType = determineItemType(itemName);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = itemNameTitleCase;
    cell3.innerHTML = itemType;
    cell4.innerHTML = quantity;
    cell5.innerHTML = expiryDate;
    cell6.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    document.getElementById("itemName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("expiryDate").value = "";
}

function deleteRow(btn) 
{
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}