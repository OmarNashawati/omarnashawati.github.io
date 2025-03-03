import { formatCurrency } from "../scripts/utility/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

class DeliveryOption {
    id;
    deliveryDays;
    priceCent;

    constructor(optionDetails){
        this.id = optionDetails.id;
        this.deliveryDays = optionDetails.deliveryDays;
        this.priceCent = optionDetails.priceCent;
    }

    getOptionByID(optionId){
        return deliveryOptions.find(option => option.id === optionId);
    }

    getPrice(){
        return this.priceCent === 0 ? 'Free' : `$${formatCurrency(this.priceCent)}`;
    }

    getStringDeliveryDate(){
        const date = dayjs().add(this.deliveryDays, 'days')
        return date.format('dddd, MMMM D');
    }
}

export const deliveryOptions = [
    {
        id:'1',
        deliveryDays:7,
        priceCent:0,
    },
    {
        id:'2',
        deliveryDays:3,
        priceCent:499,
    },
    {
        id:'3',
        deliveryDays:1,
        priceCent:999,
    }
].map(optionDetails => {
    return new DeliveryOption(optionDetails);
})