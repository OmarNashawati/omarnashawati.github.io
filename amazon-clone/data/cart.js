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
}

export const cart = new Cart('cart');