import {cart} from '../data/cart.js'

const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');


cartItems.innerHTML = cart.length;


