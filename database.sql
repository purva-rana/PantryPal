CREATE DATABASE PantryPal;
use PantryPal;

CREATE TABLE GroceryList (
    SrNo int AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255),
    Quantity varchar(50),
    Price int
);

CREATE TABLE RecipeManager (
    Name varchar(255),
    Ingredients text,
    Recipe text
);

CREATE TABLE PantryInventory (
    SrNo int AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255),
    Type varchar(255),
    Quantity varchar(50),
    Expiry_Date Date
);

CREATE TABLE MedicineInventory (
    SrNo int AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255),
    UsedFor varchar(255),
    Quantity varchar(50),
    Expiry_Date Date
);

CREATE TABLE BudgetTracker (
    SrNo int AUTO_INCREMENT PRIMARY KEY,
    Name varchar(255),
    Quantity varchar(50),
    TotalPrice decimal(7, 2)
);

-- Sample data for GroceryList table
INSERT INTO GroceryList (Name, Quantity, Price) VALUES
('Milk', '1 gallon', 2),
('Eggs', '1 dozen', 1.5),
('Bread', '2 loaves', 3),
('Chicken Breast', '2 lbs', 8),
('Tomatoes', '1 lb', 1.5),
('Pasta', '1 lb', 2),
('Cheese', '8 oz', 4),
('Bananas', '1 bunch', 1),
('Cereal', '1 box', 3.5),
('Coffee', '1 lb', 5);

-- Sample data for RecipeManager table
INSERT INTO RecipeManager (Name, Ingredients, Recipe) VALUES
('Spaghetti Bolognese', 'Ground beef, Onion, Garlic, Tomatoes, Tomato paste, Spaghetti, Olive oil, Salt, Pepper', 'Cook ground beef with chopped onions and garlic. Add tomatoes, tomato paste, salt, and pepper. Simmer and serve over cooked spaghetti.'),
('Chicken Stir Fry', 'Chicken breast, Broccoli, Carrots, Bell peppers, Soy sauce, Ginger, Garlic, Rice', 'Stir fry sliced chicken with vegetables in soy sauce, ginger, and garlic. Serve over cooked rice.'),
('Vegetarian Pizza', 'Pizza dough, Tomato sauce, Mozzarella cheese, Bell peppers, Mushrooms, Olives, Basil', 'Spread tomato sauce on pizza dough, add mozzarella cheese, and top with sliced bell peppers, mushrooms, and olives. Bake until crust is golden. Garnish with fresh basil.'),
('Omelette', 'Eggs, Milk, Salt, Pepper, Cheese, Tomatoes, Spinach', 'Whisk eggs with milk, salt, and pepper. Pour into a hot pan, add cheese, tomatoes, and spinach. Cook until eggs are set.'),
('Cucumber Salad', 'Cucumbers, Tomatoes, Red onion, Feta cheese, Olive oil, Lemon juice, Salt, Pepper', 'Slice cucumbers, tomatoes, and red onions. Toss with crumbled feta cheese. Drizzle with olive oil and lemon juice. Season with salt and pepper.'),
('Pancakes', 'Flour, Milk, Eggs, Baking powder, Salt, Maple syrup', 'Mix flour, milk, eggs, baking powder, and salt. Cook spoonfuls of batter on a hot griddle until bubbles form. Flip and cook until golden. Serve with maple syrup.'),
('Fruit Smoothie', 'Banana, Strawberries, Blueberries, Yogurt, Milk, Honey', 'Blend banana, strawberries, blueberries, yogurt, milk, and honey until smooth. Pour into a glass and enjoy.'),
('Grilled Cheese Sandwich', 'Bread, Butter, Cheddar cheese', 'Butter bread slices, add cheddar cheese between slices. Grill until bread is toasted and cheese is melted.'),
('Chocolate Chip Cookies', 'Butter, Sugar, Brown sugar, Eggs, Vanilla extract, Flour, Baking soda, Salt, Chocolate chips', 'Cream butter, sugar, and brown sugar. Add eggs and vanilla extract. Mix in flour, baking soda, salt, and chocolate chips. Drop spoonfuls onto a baking sheet and bake until golden.'),
('Caprese Salad', 'Tomatoes, Fresh mozzarella, Basil, Balsamic glaze, Olive oil, Salt, Pepper', 'Slice tomatoes and fresh mozzarella. Arrange on a plate with fresh basil leaves. Drizzle with balsamic glaze and olive oil. Season with salt and pepper.');

-- Sample data for PantryInventory table
INSERT INTO PantryInventory (Name, Type, Quantity, Expiry_Date) VALUES
('Canned Soup', 'Canned Goods', '5 cans', '2023-03-01'),
('Rice', 'Grains', '2 lbs', '2024-01-15'),
('Olive Oil', 'Condiments', '1 bottle', '2023-08-10'),
('Peanut Butter', 'Spreads', '1 jar', '2023-06-20'),
('Canned Tuna', 'Canned Goods', '3 cans', '2023-04-30'),
('Honey', 'Condiments', '1 bottle', '2023-09-25'),
('Quinoa', 'Grains', '1 lb', '2023-11-05'),
('Dried Pasta', 'Pasta', '2 lbs', '2024-02-12'),
('Canned Tomatoes', 'Canned Goods', '4 cans', '2023-05-18'),
('Green Tea', 'Beverages', '1 box', '2023-10-30');

-- Sample data for MedicineInventory table
INSERT INTO MedicineInventory (Name, UsedFor, Quantity, Expiry_Date) VALUES
('Aspirin', 'Pain Relief', '1 box', '2023-07-15'),
('Cough Syrup', 'Cough and Cold', '2 bottles', '2023-09-20'),
('Antibiotics', 'Infections', '1 pack', '2023-11-10'),
('Allergy Medication', 'Allergies', '1 box', '2023-08-25'),
('Ibuprofen', 'Pain Relief', '1 bottle', '2023-06-30'),
('Multivitamins', 'Supplements', '1 bottle', '2024-04-05'),
('Band-Aids', 'First Aid', '1 box', '2023-12-15'),
('Thermometer', 'Medical Equipment', '1 unit', NULL),
('Cough Drops', 'Cough and Cold', '1 bag', '2023-10-10'),
('Prescription Medication', 'Prescription', '2 bottles', '2023-11-30');

-- Sample data for BudgetTracker table
INSERT INTO BudgetTracker (Name, Quantity, TotalPrice) VALUES
('Groceries', 'Weekly', 150.75),
('Eating Out', 'Monthly', 100.50),
('Household Supplies', 'Monthly', 50.25),
('Entertainment', 'Monthly', 75.00),
('Utilities', 'Monthly', 120.00),
('Personal Care', 'Monthly', 30.50),
('Transportation', 'Monthly', 80.25),
('Miscellaneous', 'Monthly', 40.00),
('Healthcare', 'Monthly', 60.75),
('Savings', 'Monthly', 200.00);
