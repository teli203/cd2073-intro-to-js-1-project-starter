/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/ 
const products = [
  {
    name: "Carton of Cherries",
    price: 4,
    quantity: 0,
    productId: 1,
    image: "./images/cherry.jpg"
  },
  {
    name: "Carton of Strawberries",
    price: 5,
    quantity: 0,
    productId: 2,
    image: "./images/strawberry.jpg"
  },
  {
    name: "Bag of Oranges",
    price: 10,
    quantity: 0,
    productId: 3,
    image: "./images/orange.jpg"
  },
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Declare a variable to track the total amount paid by the customer */
let totalPaid = 0;

/* Currency conversion rates relative to USD */
/* #COME BACK# 
const conversionRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
};

/* Create a function to convert currency */
/* #COME BACK#
function convertCurrency(amount, currency) {
  return amount * conversionRates[currency];
} */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = products.find(prod => prod.productId === productId);
  if (!product) return;

  product.quantity += 1;

  const cartItem = cart.find(item => item.productId === productId);
  if (!cartItem) {
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const product = products.find(prod => prod.productId === productId);
  if (product) {
    product.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const product = products.find(prod => prod.productId === productId);
  if (product) {
    product.quantity -= 1;
    if (product.quantity === 0) {
      const index = cart.findIndex(item => item.productId === productId);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const product = products.find(prod => prod.productId === productId);
  if (product) {
    product.quantity = 0;
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
}

/* Create a function to update the cart total displayed in the selected currency */
/* #COME BACK# function updateCartTotal() {
  const currency = document.getElementById('currency').value;
  const totalInUSD = cartTotal();
  const convertedTotal = convertCurrency(totalInUSD, currency);
  document.querySelector('.cart-total').innerText = `Cart Total: ${convertedTotal.toFixed(2)} ${currency}`;
} */


/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.length = 0;
  products.forEach(product => product.quantity = 0);
  totalPaid = 0;
}

/* Create a function to clear out the cart and reset the totalPaid */
function clearCartAndTotal() {
  emptyCart();
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  totalPaid += amount;
  const total = cartTotal();


  if (totalPaid >= total) {
     const change = totalPaid - total;
     clearCartAndTotal();
      return change;
  } else {
    return totalPaid - total;
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* convertCurrency */
}
