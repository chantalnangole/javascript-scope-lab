// Global scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function
function addBurger() {
    const newBurger = 'Flatburger'; // function-scoped
    burgers.push(newBurger);

    if (true) {
        const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped
        burgers.push(anotherNewBurger);
    }
}

// Function to change drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}
