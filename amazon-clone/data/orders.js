import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {getCartTotal} from '../data/cart.js';
import {formatCurrency} from '../scripts/utility/money.js';
import { generateUUID } from "../scripts/utility/uuid-generator.js";


class Order {
    id;
    placedDate;
    orderTotal;
    orderItems;

    constructor(orderDetails){
        this.id = orderDetails.id || generateUUID();
        this.placedDate = dayjs(orderDetails.placedDate) || dayjs();
        this.orderItems = orderDetails.orderItems;
        this.orderTotal = getCartTotal(this.orderItems);
    }

    getOrderTotal(){
        return formatCurrency(this.orderTotal);
    }

    getPlacedDate(){
        return this.placedDate.format('dddd MM YYYY')
    }
    
}

export function placeOrder(cartItems){
    const newOrder = new Order({orderItems:cartItems})
    orders.unshift(newOrder);
    localStorage.setItem('orders',JSON.stringify(orders));
}

const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function getOrders () {
    return orders.map(orderDetails => {
        return new Order(orderDetails);
    })
} 