import {getProductByID} from '../data/products.js';

let order = {};
let selectedSizeIndex = 0;

export function renderPrintingOptions(productID){
    const container = document.querySelector('.product-details-div');
    const selectedProduct = getProductByID(productID)

    order = selectedProduct.options[0];

    
    let html = `
        <div class="product-title">${selectedProduct.title}</div>
        <div class="product-details-container">
            <div class="product-galery">
                <img class="main-img" src="../src/products/${selectedProduct.imageUrl}" alt="" srcset="">
                <img class="sub-img" src="../src/products/${selectedProduct.imageUrl}" alt="" srcset="">
                <img class="sub-img" src="../src/products/${selectedProduct.imageUrl}" alt="" srcset="">
                <img class="sub-img" src="../src/products/${selectedProduct.imageUrl}" alt="" srcset="">

            </div>
            
            <div class="product-options-container">
                <div class="options-container">
                    <div class="option-title">Size</div>
                    ${getSizes(selectedProduct)}
                    <div class="size-options-div">
                        ${getSizeOptions(selectedProduct.options[selectedSizeIndex])}
                    <div>
                </div>
            </div>

            <div class="price-details-container">
                <div class="add-to-cart-button">Add to Card</div>
            </div>
        </div>
    `
    container.innerHTML = html;


    document.querySelectorAll('.size-item').forEach(item => {
        item.addEventListener('click',()=>{
            selectedSizeIndex = item.dataset.index;
            document.querySelector('.size-options-div').innerHTML = getSizeOptions(selectedProduct.options[selectedSizeIndex])
        })
    });
    const optionsItem = document.querySelectorAll('.option-item')
    optionsItem.forEach(item => {
        item.addEventListener('click',()=>{
            optionsItem.forEach(i => i.classList = 'option-item')


            item.classList.add('selected-option');            
        })
    })
}


function getSizes(product){
    let html = "";
    let indexValue = 0;
    for(let option of product.options){
        html += `
         <div class="option-item size-item" data-index="${indexValue}">${option.size}</div>
        `;
        indexValue++;
    }
    return html;
}

function getSizeOptions(sizeOptions){

    let html = "";

    for(let option of Object.entries(sizeOptions.sizeOptions)){
        html += `
         <div>
            <div class="option-title">${option[0]}</div>
            <div>
                ${getOptionItems(option[1],option)}
            </div>
         </div>
        `
    }
    return html;
}

function getOptionItems(sizeOptions){

    const items = Object.values( sizeOptions)
    
    let html = "";
    for(let item of items){
        html += `
            <div class="option-item">${item}</div>
        `
    }
    return html;
}