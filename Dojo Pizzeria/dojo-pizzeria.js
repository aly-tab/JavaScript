function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella, feta"], ["pepperoni", "olives", "onions"]);
var pizza3 = pizzaOven("deep dish", "traditional", ["fontina"], ["red peppers, onions, sausage"]);
var pizza4 = pizzaOven("hand tossed", "white", ["goat cheese"], ["chicken, spinach"]);

var crustOptions = ["deep dish", "hand tossed"];
var sauceOptions = ["traditional", "marinara", "white"];
var cheeseOptions = ["mozzarella", "feta", "fontina", "goat cheese", "gorgonzola"];
var toppingsOptions = ["pepperoni", "sausage", "red peppers", "onions", "sausage", "chicken", "spinach"];

function randomPizza() {
    var arr = [];
    var arrCheese = [];
    var arrToppings = [];
    
    num1 = Math.floor(Math.random() * crustOptions.length);
    arr.push(crustOptions[num1]);
    num2  = Math.floor(Math.random() * sauceOptions.length);
    arr.push(sauceOptions[num2]);
    num3 = Math.floor(Math.random() * cheeseOptions.length);
    num4 = Math.floor(Math.random() * cheeseOptions.length);
    while (num3 === num4) {
        num4 = Math.floor(Math.random() * cheeseOptions.length);       
    }
    arrCheese.push(cheeseOptions[num3])
    arrCheese.push(cheeseOptions[num4]);
    arr.push(arrCheese);
    
    num5 = Math.floor(Math.random() * toppingsOptions.length);
    num6 = Math.floor(Math.random() * toppingsOptions.length);
    num7 = Math.floor(Math.random() * toppingsOptions.length);
    while (num5 === num6 ) {
        num6 = Math.floor(Math.random() * cheeseOptions.length);       
    }
     while (num5 === num7 ) {
        num7 = Math.floor(Math.random() * cheeseOptions.length);       
    }
     while (num6 === num7 ) {
        num7 = Math.floor(Math.random() * cheeseOptions.length);       
    }
    arrToppings.push(toppingsOptions[num5])
    arrToppings.push(toppingsOptions[num6]);
    arrToppings.push(toppingsOptions[num7]);
    arr.push(arrToppings);
    return arr;

}

var randomPizza = randomPizza();

pizza5 = pizzaOven(randomPizza);


console.log("Your random pizza includes: crust " + pizza5.crustType + ", sauce: "
            + pizza5.sauceType + ", cheese: " + pizza5.cheese + 
            ", and toppings: " + pizza5.toppings);

            

