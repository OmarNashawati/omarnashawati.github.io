class Order {
    id;
    orderPlacedDate;
    orderTotal;
    orderItems;

    constructor(orderDetails){
        this.id = orderDetails.id;
        this.orderPlacedDate = orderDetails.orderPlacedDate;
        this.orderTotal = orderDetails.orderTotal;
        this.orderItems = orderDetails.orderItems;
    }
    
}

export function placeOrder(orderDetails){
    const newOrder = new Order(orderDetails)
    console.log(orders);
    
    orders.unshift(newOrder);
    localStorage.setItem('orders',JSON.stringify(orders));
}

export const orders = JSON.parse(localStorage.getItem('orders')) || [];