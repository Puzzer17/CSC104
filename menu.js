// menu.js

// Menu data structure
const menuData = {
    breakfast: [
        { name: "Pancakes", description: "Stack of fluffy pancakes with maple syrup", price: 8.99, image: "images/Breakfast/pancakes.jpg" },
        { name: "French Toast", description: "Classic French toast with powdered sugar", price: 9.99, image: "images/Breakfast/french_toast.jpg" },
        { name: "Omelette", description: "Three-egg omelette with cheese and vegetables", price: 10.99, image: "images/Breakfast/omelette.jpg" },
        { name: "Bacon Croissant", description: "Buttery croissant with crispy bacon", price: 7.99, image: "images/Breakfast/bacon_croissant.jpg" },
        { name: "Ham Croissant", description: "Flaky croissant filled with ham and cheese", price: 7.99, image: "images/Breakfast/ham_croissant.jpg" },
        { name: "Breakfast", description: "Sausage, egg, and cheese with a hashbrown crust", price: 12.99, image: "images/Breakfast/breakfast_burrito.jpg" }
    ],
    lunch: [
        { name: "Hot Dogs", description: "Classic hot dogs with your choice of toppings", price: 6.99, image: "images/Lunch/hotdogs.jpg" },
        { name: "Panini", description: "Italian-style grilled sandwich", price: 10.99, image: "images/Lunch/panini.jpg" },
        { name: "Pizza Slice", description: "New York-style pizza slice", price: 4.99, image: "images/Lunch/pizza.jpg" },
        { name: "Cobb Salad", description: "Fresh salad with grilled chicken and bacon", price: 12.99, image: "images/Lunch/salad.jpg" },
        { name: "Spicy Tofu Sandwich", description: "Toasted sandwich with spiced tofu, tomatoes, onions, and cilantro", price: 11.99, image: "images/Lunch/sandwich1.jpg" },
		{ name: "Veggie Delight Sandwich", description: "Whole grain toast with avocado, cucumber, tomato, and mixed greens", price: 9.99, image: "images/Lunch/sandwich2.jpg" }
    ],
    dinner: [
        { name: "Breaded Chicken", description: "Crispy breaded chicken with house sauce", price: 15.99, image: "images/Dinner/breaded_chicken.jpg" },
        { name: "Gourmet Burger", description: "Angus beef patty with premium toppings", price: 13.99, image: "images/Dinner/burger.jpg" },
        { name: "Chicken Parmesan", description: "Breaded chicken breast with marinara and mozzarella", price: 16.99, image: "images/Dinner/chicken_parm.jpg" },
        { name: "Chicken Sandwich", description: "Grilled chicken breast with avocado", price: 11.99, image: "images/Dinner/chicken_sandwich.jpg" },
        { name: "Chicken Alfredo", description: "Fettuccine pasta in creamy Alfredo sauce with grilled chicken", price: 17.99, image: "images/Dinner/Chicken-Alfredo.jpg" },
        { name: "Steak", description: "8oz sirloin steak with garlic butter", price: 22.99, image: "images/Dinner/steak.jpg" }
    ],
    dessert: [
        { name: "Blueberry Pie", description: "Homemade blueberry pie with vanilla ice cream", price: 6.99, image: "images/Desert/blueberry-pie.jpg" },
        { name: "Cherry Pie", description: "Classic cherry pie with whipped cream", price: 6.99, image: "images/Desert/cherry_pie.jpg" },
        { name: "Chocolate Pie", description: "Rich chocolate pie with chocolate shavings", price: 7.99, image: "images/Desert/chocolate_pie.jpg" }
    ],
    sides: [
        { name: "French Fries", description: "Crispy golden fries", price: 3.99, image: "images/Sides/fries.jpg" },
        { name: "Fruit Cup", description: "Assorted fresh seasonal fruits", price: 4.99, image: "images/Sides/fruit_cup.jpg" },
        { name: "Loaded Potato", description: "Baked potato with cheese, bacon, and sour cream", price: 5.99, image: "images/Sides/loaded_potato.jpg" },
        { name: "Mashed Potatoes", description: "Creamy mashed potatoes with gravy", price: 4.99, image: "images/Sides/mashed_potato.jpg" },
        { name: "Onion Rings", description: "Crispy battered onion rings", price: 4.99, image: "images/Sides/onion_rings.jpg" }
    ],
    drinks: [
        { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Fanta", price: 2.49 },
        { name: "Coffee", description: "Regular, Decaf, Espresso, Cappuccino, Latte", price: 2.99 },
        { name: "Tea", description: "Hot or Iced - Various Flavors", price: 2.49 },
        { name: "Water", description: "Bottled Still or Sparkling", price: 1.99 },
        { name: "Milk", description: "Whole, 2%, Skim, or Chocolate", price: 2.49 },
        { name: "Juice", description: "Orange, Apple, Cranberry", price: 2.99 }
    ]
};

// Function to create a menu item element
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';

    if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        menuItem.appendChild(img);
    }

    const details = document.createElement('div');
    details.className = 'menu-item-details';

    const name = document.createElement('h4');
    name.textContent = item.name;
    details.appendChild(name);

    const description = document.createElement('p');
    description.textContent = item.description;
    details.appendChild(description);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${item.price.toFixed(2)}`;
    details.appendChild(price);

    menuItem.appendChild(details);

    return menuItem;
}

// Function to load menu items for a specific category
function loadCategory(category) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = ''; // Clear existing items

    const items = menuData[category];
    items.forEach(item => {
        const menuItem = createMenuItem(item);
        menuItemsContainer.appendChild(menuItem);
    });
}

// Event listener for category buttons
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            loadCategory(category);
        });
    });

    // Load default category (breakfast) on page load
    loadCategory('breakfast');
});