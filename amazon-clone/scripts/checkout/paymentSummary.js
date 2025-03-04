import { cart } from "../../data/cart.js";
import { formatCurrency } from "../utility/money.js";
import { placeOrder } from "../../data/orders.js";


export function renderPaymentSummary(){
    
    const taxRate = 0.10;

    const itemsTotal = cart.getCartTotal();
    const shippingTotal = cart.getShippingTotal();
    const beforTax = itemsTotal + shippingTotal;
    const tax = beforTax * taxRate;
    const orderTotal = beforTax + tax;

    let html = `
    <div class="payment-summary-title">
        Order Summary
    </div>

    <div class="payment-summary-row">
        <div>Items (${cart.getCartItemsCount()}):</div>
        <div class="payment-summary-money">$${formatCurrency(itemsTotal)}</div>
    </div>

    <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatCurrency(shippingTotal)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(beforTax)}</div>
    </div>

    <div class="payment-summary-row">
        <div>Estimated tax (${taxRate*100}%):</div>
        <div class="payment-summary-money">$${formatCurrency(tax)}</div>
    </div>

    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order-button">
        Place your order
    </button>
    `;




    console.log(cart);

    document.querySelector('.js-payment-summary').innerHTML = html;

    document.querySelector('.js-place-order-button')
        .addEventListener('click', () => {
            
            placeOrder(cart.cartItems);          
            window.location.href = './orders.html' ;
            localStorage.removeItem('cart');
        })
}