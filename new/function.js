// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.

var cart = [
  {
    "bananas": {
      "gaia": .69,
      "fuji": 1.25
    }
  },
  {
    "Tshirt": {
      "red": 10.34,
      "blue": 14.34
    }
  },
  {
    "proteinShakes": {
      "chocolate": 1.25,
      "strawberry": 4.65
    }
  }
]

function cashRegister(shopobj) {
  for(let i = 0; i < cart.length; i++) {
    let result;
    result += shopobj[i];
  
}