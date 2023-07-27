// Print function
function printFoodsAndDrinks() {
    const drinks = ['lemonade', 'soda', 'tea', 'water'];
    const foods = ['beans', 'chicken', 'rice'];
  
    console.log("Drinks:");
    drinks.forEach((drink) => console.log(drink));
  
    console.log("\nFoods:");
    foods.forEach((food) => console.log(food));
  }
  
  // Calculate age function
  function calculateAge(birthDate) {
    const currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;
    const age = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    
    console.log(`Age--> ${age} years`);
  }
  
  
  printFoodsAndDrinks();
  calculateAge(new Date(1985, 1, 16));
  