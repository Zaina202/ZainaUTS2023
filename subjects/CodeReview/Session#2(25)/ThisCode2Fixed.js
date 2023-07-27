function printFoodsAndDrinks(){
	const drinks = ['lemonade', 'soda', 'tea', 'water'];
	const foods = ['beans', 'chicken', 'rice'];

    console.log("Drinks:");
    drinks.forEach((drink) => console.log(drink));
  
    console.log("\nFoods:");
    foods.forEach((food) => console.log(food));
	
	return;
	
}

function calculateAge(birthDate)
{
    const currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;
    const age = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    
	return age;
}


function getWordForNumber(value)
{
	// this is a test function by zead
    let word;
    switch(value) {
        case 0:
            word = "Zero";
            break;
        case 1:
            word = "One";
            break;
        case 2:
            word = "Two";
            break;
        case 3:
            word = "Three";
            break;
        case 4:
            word = "Four";
            break;
        case 5:
            word = "Five";
            break;
        default:
          word="";
      }
  console.log(word);
}
printFoodsAndDrinks();
console.log( calculateAge(new Date(2002,12,24)));
getWordForNumber(4);