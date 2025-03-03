import { cart } from "../../data/cart.js";
import { formatCurrency } from "../utility/money.js";


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
        <div>Items (3):</div>
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

    <button class="place-order-button button-primary">
        Place your order
    </button>
    `;





    document.querySelector('.js-payment-summary').innerHTML = html;
}