var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  randPrice = math.floor(math.random())
  cartItem = {[item]:[randPrice]}
  cart.push(cartItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var contents = ''
  if (cart.length <= 0) {
    return "Your shopping cart is empty."
  } else {
    for (let i=0;i<cart.length;i++){
      if (i === cart.length) {
        return specialcase
      } else {
        contents = contents + cart[0]
      }
    }
  }
}

function total() {
  var tot
  if (cart.length <= 0) {
    return
  } else {
    keys = Object.keys(cart)
    for (let i=0;i<cart.length;i++) {
  
      tot += cart[i].keys[j]
    }
  return tot
  }
}  

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
