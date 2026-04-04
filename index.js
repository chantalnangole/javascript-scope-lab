// Global scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);

    if(true){
        const anotherNewBurger = 'Maple Bacon Burger';
        burgers.push(anotherNewBurger);
    }
}

// Function to change drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

