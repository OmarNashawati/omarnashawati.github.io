import {getOrders} from '../data/orders.js';
import {cart} from '../data/cart.js';
import {getArrivingDate} from '../data/deliveryOptions.js'
import {products} from '../data/products.js';

console.log(getOrders());

renderOrdersHtml();


function renderOrdersHtml() {
    let html = '';


    getOrders().forEach(order => {
        
        html += `
        <div class="order-container">

          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${order.getPlacedDate()}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${order.getOrderTotal()}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
              ${renderOrderProducts(order.orderItems)}
          </div>
        </div>
        
        `

    })


    document.querySelector('.js-orders-grid').innerHTML = html;

    document.querySelector('.js-cart-quantity').innerHTML = cart.getCartItemsCount()

}


function renderOrderProducts(cartItems){
  let html = '';

  cartItems.forEach(item => {
    const product = products.find(p=> p.id === item.productId)
    html+=`
     <div class="product-image-container">
          <img src="${product.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${product.name}
          </div>
          <div class="product-delivery-date">
            Arriving on: ${getArrivingDate(item.deliveryOptionId)}
          </div>
          <div class="product-quantity">
            Quantity: ${item.quantity}
          </div>
          <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
          <a href="tracking.html">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
    `

  })

  return html;
}