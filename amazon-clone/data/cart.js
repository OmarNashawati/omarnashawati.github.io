import {products} from '../data/products.js';
import {deliveryOptions} from '../data/deliveryOptions.js';

class Cart {
    #name;
    cartItems;

    constructor(name){
        this.#name = name;
        this.cartItems = JSON.parse(localStorage.getItem(this.#name)) || [];
    }

    saveToLocalStorage(){
        localStorage.setItem(this.#name,JSON.stringify(this.cartItems));
    }

    addToCart(productId){
        const matchedItem = this.cartItems.find(item => item.productId === productId);
        if(matchedItem){
            matchedItem.quantity += 1;
        }else{
            this.cartItems.push({
                productId,
                quantity: 1,
                deliveryOptionId: '1',
            })
        }
        
        this.saveToLocalStorage();
    }

    removeFromCart(productId){
        const newCartItems = []
        this.cartItems.forEach(item => {
            if(item.productId !== productId){
                newCartItems.push(item);
            }
        })
        this.cartItems = newCartItems;
        this.saveToLocalStorage();
    }

    updateDelivertOption(productId, deliveryOptionId){
        const matchedItem = this.cartItems.find(item => item.productId === productId);
        console.log(matchedItem);
        
        if(matchedItem){
            matchedItem.deliveryOptionId = deliveryOptionId;
        }
        this.saveToLocalStorage();
    }

    getCartItemsCount(){
        let count = 0;
        this.cartItems.forEach(item => {
            count += item.quantity;
        })
        return count;
    }

    getCartTotal(){
        let total = 0;
        this.cartItems.forEach(item => {
            const productPriceCents = products.find(product => product.id === item.productId).priceCents;
            total += (productPriceCents*item.quantity)
        })

        return total;
    }

    getShippingTotal(){
        let total = 0;
        this.cartItems.forEach(item => {
            const shippingPriceCents = deliveryOptions.find(option => option.id === item.deliveryOptionId).priceCent;
            total += shippingPriceCents;
        })

        return total;
    }

    
}

export const cart = new Cart('cart');