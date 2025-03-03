import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary(){
    let html = '';

    cart.cartItems.forEach(cartItem => {
        const product = products.find(product => product.id === cartItem.productId);

        html += `
        <div class="cart-item-container js-cart-item-container-${cartItem.productId}">
            <div class="delivery-date">
                Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${product.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${product.name}
                </div>
                <div class="product-price">
                    ${product.getPrice()}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span 
                    class="delete-quantity-link link-primary js-delete-item"
                    data-product-id="${cartItem.productId}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                    ${renderDeliveryOptions(cartItem)}
                </div>
            </div>
        </div>
        `
    })

    document.querySelector('.js-order-summary').innerHTML = html;

    document.querySelectorAll('.js-delete-item').forEach(button => {
        button.addEventListener('click',() => {
            const productId = button.dataset.productId;
            cart.removeFromCart(productId);
            document.querySelector(`.js-cart-item-container-${productId}`).remove();
            renderPaymentSummary();
        })
    })

    document.querySelectorAll('.js-delivery-option').forEach(deliveryOptionElement => {
        deliveryOptionElement.addEventListener('click', () => {
            const {productId, optionId} = deliveryOptionElement.dataset;

            cart.updateDelivertOption(productId,optionId);
            renderOrderSummary();
            renderPaymentSummary();
        })
    })
}

function renderDeliveryOptions(cartItem){
    let html = '';

    deliveryOptions.forEach(option => {
        
        html += `
        <div class="delivery-option js-delivery-option"
            data-product-id="${cartItem.productId}" 
            data-option-id="${option.id}">
            <input type="radio" ${cartItem.deliveryOptionId === option.id ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}">
            <div>
            <div class="delivery-option-date">
                ${option.getStringDeliveryDate()}
            </div>
            <div class="delivery-option-price">
                ${option.getPrice()} - Shipping
            </div>
            </div>
        </div>
        `
    });

    return html;
}